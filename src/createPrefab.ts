import { Prefab } from './Prefab';
import { createString } from './createString';
import { PrefabData } from './decoders';
import { PhysicalMaterialPartHash } from './PhysicalMaterialPartHash';
import * as components from './components';
import { reasonableGifts } from './utils';

const VALID_MATERIALS = Object.values(PhysicalMaterialPartHash)
  .filter(key => typeof key === 'string')
  .sort((a, b) => (a < b ? -1 : 1));

const availableSlots = <TPrefab extends Prefab>(prefab: TPrefab) => {
  const slots = Object.entries(prefab.embedded)
    .filter(([key]) => key.startsWith('Slot_'))
    .map(([key, entity]) => [key, entity.hash]) as [keyof TPrefab['embedded'], number][];

  return Object.fromEntries(slots) as Record<keyof TPrefab['embedded'], number>;
};

const getPrefabName = (hash: number) =>
  Object.entries(Prefab).find(([_, value]) => value.hash === hash)?.[0] ?? '<Unknown prefab hash>';

type PrefabManager<TPrefab extends Prefab, TEmbeddedEntity extends keyof TPrefab['embedded']> = {
  name: string;
  data: PrefabData;
  slots: Record<keyof TPrefab['embedded'], number>;
  setPosition: (x: number, y: number, z: number) => PrefabManager<TPrefab, TEmbeddedEntity>;
  setScale: (scale: number) => PrefabManager<TPrefab, TEmbeddedEntity>;
  setRotation: (x: number, y: number, z: number, w: number) => PrefabManager<TPrefab, TEmbeddedEntity>;
  setKinematic: (isKinematic?: boolean) => PrefabManager<TPrefab, TEmbeddedEntity>;
  setServerSleeping: (isServerSleeping?: boolean) => PrefabManager<TPrefab, TEmbeddedEntity>;
  setVelocity: (x: number, y: number, z: number) => PrefabManager<TPrefab, TEmbeddedEntity>;
  setAngularVelocity: (x: number, y: number, z: number) => PrefabManager<TPrefab, TEmbeddedEntity>;
  setMaterial: (material: keyof typeof PhysicalMaterialPartHash) => PrefabManager<TPrefab, TEmbeddedEntity>;
  setIntegrity: (integrity: number) => PrefabManager<TPrefab, TEmbeddedEntity>;
  setServings: (servings: number) => PrefabManager<TPrefab, TEmbeddedEntity>;
  setOnFire: (isLit?: boolean) => PrefabManager<TPrefab, TEmbeddedEntity>;
  setGiftBoxLabel: (label: string) => PrefabManager<TPrefab, TEmbeddedEntity>;
  addGift: <TChildEmbeddedEntity extends keyof TPrefab['embedded']>(
    gift: PrefabManager<TPrefab, TChildEmbeddedEntity>
  ) => PrefabManager<TPrefab, TEmbeddedEntity>;
  useSlot: <TChildPrefab extends Prefab, TChildEmbeddedEntity extends keyof TChildPrefab['embedded']>(
    slotName: TEmbeddedEntity,
    childPrefab: PrefabManager<TChildPrefab, TChildEmbeddedEntity>
  ) => PrefabManager<TPrefab, TEmbeddedEntity>;
  toString: () => string;
  print: () => void;
};

export const createPrefab = <TPrefab extends Prefab, TEmbeddedEntity extends keyof TPrefab['embedded']>(
  prefab: TPrefab
): PrefabManager<TPrefab, TEmbeddedEntity> => ({
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

  setGiftBoxLabel(label) {
    this.data.components = {
      ...this.data.components,
      SentGift: {
        ...this.data.components!.SentGift,
        senderName: label
      }
    };

    return this;
  },

  addGift(giftPrefab) {
    if (!reasonableGifts.includes(giftPrefab.data.prefabObject.hash)) {
      throw new Error('No gifts for naughty people.');
    }

    const string = createString(giftPrefab.data);

    const [dataString, versionsString] = string.split('|');
    const [hash, messageSizeInBytes, ...data] = dataString.split(',').map(Number);
    const [_, ...chunkVersioning] = versionsString.split(',').map(Number);

    this.data.components = {
      ...this.data.components,
      SentGift: {
        ...this.data.components!.SentGift,
        gifts: [
          ...((this.data.components!.SentGift as components.SentGift | undefined)?.gifts ?? []),
          {
            data,
            messageSizeInBytes,
            hash,
            chunkVersioning
          }
        ]
      }
    };

    return this;
  },

  useSlot(slotName, childPrefab) {
    if (typeof slotName === 'undefined' || typeof childPrefab === 'undefined') {
      throw new Error(`useSlot(slot, prefab) called with invalid arguments.`);
    }

    const slotHash = (this.slots?.[slotName] ?? 0) as number;
    const validHashes = Object.values(this.slots);

    if (slotHash === 0 || !validHashes.includes(slotHash)) {
      throw new Error(
        `'${String(slotName)}' is not a valid slot on '${this.name}'. ${
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
