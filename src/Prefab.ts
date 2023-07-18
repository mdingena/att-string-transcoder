import type { Component } from './components/Component.js';
import type { ATTPrefabHash } from './types/ATTPrefabHash.js';
import type { ATTPrefabName } from './types/ATTPrefabName.js';
import type { AngularVelocity } from './types/AngularVelocity.js';
import type { BinaryString } from './types/BinaryString.js';
import type { Position } from './types/Position.js';
import type { PrefabChild } from './types/PrefabChild.js';
import type { PrefabComponents } from './types/PrefabComponents.js';
import type { PrefabEntities } from './types/PrefabEntities.js';
import type { Rotation } from './types/Rotation.js';
import type { SaveString } from './types/SaveString.js';
import type { Velocity } from './types/Velocity.js';

import { BinaryData, type BinaryDataOptions } from './BinaryData.js';
import { BinaryReader } from './BinaryReader.js';
import { BinaryWriter } from './BinaryWriter.js';
import { Entity, type EntityKey } from './Entity.js';
import { DurabilityModuleComponent } from './components/DurabilityModuleComponent.js';
import { HeatSourceBaseComponent } from './components/HeatSourceBaseComponent.js';
import { LiquidContainerComponent } from './components/LiquidContainerComponent.js';
import { NetworkRigidbodyComponent } from './components/NetworkRigidbodyComponent.js';
import { PhysicalMaterialPartComponent } from './components/PhysicalMaterialPartComponent.js';
import { SentGiftComponent } from './components/SentGiftComponent.js';
import * as constants from './constants.js';
import { ATTPrefabs } from './types/ATTPrefabs.js';
import { ComponentHash } from './types/ComponentHash.js';
import { PhysicalMaterialPartHash } from './types/PhysicalMaterialPartHash.js';
import { isSavableComponent } from './utils/isSavableComponent.js';
import { readChildren } from './utils/readChildren.js';
import { readComponents } from './utils/readComponents.js';
import { readEntities } from './utils/readEntities.js';
import { writeChildren } from './utils/writeChildren.js';
import { writeComponents } from './utils/writeComponents.js';
import { writeEntities } from './utils/writeEntities.js';

