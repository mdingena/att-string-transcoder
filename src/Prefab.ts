import type { Component } from './components/Component.js';
import type { ATTPrefabHash } from './types/ATTPrefabHash.js';
import type { ATTPrefabName } from './types/ATTPrefabName.js';
import type { AngularVelocity } from './types/AngularVelocity.js';
import type { BinaryString } from './types/BinaryString.js';
import type { EntityKey } from './types/EntityKey.js';
import type { PopulationDefinitionName } from './types/PopulationDefinitionName.js';
import type { Position } from './types/Position.js';
import type { PrefabChild } from './types/PrefabChild.js';
import type { PrefabComponents } from './types/PrefabComponents.js';
import type { PrefabEntities } from './types/PrefabEntities.js';
import type { Rotation } from './types/Rotation.js';
import type { SaveString } from './types/SaveString.js';
import type { SetSpawnAreaProps } from './types/SetSpawnAreaProps.js';
import type { Velocity } from './types/Velocity.js';

import { BinaryData, type BinaryDataOptions } from './BinaryData.js';
import { BinaryReader } from './BinaryReader.js';
import { BinaryWriter } from './BinaryWriter.js';
import { Entity } from './Entity.js';
import { DurabilityModuleComponent } from './components/DurabilityModuleComponent.js';
import { HeatSourceBaseComponent } from './components/HeatSourceBaseComponent.js';
import { LiquidContainerComponent } from './components/LiquidContainerComponent.js';
import { NetworkRigidbodyComponent } from './components/NetworkRigidbodyComponent.js';
import { PhysicalMaterialPartComponent } from './components/PhysicalMaterialPartComponent.js';
import { PopulationSpawnAreaComponent } from './components/PopulationSpawnAreaComponent.js';
import { SentGiftComponent } from './components/SentGiftComponent.js';
import { SpawnAreaComponent } from './components/SpawnAreaComponent.js';
import * as constants from './constants.js';
import { ATTPrefabs } from './types/ATTPrefabs.js';
import { ComponentHash } from './types/ComponentHash.js';
import { PhysicalMaterialPartHash } from './types/PhysicalMaterialPartHash.js';
import { PopulationDefinitionHash } from './types/PopulationDefinitionHash.js';
import { isSavableComponent } from './utils/isSavableComponent.js';
import { readChildren } from './utils/readChildren.js';
import { readComponents } from './utils/readComponents.js';
import { readEntities } from './utils/readEntities.js';
import { writeChildren } from './utils/writeChildren.js';
import { writeComponents } from './utils/writeComponents.js';
import { writeEntities } from './utils/writeEntities.js';

type PrefabHash<TPrefabName extends ATTPrefabName> = (typeof ATTPrefabs)[TPrefabName]['hash'];

type PrefabName<TPrefabName extends ATTPrefabName> = (typeof ATTPrefabs)[TPrefabName]['name'];

export type PrefabProps<TPrefabName extends ATTPrefabName> = {
  position?: Position | undefined;
  rotation?: Rotation | undefined;
  scale?: number | undefined;
  components?: Partial<PrefabComponents> | undefined;
  entities?: Partial<PrefabEntities<TPrefabName>> | undefined;
  children?: PrefabChild[] | undefined;
};

/* c8 ignore start */
const FALLBACK_DURABILITY_MODULE_VERSION =
  constants.latestSupportedComponentVersions.get(ComponentHash.DurabilityModule) ??
  constants.latestDurabilityModuleComponentVersion;

const FALLBACK_HEAT_SOURCE_BASE_VERSION =
  constants.latestSupportedComponentVersions.get(ComponentHash.HeatSourceBase) ??
  constants.latestHeatSourceBaseComponentVersion;

const FALLBACK_LIQUID_CONTAINER_VERSION =
  constants.latestSupportedComponentVersions.get(ComponentHash.LiquidContainer) ??
  constants.latestLiquidContainerComponentVersion;

const FALLBACK_PHYSICAL_MATERIAL_PART_VERSION =
  constants.latestSupportedComponentVersions.get(ComponentHash.PhysicalMaterialPart) ??
  constants.latestPhysicalMaterialPartComponentVersion;

const FALLBACK_POPULATION_SPAWN_AREA_VERSION =
  constants.latestSupportedComponentVersions.get(ComponentHash.PopulationSpawnArea) ??
  constants.latestPopulationSpawnAreaComponentVersion;

const FALLBACK_NETWORK_RIGIDBODY_VERSION =
  constants.latestSupportedComponentVersions.get(ComponentHash.NetworkRigidbody) ??
  constants.latestNetworkRigidbodyComponentVersion;

const FALLBACK_SENT_GIFT_VERSION =
  constants.latestSupportedComponentVersions.get(ComponentHash.SentGift) ?? constants.latestSentGiftComponentVersion;

const FALLBACK_SPAWN_AREA_VERSION =
  constants.latestSupportedComponentVersions.get(ComponentHash.SpawnArea) ?? constants.latestSpawnAreaComponentVersion;
/* c8 ignore stop */

/**
 * A JavaScript object representation of an _A Township Tale_ in-game prefab.
 *
 * @see [Class: `Prefab`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/Prefab.md)
 *
 * @example
 * import { Prefab } from 'att-string-transcoder';
 *
 * const prefab = new Prefab('Handle_Short');
 * // or
 * const prefab = Prefab.fromSaveString<'Handle_Short'>(mySaveString);
 * // or
 * const prefab = Prefab.fromBinary<'Handle_Short'>(myBinaryString);
 */
export class Prefab<TPrefabName extends ATTPrefabName = ATTPrefabName> {
  /**
   * The name of the prefab.
   *
   * @example
   * import { Prefab } from 'att-string-transcoder';
   *
   * const prefab = new Prefab('Handle_Short');
   *
   * const name = prefab.name;
   * // `name` is `'Handle_Short'`
   */
  readonly name: PrefabName<TPrefabName>;

  /**
   * The hash of the prefab.
   *
   * @example
   * import { Prefab } from 'att-string-transcoder';
   *
   * const prefab = new Prefab('Handle_Short');
   *
   * const hash = prefab.hash;
   * // `hash` is `42230`
   */
  readonly hash: PrefabHash<TPrefabName>;

  /**
   * The position of the prefab.
   *
   * ⚠️ Note that although you can safely read from this public property, you should not modify this
   * property directly. This is because some prefabs also use a `NetworkRigidbodyComponent` to
   * control their position. You can safely set the position of a prefab using the
   * `setPosition(position)` method.
   *
   * @example
   * import { Prefab } from 'att-string-transcoder';
   *
   * const prefab = new Prefab('Handle_Short', {
   *   position: { x: 420, y: 69, z: 1337 }
   * });
   *
   * const position = prefab.position;
   * // `position` is `{ x: 420, y: 69, z: 1337 }`
   */
  position: Position;

  /**
   * The rotation of the prefab.
   *
   * Note that although you can safely read from this public property, you should not modify this
   * property directly. This is because some prefabs also use a `NetworkRigidbodyComponent` to
   * control their rotation. You can safely set the rotation of a prefab using the
   * `setRotation(rotation)` method.
   *
   * @example
   * import { Prefab } from 'att-string-transcoder';
   *
   * const prefab = new Prefab('Handle_Short', {
   *   rotation: { x: 0.42, y: -0.69, z: -0.1337, w: 0.88 }
   * });
   *
   * const rotation = prefab.rotation;
   * // `rotation` is `{ x: 0.42, y: -0.69, z: -0.1337, w: 0.88 }`
   */
  rotation: Rotation;

