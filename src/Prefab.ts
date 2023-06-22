import type { Component } from './components/Component.js';
import type { UnsupportedComponent } from './components/UnsupportedComponent.js';
import type { AngularVelocity } from './types/AngularVelocity.js';
import type { ATTPrefabHash } from './types/ATTPrefabHash.js';
import type { ATTPrefabName } from './types/ATTPrefabName.js';
import type { BinaryString } from './types/BinaryString.js';
import type { PhysicalMaterialPartHash } from './types/PhysicalMaterialPartHash.js';
import type { Position } from './types/Position.js';
import type { PrefabEntities } from './types/PrefabEntities.js';
import type { PrefabChild } from './types/PrefabChild.js';
import type { PrefabComponents } from './types/PrefabComponents.js';
import type { Rotation } from './types/Rotation.js';
import type { SaveString } from './types/SaveString.js';
import type { Velocity } from './types/Velocity.js';
import { BinaryData, BinaryDataOptions } from './BinaryData.js';
import { BinaryReader } from './BinaryReader.js';
import { BinaryWriter } from './BinaryWriter.js';
import * as constants from './constants.js';
import { DurabilityModuleComponent } from './components/DurabilityModuleComponent.js';
import { HeatSourceBaseComponent } from './components/HeatSourceBaseComponent.js';
import { NetworkRigidbodyComponent } from './components/NetworkRigidbodyComponent.js';
import { LiquidContainerComponent } from './components/LiquidContainerComponent.js';
import { PhysicalMaterialPartComponent } from './components/PhysicalMaterialPartComponent.js';
import { SentGiftComponent } from './components/SentGiftComponent.js';
import { Entity } from './entities/Entity.js';
import { FireEntity } from './entities/FireEntity.js';
import { isATTEntityName } from './utils/isATTEntityName.js';
import { isATTPrefabHash } from './utils/isATTPrefabHash.js';
import { isEmbeddableEntity } from './utils/isEmbeddableEntity.js';
import { isSavableComponent } from './utils/isSavableComponent.js';
import { writeChildren } from './utils/writeChildren.js';
import { writeComponents } from './utils/writeComponents.js';
import { writeEntities } from './utils/writeEntities.js';
import { ATTPrefabs } from './types/ATTPrefabs.js';
import { ComponentHash } from './types/ComponentHash.js';
import { readComponents } from './utils/readComponents.js';
import { readEntities } from './utils/readEntities.js';
import { readChildren } from './utils/readChildren.js';
import { EntityHash } from './types/EntityHash.js';

type TPrefabs = typeof ATTPrefabs;

type TPrefab<N extends keyof TPrefabs> = { [K in keyof TPrefabs]: TPrefabs[K] }[N];

export type PrefabProps = {
  position?: Position;
  rotation?: Rotation;
  scale?: number;
  components?: PrefabComponents;
  entities?: PrefabEntities;
  children?: PrefabChild[];
};

const DEFAULTS: Required<PrefabProps> = {
  position: { x: 0, y: 0, z: 0 },
  rotation: { x: 0, y: 0, z: 0, w: 1 },
  scale: 1,
  components: { Unknown: [] as UnsupportedComponent[] } as PrefabComponents,
  entities: { Unknown: [] as Entity[] } as PrefabEntities,
  children: []
};

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

export class Prefab<TName extends keyof TPrefabs = keyof TPrefabs, T extends TPrefab<TName> = TPrefab<TName>> {
  readonly name: TName;
  readonly hash: ATTPrefabHash;
  position: Position;
  rotation: Rotation;
  scale: number;
  components: PrefabComponents;
  entities: PrefabEntities;
  children: PrefabChild[];

  /**
   * Creates a new `Prefab` from a list of known _A Township Tale_ prefab names. You may
   * optionally provide additional properties in the second argument.
   *
   * @example
   * const simple = new Prefab('Handle_Short');
   *
   * const advanced = new Prefab('Handle_Short', {
   *   position: { x: 133.7, y: 420, z: 69 },
   *   rotation: { x: 0.3, y: 0.4, z: 0.1, w: 0.8 },
   *   scale: 1,
   *   components: {
   *     NetworkRigidbody: new NetworkRigidbodyComponent({
   *       version: 1,
   *       position: { x: 133.7, y: 420, z: 69 },
   *       rotation: { x: 0.3, y: 0.4, z: 0.1, w: 0.8 },
   *       isKinematic: false,
   *       isServerSleeping: false,
   *       velocity: { x: 0, y: 1, z: 0 },
   *       angularVelocity: { x: 0, y: 1, z: 0 },
   *     })
   *   },
   *   entities: {
   *     Fuse: new FuseEntity({
   *       isAlive: true,
   *       isFinished: false,
   *       isLit: true,
   *       currentFuseAmount: 0.8
   *     })
   *   },
   *   children: [
   *     {
   *       parentHash: 1337,
   *       prefab: new Prefab('Guard')
   *     }
   *   ]
   * })
   */
  constructor(
    prefabName: TName,
    { position, rotation, scale, components, entities, children }: PrefabProps = DEFAULTS
  ) {
    this.hash = ATTPrefabs[prefabName].hash;
    this.name = prefabName;
    this.position = position ?? DEFAULTS.position;
    this.rotation = rotation ?? DEFAULTS.rotation;
    this.scale = scale ?? DEFAULTS.scale;
    this.components = components ?? DEFAULTS.components;
    this.entities = entities ?? DEFAULTS.entities;
    this.children = children ?? DEFAULTS.children;
  }

