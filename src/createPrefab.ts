import { Prefab } from './Prefab';
import { createString } from './createString';
import { PrefabData } from './decoders';
import { PhysicalMaterialPartHash } from '.';

const VALID_MATERIALS = Object.values(PhysicalMaterialPartHash)
  .filter(key => typeof key === 'string')
  .sort((a, b) => (a < b ? -1 : 1));

const availableSlots = (prefab: Prefab) => {
  const slots = prefab.slots ?? {};
  const filteredEntries = Object.entries(slots).filter(([key]) => key.startsWith('Slot_'));

  return Object.fromEntries(filteredEntries);
};

const getPrefabName = (hash: number) =>
  Object.entries(Prefab).find(([_, value]) => value.hash === hash)?.[0] ?? '<Unknown prefab hash>';

type PrefabManager<S> = {
  name: string;
  data: PrefabData;
  slots: { [slotName: string]: number };
  setPosition: (x: number, y: number, z: number) => PrefabManager<S>;
  setScale: (scale: number) => PrefabManager<S>;
  setRotation: (x: number, y: number, z: number, w: number) => PrefabManager<S>;
  setKinematic: (isKinematic?: boolean) => PrefabManager<S>;
  setServerSleeping: (isServerSleeping?: boolean) => PrefabManager<S>;
  setVelocity: (x: number, y: number, z: number) => PrefabManager<S>;
  setAngularVelocity: (x: number, y: number, z: number) => PrefabManager<S>;
  setMaterial: (material: keyof typeof PhysicalMaterialPartHash) => PrefabManager<S>;
  setIntegrity: (integrity: number) => PrefabManager<S>;
  setServings: (servings: number) => PrefabManager<S>;
  setOnFire: (isLit?: boolean) => PrefabManager<S>;
  useSlot: <P extends Prefab, C extends keyof P['slots']>(slot: S, childPrefab: PrefabManager<C>) => PrefabManager<S>;
  toString: () => string;
  print: () => void;
};

export const createPrefab = <P extends Prefab, S extends keyof P['slots']>(prefab: P): PrefabManager<S> => ({
  name: getPrefabName(prefab.hash),

  data: {
    prefabObject: { hash: prefab.hash },
    components: {},
    embeddedEntities: {},
    childPrefabs: []
  },

  slots: availableSlots(prefab),

  setPosition(x, y, z) {
    if (typeof x === 'undefined' || typeof y === 'undefined' || typeof z === 'undefined') {
      throw new Error(`setPosition(x, y, z) called with invalid arguments.`);
    }

    const position = { x, y, z };

    this.data.prefabObject.position = position;
    this.data.components!.NetworkRigidbody = {
      ...this.data.components!.NetworkRigidbody,
      position
    };

    return this;
  },

  setRotation(x, y, z, w) {
    if (typeof x === 'undefined' || typeof y === 'undefined' || typeof z === 'undefined' || typeof w === 'undefined') {
      throw new Error(`setRotation(x, y, z, w) called with invalid arguments.`);
    }

    const rotation = { x, y, z, w };

    this.data.prefabObject.rotation = rotation;
    this.data.components!.NetworkRigidbody = {
      ...this.data.components!.NetworkRigidbody,
      rotation
    };

    return this;
  },

  setScale(scale) {
    if (typeof scale === 'undefined') {
      throw new Error(`setScale(scale) called with invalid arguments.`);
    }

    this.data.prefabObject.scale = scale;

    return this;
  },

  setKinematic(isKinematic = true) {
    this.data.components!.NetworkRigidbody = {
      ...this.data.components!.NetworkRigidbody,
      isKinematic
    };

    return this;
  },

  setServerSleeping(isServerSleeping = true) {
    this.data.components!.NetworkRigidbody = {
      ...this.data.components!.NetworkRigidbody,
      isServerSleeping
    };

    return this;
  },

  setVelocity(x, y, z) {
    if (typeof x === 'undefined' || typeof y === 'undefined' || typeof z === 'undefined') {
      throw new Error(`setVelocity(x, y, z) called with invalid arguments.`);
    }

    const velocity = { x, y, z };

    this.data.components!.NetworkRigidbody = {
      ...this.data.components!.NetworkRigidbody,
      velocity
    };

    return this;
  },

  setAngularVelocity(x, y, z) {
    if (typeof x === 'undefined' || typeof y === 'undefined' || typeof z === 'undefined') {
      throw new Error(`setAngularVelocity(x, y, z) called with invalid arguments.`);
    }

    const angularVelocity = { x, y, z };

    this.data.components!.NetworkRigidbody = {
      ...this.data.components!.NetworkRigidbody,
      angularVelocity
    };

    return this;
  },

  setMaterial(material) {
    if (typeof material === 'undefined') {
      throw new Error(`setMaterial(material) called with invalid arguments.`);
    }

    if (!VALID_MATERIALS.includes(material)) {
      throw new Error(
        `'${material}' is not a valid material on '${this.name}'. ${`Valid materials: ${VALID_MATERIALS.join(', ')}`}`
      );
    }

    this.data.components = {
      ...this.data.components,
      PhysicalMaterialPart: {
        materialHash: PhysicalMaterialPartHash[material]
      }
    };

    return this;
  },

  setIntegrity(integrity) {
    if (typeof integrity === 'undefined') {
      throw new Error(`setIntegrity(integrity) called with invalid arguments.`);
    }

    this.data.components = {
      ...this.data.components,
      DurabilityModule: { integrity }
    };

    return this;
  },

  setServings(servings) {
    if (typeof servings === 'undefined') {
      throw new Error(`setServings(servings) called with invalid arguments.`);
    }

    this.data.components!.LiquidContainer = {
      ...this.data.components!.LiquidContainer,
      contentLevel: Math.ceil(servings)
    };

    return this;
  },

  setOnFire(isLit = true) {
    this.data.embeddedEntities!.Fire = {
      ...this.data.embeddedEntities!.Fire,
      isAlive: isLit,
      components: {
        ...this.data.embeddedEntities!.Fire?.components,
        HeatSourceBase: {
          ...this.data.embeddedEntities!.Fire?.components?.HeatSourceBase,
          isLit
        }
      }
    };

    return this;
  },

  useSlot(slotName, childPrefab) {
    if (typeof slotName === 'undefined' || typeof childPrefab === 'undefined') {
      throw new Error(`useSlot(slot, prefab) called with invalid arguments.`);
    }

    const slotHash = ((this.slots as P['slots'] | undefined)?.[slotName] ?? 0) as number;
    const validHashes = Object.values(this.slots);

    if (slotHash === 0 || !validHashes.includes(slotHash)) {
      throw new Error(
        `'${slotName}' is not a valid slot on '${this.name}'. ${
          validHashes.length
            ? `Valid slot(s): ${Object.keys(this.slots).join(', ')}`
            : 'This prefab has no available slots.'
        }`
      );
    }

    this.data.childPrefabs = [
      ...this.data.childPrefabs!.filter(({ parentHash }) => parentHash !== slotHash),
      {
        parentHash: slotHash,
        prefab: { ...childPrefab.data }
      }
    ];

    return this;
  },

  toString() {
    return createString(this.data);
  },

  print() {
    const string = this.toString();

    return console.log(string);
  }
});