  /**
   * The scale of the prefab.
   *
   * Contains the scale of the prefab. You can also set the scale of a prefab using the
   * `setScale(scale)` method.
   *
   * @example
   * import { Prefab } from 'att-string-transcoder';
   *
   * const prefab = new Prefab('Handle_Short', {
   *   scale: 0.69
   * });
   *
   * const scale = prefab.scale;
   * // `scale` is approx. `0.69` (within JavaScript floating point precision)
   */
  scale: number;

  /**
   * A map of the stored components.
   *
   * Provides access to the components stored in this prefab. Components are keyed to their
   * respective names, unless its data contained an unrecognised hash. In that case, the component
   * will be stored in an array under the `Unknown` key.
   *
   * 💡 It might be easier to add components using the `addComponent(component)` method.
   *
   * @example
   * import { Prefab } from 'att-string-transcoder';
   *
   * const prefab = new Prefab('Handle_Short', {
   *   components: {
   *     NetworkRigidbody: new NetworkRigidbodyComponent({ version: 1 })
   *   }
   * });
   *
   * const components = prefab.components;
   * // `components` is `{
   * //   NetworkRigidbody: NetworkRigidbodyComponent {
   * //     hash: 2290978823,
   * //     name: 'NetworkRigidbody',
   * //     position: { x: 0, y: 0, z: 0 },
   * //     rotation: { x: 0, y: 0, z: 0, w: 1 },
   * //     isKinematic: false,
   * //     isServerSleeping: false,
   * //     velocity: { x: 0, y: 0, z: 0 },
   * //     angularVelocity: { x: 0, y: 0, z: 0 }
   * //   },
   * //   Unknown: []
   * // }`
   */
  components: PrefabComponents;

  /**
   * A map of the stored entities.
   *
   * Provides access to the entities stored in this prefab. Entities are keyed to a combination of
   * their respective names and hashes, unless its data contained an unrecognised hash. In that
   * case, the entity will be keyed as `Unknown_` followed by its hash. The reason that entities
   * cannot be keyed without their hashes (like components) is because some prefabs have multiple
   * entities with the same name. For example, the `Handle_Fist` prefab has several `Slot_Deco`
   * entities that are only differentiated by their hash. Conversely, it's also possible that an
   * entity exists on different prefabs with the same name but different hashes. For example, the
   * `Fire` entity exists on the `Infinite_Fire` prefab with hash `8488`, but exists on the
   * `Grass_Clump` prefab with hash `30100`. For this reason, _ATT String Transcoder_ uses spawn
   * infodumps from the game to figure out which entities belong to which prefabs and uses this data
   * to provide you with auto-complete options.
   *
   * ⚠️ Unfortunately this means that it's not easy to tell upfront which hash a `Fire` entity has on
   * a prefab that you're building. Please ensure that you assign a key that is identical to the
   * entity key (which is name, underscore, and hash).
   *
   * 💡 It might be easier to add entities using the `addEntity(entity)` method.
   *
   * @example
   * import { Prefab } from 'att-string-transcoder';
   *
   * const prefab = new Prefab('Handle_Short', {
   *   entities: {
   *     // Please note the keys include the hash, not just the name.
   *     Slot_Multi_6136: new Entity('Slot_Multi_6136'),
   *     Slot_Multi_6138: new Entity('Slot_Multi_6138'),
   *     Unknown_1337: new Entity('Unknown', { hash: 1337 })
   *   }
   * });
   *
   * const entities = prefab.entities;
   * // `entities` is `{
   * //   Slot_Multi_6136: Entity {
   * //     hash: 6136,
   * //     name: 'Slot_Multi',
   * //     isAlive: true,
   * //     components: { Unknown: [] }
   * //   },
   * //   Slot_Multi_6138: Entity {
   * //     hash: 6138,
   * //     name: 'Slot_Multi',
   * //     isAlive: true,
   * //     components: { Unknown: [] }
   * //   },
   * //   Unknown_1337: Entity {
   * //     hash: 1337,
   * //     name: 'Unknown',
   * //     isAlive: true,
   * //     components: { Unknown: [] }
   * //   },
   * // }`
   */
  entities: PrefabEntities<PrefabName<TPrefabName>>;

  /**
   * An array of the stored child prefabs.
   *
   * Contains an array of objects that map nested prefabs to entities on the current prefab.
   *
   * ⚠️ Note that the entity _does not need to exist_ in the prefab in your program! The ATT game
   * server will fill in the blanks. For example, if you create a save string for a `Handle_Short`
   * prefab with several children and no entities on it, and spawn it in-game, it will in fact
   * have all its usual entities to which child prefabs can attach.
   *
   * 💡 It might be easier to add child prefabs using the `addChildPrefab(parentKey, childPrefab)`
   * method.
   *
   * @example
   * import { Prefab } from 'att-string-transcoder';
   *
   * const prefab = new Prefab('Handle_Short', {
   *   children: [
   *     {
   *       // Please note the entity hash below wasn't defined elsewhere in this prefab, yet this will work when spawned in-game.
   *       parentHash: 6136, // The hash for `Slot_Multi_6136` on `Handle_Short` prefab.
   *       prefab: new Prefab('Guard')
   *     }
   *   ]
   * });
   *
   * const children = prefab.children;
   * // `children` is `[
   * //   {
   * //     parentHash: 6136,
   * //     prefab: Prefab {
   * //       name: 'Guard',
   * //       hash: 51672,
   * //       position: { x: 0, y: 0, z: 0 },
   * //       rotation: { x: 0, y: 0, z: 0, w: 1 }
   * //       scale: 1,
   * //       components: { Unknown: [] },
   * //       entities: {},
   * //       children: []
   * //     }
   * //   }
   * // ]`
   */
  children: PrefabChild[];

  /**
   * Creates a new `Prefab` from a list of known _A Township Tale_ prefab names. You may optionally
   * provide additional properties in the second argument.
   *
   * @see [Class: `Prefab`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/Prefab.md)
   *
   * @example
   * import { Prefab } from 'att-string-transcoder';
   *
   * const simple = new Prefab('Grass_Clump');
   *
   * const advanced = new Prefab('Wooden_Stake', {
   *   position: { x: 133.7, y: 420, z: 69 },
   *   rotation: { x: 0.3, y: 0.4, z: 0.1, w: 0.8 },
   *   scale: 1.5,
   *   components: {
   *     NetworkRigidbody: new NetworkRigidbodyComponent({
   *       version: 1,
   *       position: { x: 133.7, y: 420, z: 69 },
   *       rotation: { x: 0.3, y: 0.4, z: 0.1, w: 0.8 },
   *       isKinematic: false,
   *       isServerSleeping: false,
   *       velocity: { x: 0, y: 1, z: 0 },
   *       angularVelocity: { x: 0, y: 1, z: 0 }
   *     })
   *   },
   *   entities: {
   *     Slot_Multi_11474: new Entity('Slot_Multi_11474')
   *   },
   *   children: [
   *     {
   *       parentHash: 11474,
   *       prefab: new Prefab('Grass_Clump', {
   *         entities: {
   *           Fire_30100: new Entity('Fire_30100', {
   *             components: {
   *               HeatSourceBase: new HeatSourceBaseComponent({
   *                 version: 2,
   *                 isLit: true,
   *                 progress: 0.8
   *               })
   *             }
   *           })
   *         }
   *       })
   *     }
   *   ]
   * });
   */
  constructor(
    prefabName: TPrefabName,
    { position, rotation, scale, components, entities, children }: PrefabProps<PrefabName<TPrefabName>> = {}
  ) {
    this.hash = ATTPrefabs[prefabName].hash;
    this.name = prefabName;
    this.position = position ?? { x: 0, y: 0, z: 0 };
    this.rotation = rotation ?? { x: 0, y: 0, z: 0, w: 1 };
    this.scale = scale ?? 1;
    this.components = { ...components, Unknown: components?.Unknown ?? [] } as PrefabComponents;
    this.entities = { ...entities } as PrefabEntities<PrefabName<TPrefabName>>;
    this.children = children ?? [];
  }