export type PrefabProps<TPrefabName extends ATTPrefabName> = {
  position?: Position;
  rotation?: Rotation;
  scale?: number;
  components?: Partial<PrefabComponents>;
  entities?: Partial<PrefabEntities<TPrefabName>>;
  children?: PrefabChild[];
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

const FALLBACK_NETWORK_RIGIDBODY_VERSION =
  constants.latestSupportedComponentVersions.get(ComponentHash.NetworkRigidbody) ??
  constants.latestNetworkRigidbodyComponentVersion;

const FALLBACK_SENT_GIFT_VERSION =
  constants.latestSupportedComponentVersions.get(ComponentHash.SentGift) ?? constants.latestSentGiftComponentVersion;
/* c8 ignore stop */

/**
 * A JavaScript object representation of an _A Township Tale_ in-game prefab.
 *
 * @example
 * const prefab = new Prefab('Handle_Short');
 * // or
 * const prefab = Prefab.fromSaveString<'Handle_Short'>(mySaveString);
 * // or
 * const prefab = Prefab.fromBinary<'Handle_Short'>(myBinaryString);
 */
export class Prefab<TPrefabName extends ATTPrefabName = ATTPrefabName> {
  readonly name: TPrefabName;
  readonly hash: number;
  position: Position;
  rotation: Rotation;
  scale: number;
  components: PrefabComponents;
  entities: PrefabEntities<TPrefabName>;
  children: PrefabChild[];

  /**
   * Creates a new `Prefab` from a list of known _A Township Tale_ prefab names. You may
   * optionally provide additional properties in the second argument.
   *
   * @example
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
   *                 progress: 0.8,
   *                 time: Infinity
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
    { position, rotation, scale, components, entities, children }: PrefabProps<TPrefabName> = {}
  ) {
    this.hash = ATTPrefabs[prefabName].hash;
    this.name = prefabName;
    this.position = position ?? { x: 0, y: 0, z: 0 };
    this.rotation = rotation ?? { x: 0, y: 0, z: 0, w: 1 };
    this.scale = scale ?? 1;
    this.components = { ...components, Unknown: components?.Unknown ?? [] } as PrefabComponents;
    this.entities = { ...entities } as PrefabEntities<TPrefabName>;
    this.children = children ?? [];
  }

  /**
   * Attaches a `Prefab` to this prefab as a child. It can optionally be attached onto one of this
   * prefab's embedded entities, which is required for most child prefabs under normal circumstances.
   * If you do not specify a `parentName`, you may pass `null` to create a "floating" child. It will
   * be part of this prefab's hierarchy but will most likely behave unexpectedly in the game.
   */
  addChildPrefab(
    parentName: keyof (typeof ATTPrefabs)[TPrefabName]['embedded'] | null,
    childPrefab: Prefab
  ): Prefab<TPrefabName> {
    if (typeof parentName === 'undefined' || typeof childPrefab === 'undefined') {
      throw new Error(
        'You must pass a parent prefab entity hash (or null) and a child prefab to add as a child to this prefab.'
      );
    }

    let entityHash: number;

    if (parentName === null) {
      entityHash = 0;
    } else {
      const entities = ATTPrefabs[this.name].embedded as Readonly<
        Record<string, { hash: number; name: string; savables: Record<string, { hash: number; name: string }> }>
      >;

      const entity = entities[parentName as string];

      if (typeof entity === 'undefined') {
        throw new Error(`"${String(parentName)}" is not a valid entity on "${this.name}".`);
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
   */
  addComponent(component: Component): Prefab<TPrefabName> {
    this.components = {
      ...this.components,
      [component.name]: component
    };

    return this;
  }

  /**
   * Adds a `Prefab` gift to this prefab's `SentGift` component. You may call this method more than
   * once to add additional gifts.
   */
  addGift(giftPrefab: Prefab): Prefab<TPrefabName> {
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
   * Creates a `Prefab` from reading the prefab's binary data stored in a `SaveString`.
   */
  static fromBinary<TPrefabName extends ATTPrefabName = ATTPrefabName>(
    reader: BinaryReader,
    componentVersions?: Map<number, number>
  ): Prefab<TPrefabName> {
    const versions = componentVersions ?? constants.latestSupportedComponentVersions;

    /**
     * @property {number} hash
     */
    const hash = reader.readUnsignedInteger();

    const name = constants.attPrefabNames[hash as ATTPrefabHash];

    if (typeof name === 'undefined') throw new Error(`Cannot find ATT Prefab with hash ${hash}.`);

    // const prefab = ATTPrefabs[name];

    return new Prefab<TPrefabName>(name as TPrefabName, {
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
   */
  static fromSaveString<TPrefabName extends ATTPrefabName = ATTPrefabName>(
    saveString: string,
    options?: BinaryDataOptions
  ): Prefab<TPrefabName> {
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
   */
  getAngularVelocity(): Velocity {
    return this.components.NetworkRigidbody?.angularVelocity ?? { x: 0, y: 0, z: 0 };
  }

  /**
   * Gets a map of component hashes and the versions used on this prefab.
   * Will throw an error if the prefab uses mixed versions of a particular
   * component.
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

    return versions;
  }

  /**
   * Gets the gift sender's name, which is labeled on the gift.
   */
  getGiftBoxLabel(): string {
    return this.components.SentGift?.senderName ?? '';
  }

  /**
   * Gets the prefab's physical material.
   */
  getIntegrity(): number {
    return this.components.DurabilityModule?.integrity ?? 1;
  }

  /**
   * Gets the {@link https://docs.unity3d.com/ScriptReference/Rigidbody-isKinematic.html kinematic}
   * state of the prefab.
   */
  getKinematic(): boolean {
    return this.components.NetworkRigidbody?.isKinematic ?? false;
  }

  /**
   * Gets the prefab's physical material.
   */
  getMaterial(): PhysicalMaterialPartHash {
    return this.components.PhysicalMaterialPart?.materialHash ?? 0;
  }

  /**
   * Gets the burning state of the prefab.
   */
  getOnFire(): boolean {
    const fireEntity = Object.values(this.entities).find(entity => entity.name === 'Fire');

    return fireEntity?.components.HeatSourceBase?.isLit ?? false;
  }

  /**
   * Gets the position of the prefab. If the prefab is a child of another
   * prefab, then this position is local to that parent. Otherwise, this
   * position is in world space.
   */
  getPosition(): Position {
    return this.position;
  }

  /**
   * Gets the scale of the prefab.
   */
  getScale(): number {
    return this.scale;
  }

  /**
   * Gets the {@link https://docs.unity3d.com/Manual/RigidbodiesOverview.html sleeping}
   * state of the prefab.
   */
  getServerSleeping(): boolean {
    return this.components.NetworkRigidbody?.isServerSleeping ?? false;
  }

  /**
   * Gets the number of servings on a liquid container prefab.
   */
  getServings(): number {
    return this.components.LiquidContainer?.contentLevel ?? 0;
  }

  /**
   * Gets the rotation of the prefab. If the prefab is a child of another
   * prefab, then this rotation is local to that parent. Otherwise, this
   * rotation is in world space.
   */
  getRotation(): Rotation {
    return this.rotation;
  }

  /**
   * Gets the direction (vector) on the prefab.
   */
  getVelocity(): Velocity {
    return this.components.NetworkRigidbody?.velocity ?? { x: 0, y: 0, z: 0 };
  }

  /**
   * Prints this prefab's data structure to your console.
   */
  inspect(): void {
    console.log(JSON.stringify(this, null, 2));
  }

  /**
   * Prints this prefab's `SaveString` to your console.
   */
  print(): void {
    const saveString = this.toSaveString();
    console.log(saveString);
  }

  /**
   * Removes all child `Prefab` from this prefab.
   */
  removeAllChildPrefabs(): Prefab<TPrefabName> {
    this.children = [];

    return this;
  }

  /**
   * Removes all components on this prefab.
   */
  removeAllComponents(): Prefab<TPrefabName> {
    this.components = { Unknown: [] };

    return this;
  }

  /**
   * Removes all entities on this prefab.
   */
  removeAllEntities(): Prefab<TPrefabName> {
    this.entities = {};

    return this;
  }

  /**
   * Removes all gift `Prefab` from this prefab.
   */
  removeAllGifts(): Prefab<TPrefabName> {
    const sentGiftComponent = this.components.SentGift;

    if (typeof sentGiftComponent !== 'undefined') {
      sentGiftComponent.gifts = [];
    }

    return this;
  }

  /**
   * Removes the specified child `Prefab` from this prefab.
   */
  removeChildPrefab(prefabHash: ATTPrefabHash): Prefab;
  removeChildPrefab(prefabName: ATTPrefabName): Prefab;
  removeChildPrefab(prefabArg: ATTPrefabHash | ATTPrefabName): Prefab<TPrefabName> {
    if (typeof prefabArg === 'undefined') {
      throw new Error('You must pass a child prefab hash or name to remove from this prefab.');
    }

    const key = typeof prefabArg === 'number' ? 'hash' : 'name';

    this.children = [...this.children.filter(child => child.prefab[key] !== prefabArg)];

    return this;
  }

  /**
   * Removes the specified component from this prefab.
   */
  removeComponent(componentName: keyof Omit<PrefabComponents, 'Unknown'>): Prefab<TPrefabName> {
    if (typeof componentName === 'undefined') {
      throw new Error('You must pass a component name to remove from this prefab.');
    }

    delete this.components[componentName];

    return this;
  }

  /**
   * Removes the specified component from this prefab.
   */
  removeEntity(entityKey: Exclude<EntityKey<TPrefabName>, 'Unknown'>): Prefab<TPrefabName> {
    if (typeof entityKey === 'undefined') {
      throw new Error('You must pass an entity name to remove from this prefab.');
    }

    delete this.entities[entityKey as string];

    return this;
  }

  /**
   * Removes the specified gift `Prefab` from this prefab.
   */
  removeGift(prefabHash: number): Prefab<TPrefabName> {
    if (typeof prefabHash === 'undefined') {
      throw new Error('You must pass a gift prefab hash to remove from this prefab.');
    }

    const sentGiftComponent = this.components.SentGift;

    if (typeof sentGiftComponent !== 'undefined') {
      sentGiftComponent.gifts = [...sentGiftComponent.gifts.filter(gift => gift?.hash !== prefabHash)];
    }

    return this;
  }

  /**
   * Sets a spin (vector) on the prefab, causing the physics engine to
   * apply a force to it when spawning. Units are in metres per second.
   * Only works reliably on the parent prefab. Does not work on kinematic
   * prefabs.
   */
  setAngularVelocity({ x, y, z }: AngularVelocity): Prefab<TPrefabName> {
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
   */
  setGiftBoxLabel(label: string): Prefab<TPrefabName> {
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
   * Sets the prefab's integrity. This can change both its appearance and
   * other qualities such as durability and the amount of materials
   * recovered from recycling.
   */
  setIntegrity(integrity: number): Prefab<TPrefabName> {
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
   * By default, a `new Prefab()` is not kinematic, but some prefabs
   * require to be kinematic to work properly. You can optionally pass a
   * boolean, for example `prefab.setKinematic(false)`.
   */
  setKinematic(isKinematic?: boolean): Prefab<TPrefabName> {
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
   * Sets the prefab's physical material. This can change both its
   * appearance and other qualities such as durability, damage, heat
   * retention and weight.
   */
  setMaterial(materialHash: PhysicalMaterialPartHash): Prefab<TPrefabName>;
  setMaterial(materialName: keyof typeof PhysicalMaterialPartHash): Prefab<TPrefabName>;
  setMaterial(materialArg: PhysicalMaterialPartHash | keyof typeof PhysicalMaterialPartHash): Prefab<TPrefabName> {
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
   */
  setOnFire(isLit?: boolean): Prefab<TPrefabName> {
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
   * Sets the position of the prefab. If the prefab is a child of another
   * prefab, then this position is local to that parent. Otherwise, this
   * position is in world space.
   */
  setPosition({ x, y, z }: Position): Prefab<TPrefabName> {
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
   * Sets the rotation of the prefab. If the prefab is a child of another
   * prefab, then this rotation is local to that parent. Otherwise, this
   * rotation is in world space.
   */
  setRotation({ x, y, z, w }: Rotation): Prefab<TPrefabName> {
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
   */
  setScale(scale: number): Prefab<TPrefabName> {
    if (typeof scale === 'undefined') {
      throw new Error('You must pass a number to set as the scale.');
    }

    this.scale = scale;

    return this;
  }

  /**
   * Makes the prefab {@link https://docs.unity3d.com/Manual/RigidbodiesOverview.html sleep}.
   * By default, a `new Prefab()` is not sleeping. A sleeping prefab does
   * not have its physics simulated until it receives a collision or force,
   * such as touching it. You can optionally pass a boolean, for example
   * `prefab.setServerSleeping(false)`.
   */
  setServerSleeping(isServerSleeping?: boolean): Prefab<TPrefabName> {
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
   */
  setServings(servings: number): Prefab<TPrefabName> {
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
   * Sets a direction (vector) on the prefab, causing the physics engine to
   * apply a force to it when spawning. Units are in metres per second.
   * Only works reliably on the parent prefab. Does not work on kinematic
   * prefabs.
   */
  setVelocity({ x, y, z }: Velocity): Prefab<TPrefabName> {
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
