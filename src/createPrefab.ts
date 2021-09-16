import { createString } from './createString';
import { Prefab } from './decoders';
import { PrefabHash } from './PrefabHash';
import { PrefabSlot } from './PrefabSlot';

export type PrefabFactory = {
  prefab: Prefab;
  slots: { [slotName: string]: number };
  setPosition: (x: number, y: number, z: number) => PrefabFactory;
  setRotation: (x: number, y: number, z: number, w: number) => PrefabFactory;
  setKinematic: (isKinematic?: boolean) => PrefabFactory;
  setServerSleeping: (isServerSleeping?: boolean) => PrefabFactory;
  setVelocity: (x: number, y: number, z: number) => PrefabFactory;
  setAngularVelocity: (x: number, y: number, z: number) => PrefabFactory;
  setMaterial: (materialHash: number) => PrefabFactory;
  setIntegrity: (integrity: number) => PrefabFactory;
  setOnFire: (isLit?: boolean) => PrefabFactory;
  useSlot: (slotHash: number, childPrefab: PrefabFactory) => PrefabFactory;
  toString: () => string;
  print: () => void;
};

const availableSlots = (prefabObjectHash: number) => {
  const prefabName = PrefabHash[prefabObjectHash];
  const slots = PrefabSlot[prefabName as keyof typeof PrefabSlot] ?? {};
  const filteredEntries = Object.entries(slots).filter(([key]) => key.startsWith('Slot_'));

  return Object.fromEntries(filteredEntries);
};

export const createPrefab = (prefabObjectHash: number): PrefabFactory => ({
  prefab: {
    prefabObject: { hash: prefabObjectHash },
    components: {},
    embeddedEntities: {},
    childPrefabs: []
  },

  slots: availableSlots(prefabObjectHash),

  setPosition(x, y, z) {
    if (typeof x === 'undefined' || typeof y === 'undefined' || typeof z === 'undefined') {
      throw new Error(`setPosition called with invalid arguments.\n\nUsage: .setPosition(x, y, z)`);
    }

    const position = { x, y, z };

    this.prefab.prefabObject.position = position;
    this.prefab.components!.NetworkRigidbody = {
      ...this.prefab.components!.NetworkRigidbody,
      position
    };

    return this;
  },

  setRotation(x, y, z, w) {
    if (typeof x === 'undefined' || typeof y === 'undefined' || typeof z === 'undefined' || typeof w === 'undefined') {
      throw new Error(`setRotation called with invalid arguments.\n\nUsage: .setRotation(x, y, z, w)`);
    }

    const rotation = { x, y, z, w };

    this.prefab.prefabObject.rotation = rotation;
    this.prefab.components!.NetworkRigidbody = {
      ...this.prefab.components!.NetworkRigidbody,
      rotation
    };

    return this;
  },

  setKinematic(isKinematic = true) {
    this.prefab.components!.NetworkRigidbody = {
      ...this.prefab.components!.NetworkRigidbody,
      isKinematic
    };

    return this;
  },

  setServerSleeping(isServerSleeping = true) {
    this.prefab.components!.NetworkRigidbody = {
      ...this.prefab.components!.NetworkRigidbody,
      isServerSleeping
    };

    return this;
  },

  setVelocity(x, y, z) {
    if (typeof x === 'undefined' || typeof y === 'undefined' || typeof z === 'undefined') {
      throw new Error(`setVelocity called with invalid arguments.\n\nUsage: .setVelocity(x, y, z)`);
    }

    const velocity = { x, y, z };

    this.prefab.components!.NetworkRigidbody = {
      ...this.prefab.components!.NetworkRigidbody,
      velocity
    };

    return this;
  },

  setAngularVelocity(x, y, z) {
    if (typeof x === 'undefined' || typeof y === 'undefined' || typeof z === 'undefined') {
      throw new Error(`setAngularVelocity called with invalid arguments.\n\nUsage: .setAngularVelocity(x, y, z)`);
    }

    const angularVelocity = { x, y, z };

    this.prefab.components!.NetworkRigidbody = {
      ...this.prefab.components!.NetworkRigidbody,
      angularVelocity
    };

    return this;
  },

  setMaterial(materialHash) {
    if (typeof materialHash === 'undefined') {
      throw new Error(`setMaterial called with invalid arguments.\n\nUsage: .setMaterial(materialHash)`);
    }

    this.prefab.components = {
      ...this.prefab.components,
      PhysicalMaterialPart: { materialHash }
    };

    return this;
  },

  setIntegrity(integrity) {
    if (typeof integrity === 'undefined') {
      throw new Error(`setIntegrity called with invalid arguments.\n\nUsage: .setIntegrity(integrity)`);
    }

    this.prefab.components = {
      ...this.prefab.components,
      DurabilityModule: { integrity }
    };

    return this;
  },

  setOnFire(isLit = true) {
    this.prefab.embeddedEntities!.Fire = {
      ...this.prefab.embeddedEntities!.Fire,
      isAlive: isLit,
      components: {
        ...this.prefab.embeddedEntities!.Fire!.components,
        HeatSourceBase: {
          ...this.prefab.embeddedEntities!.Fire!.components!.HeatSourceBase,
          isLit
        }
      }
    };

    return this;
  },

  useSlot(slotHash, childPrefab) {
    if (typeof slotHash === 'undefined' || typeof childPrefab === 'undefined') {
      throw new Error(`useSlot called with invalid arguments.\n\nUsage: .useSlot(slotHash, prefab)`);
    }

    const validHashes = Object.values(this.slots);

    if (!validHashes.includes(slotHash)) {
      const prefabName = PrefabHash[prefabObjectHash];

      throw new Error(
        `useSlot called with invalid slot hash.\n\n${prefabName} has ${
          validHashes.length ? `these valid slots: ${JSON.stringify(this.slots, null, 2)}` : 'no available slots.'
        }`
      );
    }

    this.prefab.childPrefabs = [
      ...this.prefab.childPrefabs!.filter(({ parentHash }) => parentHash !== slotHash),
      {
        parentHash: slotHash,
        prefab: { ...childPrefab.prefab }
      }
    ];

    return this;
  },

  toString() {
    return createString(this.prefab);
  },

  print() {
    const string = this.toString();

    return console.log(string);
  }
});