  /**
   * Attaches a `Prefab` to this prefab as a child. It can optionally be attached onto one of this
   * prefab's embedded entities, which is required for most child prefabs under normal circumstances.
   * If you do not specify a `parentKey`, you may pass `null` to create a "floating" child. It will
   * be part of this prefab's hierarchy but will most likely behave unexpectedly in the game.
   *
   * @example
   * import { Prefab } from 'att-string-transcoder';
   *
   * const parent = new Prefab('Handle_Short');
   * const child = new Prefab('Guard');
   *
   * parent.addChildPrefab('Slot_Large_SwordType_Craft_54356', child);
   */
  addChildPrefab(
    parentKey: Exclude<EntityKey<PrefabName<TPrefabName>>, 'Unknown'> | null,
    childPrefab: Prefab
  ): Prefab<PrefabName<TPrefabName>> {
    if (typeof parentKey === 'undefined' || typeof childPrefab === 'undefined') {
      throw new Error(
        'You must pass a parent prefab entity hash (or null) and a child prefab to add as a child to this prefab.'
      );
    }

    let entityHash: number;

    if (parentKey === null) {
      entityHash = 0;
    } else {
      const entities = ATTPrefabs[this.name].embedded as Readonly<
        Record<string, { hash: number; name: string; savables: Record<string, { hash: number; name: string }> }>
      >;

      const entity = entities[parentKey as string];

      if (typeof entity === 'undefined') {
        throw new Error(`"${String(parentKey)}" is not a valid entity on "${this.name}".`);
      }

      entityHash = entity.hash;
    }

    this.children = [
      ...this.children,
      {
        parentHash: entityHash,
        prefab: childPrefab
      }
    ];

    return this;
  }

  /**
   * Adds a `Component` to the prefab. Will override any existing component with that name.
   *
   * @example
   * import { NetworkRigidbodyComponent, Prefab } from 'att-string-transcoder';
   *
   * const prefab = new Prefab('Handle_Short');
   * const component = new NetworkRigidbodyComponent({ version: 1 });
   *
   * prefab.addComponent(component);
   */
  addComponent(component: Component): Prefab<PrefabName<TPrefabName>> {
    this.components = {
      ...this.components,
      [component.name]: component
    };

    return this;
  }

  /**
   * Adds an `Entity` to the prefab. Will override any existing entity with that key.
   *
   * @example
   * import { Entity, Prefab } from 'att-string-transcoder';
   *
   * const prefab = new Prefab('Handle_Short');
   * const entity = new Entity<'Handle_Short'>('Slot_Multi_6136');
   *
   * prefab.addEntity(entity);
   */
  addEntity(entity: Entity<TPrefabName>): Prefab<PrefabName<TPrefabName>> {
    this.entities = {
      ...this.entities,
      [`${entity.name}_${entity.hash}`]: entity
    };

    return this;
  }

  /**
   * Adds a `Prefab` gift to this prefab's `SentGift` component. You may call this method more than
   * once to add additional gifts.
   *
   * @example
   * import { Prefab } from 'att-string-transcoder';
   *
   * const box = new Prefab('Gift_Mail_Box');
   * const gift = new Prefab('Dynamite');
   *
   * box.addGift(gift);
   */
  addGift(giftPrefab: Prefab): Prefab<PrefabName<TPrefabName>> {
    if (typeof giftPrefab === 'undefined') {
      throw new Error('You must pass a gift prefab to add to this prefab as a gift.');
    }

    if (isSavableComponent('SentGift', this.name)) {
      const version = this.components.SentGift?.version ?? FALLBACK_SENT_GIFT_VERSION;
      const saveString = giftPrefab.toSaveString();
      const [dataString, versionsString] = saveString.split('|');

      if (typeof dataString === 'undefined' || dataString.length === 0) {
        throw new Error(`Gift prefab data is corrupted.`);
      }

      const unsignedIntegers = dataString.split(',').map(Number);
      const hash = unsignedIntegers.shift();
      const bytes = unsignedIntegers.shift();
      const chunkVersioning = versionsString?.split(',').map(Number) ?? [];

      if (typeof hash === 'undefined' || typeof bytes === 'undefined' || bytes === 0) {
        throw new Error(`Gift prefab data is corrupted.`);
      }

      this.components.SentGift = new SentGiftComponent({
        ...this.components.SentGift,
        version,
        gifts: [
          ...(this.components.SentGift?.gifts ?? []),
          {
            data: unsignedIntegers,
            messageSizeInBytes: bytes,
            hash,
            chunkVersioning
          }
        ]
      });
    }

    return this;
  }

  /**
   * Returns a deep clone of the prefab.
   *
   * @example
   * import { Prefab } from 'att-string-transcoder';
   *
   * const original = new Prefab('Guard').setMaterial('Mythril');
   * const clone = original.clone();
   *
   * clone.setMaterial('Gold');
   *
   * const originalMaterial = original.getMaterial();
   * // `originalMaterial` is still `31174` (Mythril)
   *
   * const cloneMaterial = clone.getMaterial();
   * // `cloneMaterial` is `56394` (Gold)
   */
  clone(): Prefab<PrefabName<TPrefabName>> {
    return Prefab.fromSaveString<PrefabName<TPrefabName>>(this.toSaveString());
  }

  /**
   * Finds the first child prefab matching the given name. If there are multiple child prefabs with
   * the same name, you can use the second argument to provide a parent hash to match against.
   *
   * @example
   * import { Prefab } from 'att-string-transcoder';
   *
   * const prefab = new Prefab('Handle_Short');
   *
   * prefab.addChildPrefab('Slot_Large_SwordType_Craft_6134', new Prefab('Guard'));
   *
   * const childGuard = prefab.findChildPrefab('Guard');
   * // `childGuard` is an instance of `Prefab<'Guard'>`
   *
   * const childPommel = prefab.findChildPrefab('Pommel');
   * // `childPommel` is `undefined`
   */
  findChildPrefab<TChildPrefabName extends ATTPrefabName>(
    prefabName: TChildPrefabName,
    parentHash?: number
  ): Prefab<typeof prefabName> | undefined {
    const child = this.children.find(child =>
      child.prefab.name === prefabName && typeof parentHash === 'undefined' ? true : child.parentHash === parentHash
    );

    if (typeof child === 'undefined') return undefined;

    return child.prefab as Prefab<typeof prefabName>;
  }