  /**
   * Attaches a `Prefab` to this prefab as a child. It can optionally be attached onto one of this
   * prefab's embedded entities, which is required for most child prefabs under normal circumstances.
   * If you do not specify a `parentName`, you may pass `null` to create a "floating" child. It will
   * be part of this prefab's hierarchy but will most likely behave unexpectedly in the game.
   */
  addChildPrefab<TEntityName extends keyof T['embedded']>(parentName: TEntityName | null, childPrefab: Prefab): Prefab {
    if (typeof parentName === 'undefined' || typeof childPrefab === 'undefined') {
      throw new Error(`Invalid arguments.`);
    }

    const entityHash = parentName === null ? 0 : isATTEntityName(parentName) ? EntityHash[parentName] : 0;

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
  addComponent(component: Component): Prefab {
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
  addGift(giftPrefab: Prefab): Prefab {
    if (typeof giftPrefab === 'undefined') {
      throw new Error(`Invalid arguments.`);
    }

    if (isSavableComponent('SentGift', this.name)) {
      const version = this.components.NetworkRigidbody?.version ?? FALLBACK_NETWORK_RIGIDBODY_VERSION;
      const componentVersions = this.getComponentVersions();
      const data = this.toBinary(componentVersions);

      /* Pad bits with trailing zeroes to make it % 32. */
      const roundedUpDataLength = data.length + (32 - (data.length % 32 === 0 ? 32 : data.length % 32));
      const paddedData = data.padEnd(roundedUpDataLength, '0');

      /* Calculate byte size of padded binary. */
      const bytes = paddedData.length / 8;

      /* Convert binary to array of unsigned integers. */
      const unsignedIntegers = new BinaryData(paddedData).toUnsignedIntegerArray();

      /* Flatten component version pairs. */
      const chunkVersioning = [...componentVersions].flat();

      this.components.SentGift = new SentGiftComponent({
        ...this.components.SentGift,
        version,
        gifts: [
          ...(this.components.SentGift?.gifts ?? []),
          {
            data: unsignedIntegers,
            messageSizeInBytes: bytes,
            hash: giftPrefab.hash,
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
  static fromBinary(reader: BinaryReader, componentVersions?: Map<number, number>): Prefab {
    const versions = componentVersions ?? constants.latestSupportedComponentVersions;

    /**
     * @property {number} hash
     */
    const hash = reader.readUnsignedInteger();

    if (!isATTPrefabHash(hash)) throw new Error();

    const name = constants.attPrefabNames[hash];

    // const prefab = ATTPrefabs[name];

    return new Prefab(name, {
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
      entities: readEntities(reader, versions),

      /**
       * @property {PrefabChild[]} children
       */
      children: readChildren(reader, versions)
    });
  }

  /**
   * Creates a `Prefab` from reading a `SaveString`.
   */
  static fromSaveString(saveString: string, options?: BinaryDataOptions): Prefab {
    if (!BinaryData.isSaveString(saveString)) {
      throw new Error('SaveString is malformed.');
    }

    const [dataString, componentVersionsString] = saveString.split('|');

    if (typeof dataString === 'undefined') throw new Error('SaveString is malformed.');

    const [hashString, dataLengthString, ...unsignedIntegerStrings] = dataString.split(',').filter(Boolean);

    if (
      typeof hashString === 'undefined' ||
      typeof dataLengthString === 'undefined' ||
      typeof unsignedIntegerStrings === 'undefined'
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

    return Prefab.fromBinary(reader, componentVersions);
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

      if (typeof storedVersion !== 'undefined' && storedVersion === version) {
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
      if (Array.isArray(entity)) {
        for (const unknownEntity of entity) {
          for (const component of Object.values(unknownEntity.components)) {
            if (Array.isArray(component)) {
              for (const unknownComponent of component) {
                setComponentVersion(unknownComponent.hash, unknownComponent.version);
              }
            } else {
              setComponentVersion(component.hash, component.version);
            }
          }
        }
      } else {
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
    return this.entities.Fire?.components.HeatSourceBase?.isLit ?? false;
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
   * Prints this prefab's `SaveString` to your console.
   */
  print(): void {
    const saveString = this.toSaveString();
    console.log(saveString);
  }

  /**
   * Removes all child `Prefab` from this prefab.
   */
  removeAllChildPrefabs(): Prefab {
    this.children = [];

    return this;
  }

  /**
   * Removes the specified child `Prefab` from this prefab.
   */
  removeChildPrefab(prefabHash: ATTPrefabHash): Prefab;
  removeChildPrefab(prefabName: ATTPrefabName): Prefab;
  removeChildPrefab(prefabArg: ATTPrefabHash | ATTPrefabName): Prefab {
    if (typeof prefabArg === 'undefined') {
      throw new Error(`Invalid argument.`);
    }

    const key = typeof prefabArg === 'number' ? 'hash' : 'name';

    this.children = [...this.children.filter(child => child.prefab[key] !== prefabArg)];

    return this;
  }

  /**
   * Sets a spin (vector) on the prefab, causing the physics engine to
   * apply a force to it when spawning. Units are in metres per second.
   * Only works reliably on the parent prefab. Does not work on kinematic
   * prefabs.
   */
  setAngularVelocity(x: number, y: number, z: number): Prefab {
    if (typeof x === 'undefined' || typeof y === 'undefined' || typeof z === 'undefined') {
      throw new Error(`Invalid arguments.`);
    }

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
  setGiftBoxLabel(label: string): Prefab {
    if (typeof label === 'undefined') {
      throw new Error(`Invalid arguments.`);
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
  setIntegrity(integrity: number): Prefab {
    if (typeof integrity === 'undefined') {
      throw new Error(`Invalid arguments.`);
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
  setKinematic(isKinematic?: boolean): Prefab {
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
  setMaterial(materialHash: PhysicalMaterialPartHash): Prefab {
    if (typeof materialHash === 'undefined') {
      throw new Error(`Invalid arguments.`);
    }

    if (isSavableComponent('PhysicalMaterialPart', this.name)) {
      const version = this.components.PhysicalMaterialPart?.version ?? FALLBACK_PHYSICAL_MATERIAL_PART_VERSION;

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
  setOnFire(isLit?: boolean): Prefab {
    if (isEmbeddableEntity('Fire', this.name)) {
      const version = this.entities.Fire?.components.HeatSourceBase?.version ?? FALLBACK_HEAT_SOURCE_BASE_VERSION;

      this.entities.Fire = new FireEntity({
        ...this.entities.Fire,
        isAlive: true,
        components: {
          ...this.entities.Fire?.components,
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
  setPosition(x: number, y: number, z: number): Prefab {
    if (typeof x === 'undefined' || typeof y === 'undefined' || typeof z === 'undefined') {
      throw new Error(`Invalid arguments.`);
    }

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
   * Sets the scale of the prefab.
   */
  setScale(scale: number): Prefab {
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
  setServerSleeping(isServerSleeping?: boolean): Prefab {
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
  setServings(servings: number): Prefab {
    if (typeof servings === 'undefined') {
      throw new Error(`Invalid arguments.`);
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
   * Sets the rotation of the prefab. If the prefab is a child of another
   * prefab, then this rotation is local to that parent. Otherwise, this
   * rotation is in world space.
   */
  setRotation(x: number, y: number, z: number, w: number): Prefab {
    if (typeof x === 'undefined' || typeof y === 'undefined' || typeof z === 'undefined' || typeof w === 'undefined') {
      throw new Error(`Invalid arguments.`);
    }

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
   * Sets a direction (vector) on the prefab, causing the physics engine to
   * apply a force to it when spawning. Units are in metres per second.
   * Only works reliably on the parent prefab. Does not work on kinematic
   * prefabs.
   */
  setVelocity(x: number, y: number, z: number): Prefab {
    if (typeof x === 'undefined' || typeof y === 'undefined' || typeof z === 'undefined') {
      throw new Error(`Invalid arguments.`);
    }

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
    const componentVersionsString = `${componentVersions.size},${Object.entries(componentVersions).map(
      ([componentHash, componentVersion]) => `${componentHash},${componentVersion}`
    )}`;

    /* Return spawn string. */
    const strings = [binaryDataString, componentVersionsString].filter(Boolean);
    return `${strings.join(',|')},` as SaveString;
  }
}