  /**
   * Creates a `Prefab` from reading the prefab's binary data stored in a `SaveString`.
   *
   * @example
   * import { BinaryReader, ComponentHash, Prefab, type BinaryString } from 'att-string-transcoder';
   *
   * const binaryString = `0000000000000000101001001111011000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000111111100000000000000000000000001111111000000000000000000000000101011010110001000000111011011000000000000000000000000001000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`;
   *
   * const reader = new BinaryReader(binaryString as BinaryString);
   *
   * const componentVersions = new Map<number, number>([
   *   [ComponentHash.NetworkRigidbody, 1],
   *   [ComponentHash.PhysicalMaterialPart, 1],
   *   [ComponentHash.Pickup, 1]
   *   // etc...
   * ]);
   *
   * const prefab = Prefab.fromBinary<'Handle_Short'>(reader, componentVersions);
   */
  static fromBinary<TPrefabName extends ATTPrefabName = ATTPrefabName>(
    reader: BinaryReader,
    componentVersions?: Map<number, number>
  ): Prefab<PrefabName<TPrefabName>> {
    const versions = componentVersions ?? constants.latestSupportedComponentVersions;

    /**
     * @property {number} hash
     */
    const hash = reader.readUnsignedInteger();

    const name = constants.attPrefabNames[hash as ATTPrefabHash];

    if (typeof name === 'undefined') throw new Error(`Cannot find ATT Prefab with hash ${hash}.`);

    // const prefab = ATTPrefabs[name];

    return new Prefab<PrefabName<TPrefabName>>(name as TPrefabName, {
      /**
       * @property {Position} position
       */
      position: {
        x: reader.readFloat(),
        y: reader.readFloat(),
        z: reader.readFloat()
      },

      /**
       * @property {Rotation} rotation
       */
      rotation: {
        x: reader.readFloat(),
        y: reader.readFloat(),
        z: reader.readFloat(),
        w: reader.readFloat()
      },

      /**
       * @property {number} scale
       */
      scale: reader.readFloat(),

      /**
       * @property {PrefabComponents} components
       */
      components: readComponents(reader, versions),

      /**
       * @property {PrefabEntities} entities
       */
      entities: readEntities(reader, name, versions),

      /**
       * @property {PrefabChild[]} children
       */
      children: readChildren(reader, versions)
    });
  }

  /**
   * Creates a `Prefab` from reading a `SaveString`.
   *
   * @example
   * import { Prefab } from 'att-string-transcoder';
   *
   * const saveString = `43430,230,43430,3290698471,1125743666,1132721897,1050703933,3208373430,1039090831,1058493384,1043542835,2290978823,418,3290698471,1125743666,1132721897,1050703933,3208373430,1039090831,1058493384,3221225472,0,0,0,0,0,363610349,2147483736,3005828291,3221225472,2415919104,0,395228240,397619388,393508864,400941080,2546407302,4157020038,3890602430,1579755829,536870916,374086096,2147483844,1610612736,765,2684354569,338752663,2281701377,0,0,19021736,1744830465,67108864,75722752,0,303,67108864,1124073472,0,0,`;
   *
   * const prefab = Prefab.fromSaveString<'SpriggullDrumstick_Full_Ripe'>(saveString);
   */
  static fromSaveString<TPrefabName extends ATTPrefabName = ATTPrefabName>(
    saveString: string,
    options?: BinaryDataOptions
  ): Prefab<PrefabName<TPrefabName>> {
    if (!BinaryData.isSaveString(saveString)) {
      throw new Error('SaveString is malformed.');
    }

    const [dataString, componentVersionsString] = saveString.split('|');

    if (typeof dataString === 'undefined' || dataString.length === 0) throw new Error('SaveString is malformed.');

    const [hashString, dataLengthString, ...unsignedIntegerStrings] = dataString.split(',').filter(Boolean);

    if (
      typeof hashString === 'undefined' ||
      typeof dataLengthString === 'undefined' ||
      unsignedIntegerStrings.length === 0
    ) {
      throw new Error('SaveString is malformed.');
    }

    const unsignedIntegers = unsignedIntegerStrings.map(Number);
    let componentVersions: Map<number, number> | undefined = undefined;

    if (typeof componentVersionsString !== 'undefined') {
      componentVersions = new Map<number, number>();

      const [pairCountString, ...versionPairStrings] = componentVersionsString.split(',').filter(Boolean);

      if (typeof pairCountString === 'undefined' || typeof versionPairStrings === 'undefined') {
        throw new Error('SaveString is malformed.');
      }

      const expectedCount = Number(pairCountString);
      const versionPairs = versionPairStrings.map(Number);

      if (expectedCount !== versionPairs.length / 2) {
        throw new Error(
          `SaveString contains invalid versioning. Expected ${expectedCount} versions but parsed ${
            versionPairs.length / 2
          }.`
        );
      }

      let lastHash = 0;

      for (let index = 0; index < expectedCount; ++index) {
        const isHash = index % 2 === 0;

        if (isHash) {
          lastHash = Number(versionPairs[index]);
        } else {
          componentVersions.set(lastHash, Number(versionPairs[index]));
        }
      }
    }

    const data = BinaryData.fromUnsignedIntegerArray(unsignedIntegers, options).toBinaryString();
    const reader = new BinaryReader(data);

    return Prefab.fromBinary<TPrefabName>(reader, componentVersions);
  }

  /**
   * Gets the spin (vector) on the prefab.
   *
   * @example
   * import { Prefab } from 'att-string-transcoder';
   *
   * const prefab = Prefab<'Stone'>.fromSaveString('...');
   *
   * const angularVelocity = prefab.getAngularVelocity();
   * const { x, y, z } = angularVelocity;
   */
  getAngularVelocity(): Velocity {
    return this.components.NetworkRigidbody?.angularVelocity ?? { x: 0, y: 0, z: 0 };
  }

  /**
   * Gets a map of component hashes and the versions used on this prefab. Will throw an error if the
   * prefab uses mixed versions of a particular component.
   *
   * @example
   * import { Prefab } from 'att-string-transcoder';
   *
   * const prefab = Prefab<'Handle_Short'>.fromSaveString('...');
   *
   * const componentVersions = prefab.getComponentVersions();
   */
  getComponentVersions(): Map<number, number> {
    const versions = new Map<number, number>();

    function setComponentVersion(hash: number, version: number): ReturnType<Map<number, number>['set']> {
      const storedVersion = versions.get(hash);

      if (typeof storedVersion !== 'undefined' && storedVersion !== version) {
        throw new Error(
          `Component ${hash} exists with version ${storedVersion} and ${version}. All instances of a component must exist with the same version.`
        );
      }

      return versions.set(hash, version);
    }

    /* Get component versions from prefab components. */
    for (const component of Object.values(this.components)) {
      if (Array.isArray(component)) {
        for (const unknownComponent of component) {
          setComponentVersion(unknownComponent.hash, unknownComponent.version);
        }
      } else {
        setComponentVersion(component.hash, component.version);
      }
    }

    /* Get component versions from prefab entities. */
    for (const entity of Object.values(this.entities)) {
      for (const component of Object.values(entity.components)) {
        if (Array.isArray(component)) {
          for (const unknownComponent of component) {
            setComponentVersion(unknownComponent.hash, unknownComponent.version);
          }
        } else {
          setComponentVersion(component.hash, component.version);
        }
      }
    }

    /* Get component versions from child prefabs. */
    for (const { prefab } of this.children) {
      const componentVersions = prefab.getComponentVersions();

      for (const [hash, version] of componentVersions.entries()) {
        setComponentVersion(hash, version);
      }
    }

    return versions;
  }

  /**
   * Gets the gift sender's name, which is labeled on the gift.
   *
   * @example
   * import { Prefab } from 'att-string-transcoder';
   *
   * const prefab = Prefab<'Gift_Mail_Box'>.fromSaveString('...');
   *
   * const giftBoxLabel = prefab.getGiftBoxLabel();
   */
  getGiftBoxLabel(): string {
    return this.components.SentGift?.senderName ?? '';
  }

  /**
   * Gets the prefab's physical integrity.
   *
   * @example
   * import { Prefab } from 'att-string-transcoder';
   *
   * const prefab = Prefab<'Handle_Short'>.fromSaveString('...');
   *
   * const integrity = prefab.getIntegrity();
   */
  getIntegrity(): number {
    return this.components.DurabilityModule?.integrity ?? 1;
  }

  /**
   * Gets the {@link https://docs.unity3d.com/ScriptReference/Rigidbody-isKinematic.html kinematic}
   * state of the prefab.
   *
   * @example
   * import { Prefab } from 'att-string-transcoder';
   *
   * const prefab = Prefab<'Handle_Short'>.fromSaveString('...');
   *
   * const isKinematic = prefab.getKinematic();
   */
  getKinematic(): boolean {
    return this.components.NetworkRigidbody?.isKinematic ?? false;
  }

  /**
   * Gets the prefab's physical material.
   *
   * @example
   * import { PhysicalMaterialPartHash, Prefab } from 'att-string-transcoder';
   *
   * const prefab = Prefab<'Guard'>.fromSaveString('...');
   *
   * const materialHash = prefab.getMaterial();
   * const materialName = PhysicalMaterialPartHash[materialHash];
   */
  getMaterial(): PhysicalMaterialPartHash {
    return this.components.PhysicalMaterialPart?.materialHash ?? 0;
  }

  /**
   * Gets the burning state of the prefab.
   *
   * @example
   * import { Prefab } from 'att-string-transcoder';
   *
   * const prefab = Prefab<'Grass_Clump'>.fromSaveString('...');
   *
   * const isOnFire = prefab.getOnFire();
   */
  getOnFire(): boolean {
    const fireEntity = Object.values(this.entities).find(entity => entity.name === 'Fire');

    return fireEntity?.components.HeatSourceBase?.isLit ?? false;
  }

  /**
   * Gets the position of the prefab. If the prefab is a child of another prefab, then this position
   * is local to that parent. Otherwise, this position is in world space.
   *
   * @example
   * import { Prefab } from 'att-string-transcoder';
   *
   * const prefab = Prefab<'Handle_Short'>.fromSaveString('...');
   *
   * const position = prefab.getPosition();
   * const { x, y, z } = position;
   */
  getPosition(): Position {
    return this.position;
  }

  /**
   * Gets the rotation of the prefab. If the prefab is a child of another prefab, then this rotation
   * is local to that parent. Otherwise, this rotation is in world space.
   *
   * @example
   * import { Prefab } from 'att-string-transcoder';
   *
   * const prefab = Prefab<'Handle_Short'>.fromSaveString('...');
   *
   * const rotation = prefab.getRotation();
   * const { x, y, z, w } = rotation;
   */
  getRotation(): Rotation {
    return this.rotation;
  }

  /**
   * Gets the scale of the prefab.
   *
   * @example
   * import { Prefab } from 'att-string-transcoder';
   *
   * const prefab = Prefab<'Handle_Short'>.fromSaveString('...');
   *
   * const scale = prefab.getScale();
   */
  getScale(): number {
    return this.scale;
  }

  /**
   * Gets the {@link https://docs.unity3d.com/Manual/RigidbodiesOverview.html sleeping}
   * state of the prefab.
   *
   * @example
   * import { Prefab } from 'att-string-transcoder';
   *
   * const prefab = Prefab<'Handle_Short'>.fromSaveString('...');
   *
   * const isServerSleeping = prefab.getServerSleeping();
   */
  getServerSleeping(): boolean {
    return this.components.NetworkRigidbody?.isServerSleeping ?? false;
  }

  /**
   * Gets the number of servings on a liquid container prefab.
   *
   * @example
   * import { Prefab } from 'att-string-transcoder';
   *
   * const prefab = Prefab<'Potion_Medium'>.fromSaveString('...');
   *
   * const servings = prefab.getServings();
   */
  getServings(): number {
    return this.components.LiquidContainer?.contentLevel ?? 0;
  }

  /**
   * Gets the name of the spawn area population, if there is one. Returns `undefined` otherwise.
   *
   * @example
   * import { Prefab } from 'att-string-transcoder';
   *
   * const prefab = Prefab<'Disk_Encounter'>.fromSaveString('...');
   *
   * const populationName = prefab.getSpawnAreaPopulationName();
   */
  getSpawnAreaPopulationName(): 'Unknown' | PopulationDefinitionName | undefined {
    const populationDefinitionHash = this.components.PopulationSpawnArea?.definition as
      | PopulationDefinitionHash
      | undefined;
    const populationDefinitionName =
      typeof populationDefinitionHash === 'undefined'
        ? undefined
        : (PopulationDefinitionHash[populationDefinitionHash] as PopulationDefinitionName | undefined) ?? 'Unknown';

    return populationDefinitionName;
  }

  /**
   * Gets the direction (vector) on the prefab. Units are in metres per second.
   *
   * @example
   * import { Prefab } from 'att-string-transcoder';
   *
   * const prefab = Prefab<'Stone'>.fromSaveString('...');
   *
   * const velocity = prefab.getVelocity();
   * const { x, y, z } = velocity;
   */
  getVelocity(): Velocity {
    return this.components.NetworkRigidbody?.velocity ?? { x: 0, y: 0, z: 0 };
  }

  /**
   * Prints this prefab's data structure to the console.
   *
   * @example
   * import { Prefab } from 'att-string-transcoder';
   *
   * const prefab = Prefab<'Handle_Short'>.fromSaveString('...');
   *
   * prefab.inspect();
   */
  inspect(): Prefab<PrefabName<TPrefabName>> {
    console.log(JSON.stringify(this, null, 2));

    return this;
  }

  /**
   * Prints this prefab's `SaveString` to the console.
   *
   * @example
   * import { Prefab } from 'att-string-transcoder';
   *
   * const prefab = Prefab<'Handle_Short'>.fromSaveString('...');
   *
   * prefab.print();
   */
  print(): Prefab<PrefabName<TPrefabName>> {
    const saveString = this.toSaveString();
    console.log(saveString);

    return this;
  }

  /**
   * Removes all child `Prefab` from this prefab.
   *
   * @example
   * import { Prefab } from 'att-string-transcoder';
   *
   * const prefab = Prefab<'Handle_Short'>.fromSaveString('...');
   *
   * prefab.removeAllChildPrefabs();
   */
  removeAllChildPrefabs(): Prefab<PrefabName<TPrefabName>> {
    this.children = [];

    return this;
  }

  /**
   * Removes all components on this prefab.
   *
   * @example
   * import { Prefab } from 'att-string-transcoder';
   *
   * const prefab = Prefab<'Handle_Short'>.fromSaveString('...');
   *
   * prefab.removeAllComponents();
   */
  removeAllComponents(): Prefab<PrefabName<TPrefabName>> {
    this.components = { Unknown: [] };

    return this;
  }

  /**
   * Removes all entities on this prefab.
   *
   * @example
   * import { Prefab } from 'att-string-transcoder';
   *
   * const prefab = Prefab<'Handle_Short'>.fromSaveString('...');
   *
   * prefab.removeAllEntities();
   */
  removeAllEntities(): Prefab<PrefabName<TPrefabName>> {
    this.entities = {};

    return this;
  }

  /**
   * Removes all gift `Prefab` from this prefab.
   *
   * @example
   * import { Prefab } from 'att-string-transcoder';
   *
   * const prefab = Prefab<'Gift_Mail_Box'>.fromSaveString('...');
   *
   * prefab.removeAllGifts();
   */
  removeAllGifts(): Prefab<PrefabName<TPrefabName>> {
    const sentGiftComponent = this.components.SentGift;

    if (typeof sentGiftComponent !== 'undefined') {
      sentGiftComponent.gifts = [];
    }

    return this;
  }

  /**
   * Removes the specified child `Prefab` from this prefab.
   *
   * @example
   * import { Prefab } from 'att-string-transcoder';
   *
   * const prefab = Prefab<'Handle_Short'>.fromSaveString('...');
   *
   * prefab.removeChildPrefab(51672);
   * // or
   * prefab.removeChildPrefab('Guard');
   */
  removeChildPrefab(prefabHash: ATTPrefabHash): Prefab;
  removeChildPrefab(prefabName: ATTPrefabName): Prefab;
  removeChildPrefab(prefabArg: ATTPrefabHash | ATTPrefabName): Prefab<PrefabName<TPrefabName>> {
    if (typeof prefabArg === 'undefined') {
      throw new Error('You must pass a child prefab hash or name to remove from this prefab.');
    }

    const key = typeof prefabArg === 'number' ? 'hash' : 'name';

    this.children = [...this.children.filter(child => child.prefab[key] !== prefabArg)];

    return this;
  }

  /**
   * Removes the specified component from this prefab.
   *
   * @example
   * import { ComponentHash, Prefab } from 'att-string-transcoder';
   *
   * const prefab = Prefab<'Handle_Short'>.fromSaveString('...');
   *
   * prefab.removeComponent(ComponentHash.NetworkRigidbody);
   * // or
   * prefab.removeComponent('NetworkRigidbody');
   */
  removeComponent(componentHash: ComponentHash): Prefab<PrefabName<TPrefabName>>;
  removeComponent(componentName: keyof Omit<PrefabComponents, 'Unknown'>): Prefab<PrefabName<TPrefabName>>;
  removeComponent(
    componentArg: ComponentHash | keyof Omit<PrefabComponents, 'Unknown'>
  ): Prefab<PrefabName<TPrefabName>> {
    if (typeof componentArg === 'undefined') {
      throw new Error('You must pass a component hash or name to remove from this prefab.');
    }

    const componentName =
      typeof componentArg === 'string'
        ? componentArg
        : (ComponentHash[componentArg] as keyof typeof ComponentHash | undefined);

    if (typeof componentName === 'undefined') {
      for (const component of Object.values(this.components)) {
        if (Array.isArray(component)) {
          this.components.Unknown = component.filter(unknownComponent => unknownComponent.hash !== componentArg);
        } else if (component.hash === componentArg) {
          delete this.components[component.name as keyof Omit<PrefabComponents, 'Unknown'>];
        }
      }
    } else {
      if (componentName in this.components) {
        delete this.components[componentName];
      } else {
        const unknownComponentIndex = this.components.Unknown.findIndex(component => component.name === componentArg);

        if (unknownComponentIndex > -1) {
          this.components.Unknown = this.components.Unknown.toSpliced(unknownComponentIndex, 1);
        }
      }
    }

    return this;
  }

  /**
   * Removes the specified entity from this prefab.
   *
   * @example
   * import { Prefab } from 'att-string-transcoder';
   *
   * const prefab = Prefab<'Handle_Short'>.fromSaveString('...');
   *
   * prefab.removeEntity('Slot_Multi_6136');
   */
  removeEntity(entityKey: Exclude<EntityKey<TPrefabName>, 'Unknown'>): Prefab<PrefabName<TPrefabName>> {
    if (typeof entityKey === 'undefined') {
      throw new Error('You must pass an entity name to remove from this prefab.');
    }

    delete this.entities[entityKey as string];

    return this;
  }

  /**
   * Removes the specified gift `Prefab` from this prefab.
   *
   * @example
   * import { Prefab } from 'att-string-transcoder';
   *
   * const prefab = Prefab<'Gift_Mail_Box'>.fromSaveString('...');
   *
   * prefab.removeGift(31326);
   * // or
   * prefab.removeGift('Dynamite');
   */
  removeGift(prefabHash: ATTPrefabHash): Prefab<PrefabName<TPrefabName>>;
  removeGift(prefabName: ATTPrefabName): Prefab<PrefabName<TPrefabName>>;
  removeGift(prefabArg: ATTPrefabHash | ATTPrefabName): Prefab<PrefabName<TPrefabName>> {
    if (typeof prefabArg === 'undefined') {
      throw new Error('You must pass a gift prefab hash or name to remove from this prefab.');
    }

    const hash =
      typeof prefabArg === 'number' ? prefabArg : (ATTPrefabs[prefabArg]?.hash as ATTPrefabHash | undefined) ?? 0;

    const sentGiftComponent = this.components.SentGift;

    if (typeof sentGiftComponent !== 'undefined') {
      sentGiftComponent.gifts = [...sentGiftComponent.gifts.filter(gift => gift?.hash !== hash)];
    }

    return this;
  }

  /**
   * Removes the spawn area components from the prefab.
   *
   * @example
   * import { Prefab } from 'att-string-transcoder';
   *
   * const prefab = Prefab<'Disk_Encounter'>.fromSaveString('...');
   *
   * prefab.removeSpawnArea();
   */
  removeSpawnArea(): Prefab<PrefabName<TPrefabName>> {
    delete this.components.PopulationSpawnArea;
    delete this.components.SpawnArea;

    return this;
  }

  /**
   * Sets a spin (vector) on the prefab, causing the physics engine to apply a force to it when
   * spawning. Units are in metres per second. Only works reliably on the parent prefab. Does not
   * work on kinematic prefabs. Does not work on static prefabs.
   *
   * @example
   * import { Prefab } from 'att-string-transcoder';
   *
   * const prefab = new Prefab('Stone');
   *
   * prefab.setAngularVelocity({ x: 420, y: 69, z: 1337 });
   */
  setAngularVelocity({ x, y, z }: AngularVelocity): Prefab<PrefabName<TPrefabName>> {
    if (isSavableComponent('NetworkRigidbody', this.name)) {
      const version = this.components.NetworkRigidbody?.version ?? FALLBACK_NETWORK_RIGIDBODY_VERSION;
      const angularVelocity: AngularVelocity = { x, y, z };

      this.components.NetworkRigidbody = new NetworkRigidbodyComponent({
        ...this.components.NetworkRigidbody,
        version,
        angularVelocity
      });
    }

    return this;
  }

  /**
   * Sets the gift sender's name, which is labeled on the gift.
   *
   * @example
   * import { Prefab } from 'att-string-transcoder';
   *
   * const prefab = new Prefab('Gift_Mail_Box');
   *
   * prefab.setGiftBoxLabel('topkek');
   */
  setGiftBoxLabel(label: string): Prefab<PrefabName<TPrefabName>> {
    if (typeof label === 'undefined') {
      throw new Error('You must pass a string to set as the gift box label.');
    }

    if (isSavableComponent('SentGift', this.name)) {
      const version = this.components.SentGift?.version ?? FALLBACK_SENT_GIFT_VERSION;

      this.components.SentGift = new SentGiftComponent({
        ...this.components.SentGift,
        version,
        senderName: label
      });
    }

    return this;
  }

  /**
   * Sets the prefab's integrity. This can change both its appearance and other qualities such as
   * durability and the amount of materials recovered from recycling.
   *
   * @example
   * import { Prefab } from 'att-string-transcoder';
   *
   * const prefab = new Prefab('Handle_Short');
   *
   * prefab.setIntegrity(0.69);
   */
  setIntegrity(integrity: number): Prefab<PrefabName<TPrefabName>> {
    if (typeof integrity === 'undefined') {
      throw new Error('You must pass a number to set as the integrity.');
    }

    if (isSavableComponent('DurabilityModule', this.name)) {
      const version = this.components.DurabilityModule?.version ?? FALLBACK_DURABILITY_MODULE_VERSION;

      this.components.DurabilityModule = new DurabilityModuleComponent({
        ...this.components.DurabilityModule,
        version,
        integrity
      });
    }

    return this;
  }

  /**
   * Makes the prefab {@link https://docs.unity3d.com/ScriptReference/Rigidbody-isKinematic.html kinematic}.
   * By default, a `new Prefab()` is not kinematic, but some prefabs require to be kinematic to work
   * properly. You can optionally pass a boolean, for example `prefab.setKinematic(false)`.
   *
   * @example
   * import { Prefab } from 'att-string-transcoder';
   *
   * const prefab = new Prefab('Handle_Short');
   *
   * prefab.setKinematic(true);
   */
  setKinematic(isKinematic?: boolean): Prefab<PrefabName<TPrefabName>> {
    if (isSavableComponent('NetworkRigidbody', this.name)) {
      const version = this.components.NetworkRigidbody?.version ?? FALLBACK_NETWORK_RIGIDBODY_VERSION;

      this.components.NetworkRigidbody = new NetworkRigidbodyComponent({
        ...this.components.NetworkRigidbody,
        version,
        isKinematic: isKinematic ?? true
      });
    }

    return this;
  }

  /**
   * Sets the prefab's physical material. This can change both its appearance and other qualities such
   * as durability, damage, heat retention and weight.
   *
   * @example
   * import { PhysicalMaterialPartHash, Prefab } from 'att-string-transcoder';
   *
   * const prefab = new Prefab('Handle_Short');
   *
   * prefab.setMaterial(PhysicalMaterialPartHash.Mythril);
   * // or
   * prefab.setMaterial('Mythril');
   */
  setMaterial(materialHash: PhysicalMaterialPartHash): Prefab<PrefabName<TPrefabName>>;
  setMaterial(materialName: keyof typeof PhysicalMaterialPartHash): Prefab<PrefabName<TPrefabName>>;
  setMaterial(
    materialArg: PhysicalMaterialPartHash | keyof typeof PhysicalMaterialPartHash
  ): Prefab<PrefabName<TPrefabName>> {
    if (typeof materialArg === 'undefined') {
      throw new Error('You must pass a PhysicalMaterialPartHash to set as the material.');
    }

    if (isSavableComponent('PhysicalMaterialPart', this.name)) {
      const version = this.components.PhysicalMaterialPart?.version ?? FALLBACK_PHYSICAL_MATERIAL_PART_VERSION;
      const materialHash = typeof materialArg === 'number' ? materialArg : PhysicalMaterialPartHash[materialArg];

      this.components.PhysicalMaterialPart = new PhysicalMaterialPartComponent({
        ...this.components.PhysicalMaterialPart,
        version,
        materialHash
      });
    }

    return this;
  }

  /**
   * Sets the prefab on fire, if it is capable of catching fire.
   *
   * @example
   * import { Prefab } from 'att-string-transcoder';
   *
   * const prefab = new Prefab('Grass_Clump');
   *
   * prefab.setOnFire(true);
   */
  setOnFire(isLit?: boolean): Prefab<PrefabName<TPrefabName>> {
    const validFireEntity = Object.values<{
      hash: number;
      name: string;
      savables: Record<string, { hash: number; name: string }>;
    }>(ATTPrefabs[this.name].embedded).find(entity => {
      return Object.values(entity.savables).some(savable => ['Fire', 'FireDissolve'].includes(savable.name));
    });

    if (typeof validFireEntity !== 'undefined') {
      const currentFireEntity = Object.values(this.entities).find(entity => entity.name === validFireEntity.name);
      const version = currentFireEntity?.components.HeatSourceBase?.version ?? FALLBACK_HEAT_SOURCE_BASE_VERSION;
      const key = `${validFireEntity.name}_${validFireEntity.hash}`;

      this.entities[key] = new Entity<TPrefabName>(key as keyof (typeof ATTPrefabs)[TPrefabName]['embedded'], {
        hash: validFireEntity.hash,
        isAlive: true,
        components: {
          ...currentFireEntity?.components,
          HeatSourceBase: new HeatSourceBaseComponent({
            version,
            isLit: isLit ?? true
          })
        }
      });
    }

    return this;
  }

  /**
   * Sets the position of the prefab. If the prefab is a child of another prefab, then this position
   * is local to that parent. Otherwise, this position is in world space.
   *
   * @example
   * import { Prefab } from 'att-string-transcoder';
   *
   * const prefab = new Prefab('Stone');
   *
   * prefab.setPosition({ x: 420, y: 69, z: 1337 });
   */
  setPosition({ x, y, z }: Position): Prefab<PrefabName<TPrefabName>> {
    const position: Position = { x, y, z };
    this.position = position;

    if (isSavableComponent('NetworkRigidbody', this.name)) {
      const version = this.components.NetworkRigidbody?.version ?? FALLBACK_NETWORK_RIGIDBODY_VERSION;

      this.components.NetworkRigidbody = new NetworkRigidbodyComponent({
        ...this.components.NetworkRigidbody,
        version,
        position
      });
    }

    return this;
  }

  /**
   * Sets the rotation of the prefab. If the prefab is a child of another prefab, then this rotation
   * is local to that parent. Otherwise, this rotation is in world space.
   *
   * @example
   * import { Prefab } from 'att-string-transcoder';
   *
   * const prefab = new Prefab('Stone');
   *
   * prefab.setRotation({ x: 0.42, y: -0.69, z: 0.1337, w: -0.88 });
   */
  setRotation({ x, y, z, w }: Rotation): Prefab<PrefabName<TPrefabName>> {
    const rotation: Rotation = { x, y, z, w };
    this.rotation = rotation;

    if (isSavableComponent('NetworkRigidbody', this.name)) {
      const version = this.components.NetworkRigidbody?.version ?? FALLBACK_NETWORK_RIGIDBODY_VERSION;

      this.components.NetworkRigidbody = new NetworkRigidbodyComponent({
        ...this.components.NetworkRigidbody,
        version,
        rotation
      });
    }

    return this;
  }

  /**
   * Sets the scale of the prefab.
   *
   * @example
   * import { Prefab } from 'att-string-transcoder';
   *
   * const prefab = new Prefab('Stone');
   *
   * prefab.setScale(0.69);
   */
  setScale(scale: number): Prefab<PrefabName<TPrefabName>> {
    if (typeof scale === 'undefined') {
      throw new Error('You must pass a number to set as the scale.');
    }

    this.scale = scale;

    return this;
  }

  /**
   * Makes the prefab {@link https://docs.unity3d.com/Manual/RigidbodiesOverview.html sleep}.
   * By default, a `new Prefab()` is not sleeping. A sleeping prefab does not have its physics
   * simulated until it receives a collision or force, such as touching it. You can optionally pass
   * a boolean, for example `prefab.setServerSleeping(false)`.
   *
   * @example
   * import { Prefab } from 'att-string-transcoder';
   *
   * const prefab = new Prefab('Handle_Short');
   *
   * prefab.setServerSleeping(true);
   */
  setServerSleeping(isServerSleeping?: boolean): Prefab<PrefabName<TPrefabName>> {
    if (isSavableComponent('NetworkRigidbody', this.name)) {
      const version = this.components.NetworkRigidbody?.version ?? FALLBACK_NETWORK_RIGIDBODY_VERSION;

      this.components.NetworkRigidbody = new NetworkRigidbodyComponent({
        ...this.components.NetworkRigidbody,
        version,
        isServerSleeping: isServerSleeping ?? true
      });
    }

    return this;
  }

  /**
   * Sets the number of servings on a liquid container prefab.
   *
   * @example
   * import { Prefab } from 'att-string-transcoder';
   *
   * const prefab = new Prefab('Potion_Medium');
   *
   * prefab.setServings(69);
   */
  setServings(servings: number): Prefab<PrefabName<TPrefabName>> {
    if (typeof servings === 'undefined') {
      throw new Error('You must pass a number to set as the amount of servings.');
    }

    if (isSavableComponent('LiquidContainer', this.name)) {
      const version = this.components.LiquidContainer?.version ?? FALLBACK_LIQUID_CONTAINER_VERSION;

      this.components.LiquidContainer = new LiquidContainerComponent({
        ...this.components.LiquidContainer,
        version,
        contentLevel: Math.max(0, Math.ceil(servings)),
        hasContent: Math.ceil(servings) > 0
      });
    }

    return this;
  }

  /**
   * Sets a spawn area on the prefab with the given population and any additional configuration.
   *
   * @example
   * import { PopulationDefinitionHash, Prefab } from 'att-string-transcoder';
   *
   * const prefab = new Prefab('Disk_Encounter');
   *
   * prefab.setSpawnArea(PopulationDefinitionHash.WyrmPopulation, {
   *   currentPopulation: 5,
   *   isOneOff: false,
   *   isPopulationStarted: true,
   *   maxPopulation: 20,
   *   numberOfSpawnPoints: 40,
   *   size: 5,
   *   startingPopulation: 5
   * });
   */
  setSpawnArea(
    populationDefinitionHash: PopulationDefinitionHash,
    props?: SetSpawnAreaProps
  ): Prefab<PrefabName<TPrefabName>>;
  setSpawnArea(
    populationDefinitionName: PopulationDefinitionName,
    props?: SetSpawnAreaProps
  ): Prefab<PrefabName<TPrefabName>>;
  setSpawnArea(
    populationDefinitionArg: PopulationDefinitionHash | PopulationDefinitionName,
    props: SetSpawnAreaProps = {}
  ): Prefab<PrefabName<TPrefabName>> {
    if (typeof populationDefinitionArg === 'undefined') {
      throw new Error('You must pass a population definition hash or name to set on this spawn area.');
    }

    if (isSavableComponent('PopulationSpawnArea', this.name) && isSavableComponent('SpawnArea', this.name)) {
      const populationDefinitionHash =
        typeof populationDefinitionArg === 'number'
          ? populationDefinitionArg
          : PopulationDefinitionHash[populationDefinitionArg];

      this.components.PopulationSpawnArea = new PopulationSpawnAreaComponent({
        ...this.components.PopulationSpawnArea,
        version: this.components.PopulationSpawnArea?.version ?? FALLBACK_POPULATION_SPAWN_AREA_VERSION,
        definition: populationDefinitionHash,
        isPopulationStarted: props.isPopulationStarted,
        maxPopulation: props.maxPopulation,
        currentPopulation: props.currentPopulation,
        numberOfSpawnPoints: props.numberOfSpawnPoints,
        startingPopulation: props.startingPopulation,
        isOneOff: props.isOneOff
      });

      this.components.SpawnArea = new SpawnAreaComponent({
        ...this.components.SpawnArea,
        version: this.components.SpawnArea?.version ?? FALLBACK_SPAWN_AREA_VERSION,
        size: props.size
      });
    }

    return this;
  }

  /**
   * Sets a direction (vector) on the prefab, causing the physics engine to apply a force to it when
   * spawning. Units are in metres per second. Only works reliably on the parent prefab. Does not work
   * on kinematic prefabs. Does not work on static prefabs.
   *
   * @example
   * import { Prefab } from 'att-string-transcoder';
   *
   * const prefab = new Prefab('Stone');
   *
   * prefab.setVelocity({ x: 420, y: 69, z: 1337 });
   */
  setVelocity({ x, y, z }: Velocity): Prefab<PrefabName<TPrefabName>> {
    if (isSavableComponent('NetworkRigidbody', this.name)) {
      const version = this.components.NetworkRigidbody?.version ?? FALLBACK_NETWORK_RIGIDBODY_VERSION;
      const velocity: Velocity = { x, y, z };

      this.components.NetworkRigidbody = new NetworkRigidbodyComponent({
        ...this.components.NetworkRigidbody,
        version,
        velocity
      });
    }

    return this;
  }

  /**
   * Returns a `BinaryString` representation of the prefab.
   *
   * @example
   * import { ComponentHash, Prefab } from 'att-string-transcoder';
   *
   * const prefab = new Prefab('Stone');
   *
   * const componentVersions = prefab.getComponentVersions();
   * // or
   * const componentVersions = new Map<number, number>([
   *   [ComponentHash.NetworkRigidbody, 1],
   *   [ComponentHash.PhysicalMaterialPart, 1],
   *   [ComponentHash.Pickup, 2]
   *   // etc...
   * ]);
   *
   * const binaryString = prefab.toBinary(componentVersions);
   */
  toBinary(componentVersions: Map<number, number>): BinaryString {
    const writer = new BinaryWriter();

    /**
     * @property {number} hash
     */
    writer.writeUnsignedInteger(this.hash);

    /**
     * @property {Position} position
     */
    writer.writeFloat(this.position.x);
    writer.writeFloat(this.position.y);
    writer.writeFloat(this.position.z);

    /**
     * @property {Rotation} rotation
     */
    writer.writeFloat(this.rotation.x);
    writer.writeFloat(this.rotation.y);
    writer.writeFloat(this.rotation.z);
    writer.writeFloat(this.rotation.w);

    /**
     * @property {float} scale
     */
    writer.writeFloat(this.scale);

    /**
     * @property {PrefabComponents} components
     */
    writeComponents(writer, this.components, componentVersions);

    /**
     * @property {PrefabEntities} entities
     */
    writeEntities(writer, this.entities, componentVersions);

    /**
     * @property {PrefabChild[]} children
     */
    writeChildren(writer, this.children, componentVersions);

    return writer.flush();
  }

  /**
   * Returns the `SaveString` to spawn this prefab in the game.
   *
   * @example
   * import { Prefab } from 'att-string-transcoder';
   *
   * const prefab = new Prefab('Stone');
   *
   * const saveString = prefab.toSaveString();
   */
  toSaveString(): SaveString {
    const componentVersions = this.getComponentVersions();
    const data = this.toBinary(componentVersions);

    /* Pad bits with trailing zeroes to make it % 32. */
    const roundedUpDataLength = data.length + (32 - (data.length % 32 === 0 ? 32 : data.length % 32));
    const paddedData = data.padEnd(roundedUpDataLength, '0');

    /* Calculate byte size of padded binary. */
    const bytes = paddedData.length / 8;

    /* Convert binary to array of unsigned integers. */
    const unsignedIntegers = new BinaryData(paddedData).toUnsignedIntegerArray();

    /* Construct the binary data string. */
    const binaryDataString = [this.hash, bytes, ...unsignedIntegers].join(',');

    /* Construct the versions string. */
    let componentVersionsString: string | undefined;

    if (componentVersions.size > 0) {
      componentVersionsString = `${componentVersions.size},${[...componentVersions.entries()].map(
        ([componentHash, componentVersion]) => `${componentHash},${componentVersion}`
      )}`;
    }

    /* Return SaveString. */
    const strings = [binaryDataString, componentVersionsString].filter(Boolean);
    return `${strings.join(',|')},` as SaveString;
  }
}
