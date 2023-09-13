import type { BinaryReader } from './BinaryReader.js';
import type { Component } from './components/Component.js';
import type { ATTPrefabName } from './types/ATTPrefabName.js';
import type { BinaryString } from './types/BinaryString.js';
import type { EntityKey } from './types/EntityKey.js';
import type { PrefabComponents } from './types/PrefabComponents.js';
import type { SupportedPrefabComponents } from './types/SupportedPrefabComponents.js';
import type { UnknownPrefabComponents } from './types/UnknownPrefabComponents.js';
import type { UnsupportedPrefabComponents } from './types/UnsupportedPrefabComponents.js';

import { BinaryWriter } from './BinaryWriter.js';
import { ATTPrefabs } from './types/ATTPrefabs.js';
import { ComponentHash } from './types/ComponentHash.js';
import { readComponents } from './utils/readComponents.js';
import { writeComponents } from './utils/writeComponents.js';

export type EntityProps = {
  hash?: number | undefined;
  isAlive?: boolean | undefined;
  components?: (SupportedPrefabComponents & UnsupportedPrefabComponents & Partial<UnknownPrefabComponents>) | undefined;
};

type EntityFromBinaryProps = {
  key: string;
  hash: number;
  componentVersions?: Map<number, number> | undefined;
};

/**
 * An "item" inside a prefab composition. The `Entity` can have its own components to alter its
 * behaviour. A child prefab of the composition may attach to an `Entity`, forming an hierarchical
 * structure inside the composition. This is primarily used in _A Township Tale_'s crafting system.
 *
 * @see [Class: `Entity`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/Entity.md)
 *
 * @example
 * import { Entity } from 'att-string-transcoder';
 *
 * const torchFireEntity = new Entity<'Torch'>('Fire_30100');
 * // or
 * const torchFireEntity = Entity.fromBinary<'Torch'>(myBinaryString);
 */
export class Entity<TPrefabName extends ATTPrefabName> {
  /**
   * The hash of the entity.
   *
   * @example
   * import { Entity } from 'att-string-transcoder';
   *
   * const entity = new Entity<'Torch'>('Fire_30100');
   *
   * const hash = entity.hash;
   * // `hash` is `30100`
   */
  hash: number;

  /**
   * The name of the entity.
   *
   * @example
   * import { Entity } from 'att-string-transcoder';
   *
   * const entity = new Entity<'Torch'>('Fire_30100');
   *
   * const name = entity.name;
   * // `name` is `'Fire'`
   */
  name: string;

  /**
   * The alive state of the entity.
   *
   * @example
   * import { Entity } from 'att-string-transcoder';
   *
   * const entity = new Entity<'Torch'>('Fire_30100');
   *
   * const isAlive = entity.isAlive;
   * // `isAlive` is `true`
   */
  isAlive: boolean;

  /**
   * A map of the stored components.
   *
   * Provides access to the components stored in this entity. Components are keyed to their
   * respective names, unless its data contained an unrecognised hash. In that case, the component
   * will be stored in an array under the `Unknown` key.
   *
   * @example
   * import { Entity } from 'att-string-transcoder';
   *
   * const entity = new Entity<'Torch'>('Fire_30100');
   *
   * const components = entity.components;
   * // `components` is `{ Unknown: [] }`
   */
  components: PrefabComponents;

  /**
   * Creates a new `Entity` object configured with the passed in configuration.
   *
   * @see [Class: `Entity`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/Entity.md)
   *
   * @example
   * import { Entity } from 'att-string-transcoder';
   *
   * const torchFireEntity = new Entity<'Torch'>('Fire_30100', {
   *   hash: 30100,
   *   isAlive: true,
   *   components: {}
   * });
   */
  constructor(key: EntityKey<TPrefabName>, { hash, isAlive, components }: EntityProps = {}) {
    const resolvedName = key === 'Unknown' ? String(key) : String(key).split('_').slice(0, -1).join('_');
    const resolvedHash = resolvedName === 'Unknown' ? hash : Number(String(key).split('_').slice(-1));

    if (typeof resolvedHash === 'undefined') {
      throw new Error('You must manually pass an entity hash when instantiating an "Unknown" Entity.');
    }

    this.hash = resolvedHash;
    this.name = resolvedName;
    this.isAlive = isAlive ?? true;
    this.components = {
      ...components,
      Unknown: components?.Unknown ?? []
    };
  }

  /**
   * Adds a `Component` to the entity. Will override any existing component with that name.
   *
   * @example
   * import { Entity, PhysicalMaterialPartComponent, PhysicalMaterialPartHash } from 'att-string-transcoder';
   *
   * const entity = new Entity<'Standard_Side_Pouch_Attachment'>('standard_sidePouch_backPin_L1_7968');
   * const component = new PhysicalMaterialPartComponent({ version: 1, materialHash: PhysicalMaterialPartHash.Iron });
   *
   * entity.addComponent(component);
   */
  addComponent(component: Component): this {
    this.components = {
      ...this.components,
      [component.name]: component
    };

    return this;
  }

  /**
   * Reads the binary string data and returns an instantiated entity.
   *
   * @example
   * import { Entity } from 'att-string-transcoder';
   *
   * const torchFireEntity = Entity.fromBinary<'Torch'>(myBinaryString);
   */
  static fromBinary<TPrefabName extends ATTPrefabName>(
    reader: BinaryReader,
    { key, hash, componentVersions }: EntityFromBinaryProps
  ): Entity<TPrefabName> {
    const isAlive = reader.readBoolean();
    const components = readComponents(reader, componentVersions);

    return new Entity(key as keyof (typeof ATTPrefabs)[ATTPrefabName]['embedded'], {
      hash,
      isAlive,
      components
    });
  }

  /**
   * Removes the specified component from this entity.
   *
   * @example
   * import { ComponentHash, Entity } from 'att-string-transcoder';
   *
   * const entity = new Entity<'Standard_Side_Pouch_Attachment'>('standard_sidePouch_backPin_L1_7968');
   *
   * entity.removeComponent(ComponentHash.NetworkRigidbody);
   * // or
   * entity.removeComponent('NetworkRigidbody');
   */
  removeComponent(componentHash: ComponentHash): this;
  removeComponent(componentName: keyof Omit<PrefabComponents, 'Unknown'>): this;
  removeComponent(componentArg: ComponentHash | keyof Omit<PrefabComponents, 'Unknown'>): this {
    if (typeof componentArg === 'undefined') {
      throw new Error('You must pass a component hash or name to remove from this entity.');
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
   * Returns a `BinaryString` representation of the entity.
   *
   * @example
   * import { ComponentHash, Entity } from 'att-string-transcoder';
   *
   * const torchFireEntity = new Entity<'Torch'>('Fire_30100');
   *
   * const componentVersions = new Map<number, number>([
   *   [ComponentHash.NetworkRigidbody, 1],
   *   [ComponentHash.PhysicalMaterialPart, 1],
   *   [ComponentHash.Pickup, 2]
   *   // etc...
   * ]);
   *
   * const binaryString = torchFireEntity.toBinary(componentVersions);
   */
  toBinary(componentVersions: Map<number, number>): BinaryString {
    const writer = new BinaryWriter();

    /**
     * @property {boolean} isAlive
     */
    writer.writeBoolean(this.isAlive);

    /**
     * @property {PrefabComponents} components
     */
    writeComponents(writer, this.components, componentVersions);

    return writer.flush();
  }

  /**
   * Writes a `BinaryString` representation of the entity to the given `BinaryWriter`, including the
   * entity hash and data length.
   *
   * @example
   * import { BinaryWriter, ComponentHash, Entity } from 'att-string-transcoder';
   *
   * const torchFireEntity = new Entity<'Torch'>('Fire_30100');
   *
   * const componentVersions = new Map<number, number>([
   *   [ComponentHash.NetworkRigidbody, 1],
   *   [ComponentHash.PhysicalMaterialPart, 1],
   *   [ComponentHash.Pickup, 2]
   *   // etc...
   * ]);
   *
   * const writer = new BinaryWriter();
   *
   * torchFireEntity.write(writer, componentVersions);
   */
  write(writer: BinaryWriter, componentVersions: Map<number, number>): void {
    const data = this.toBinary(componentVersions);

    /**
     * @property {number} hash
     */
    writer.writeUnsignedInteger(this.hash);

    /**
     * @property {number} dataLength
     */
    writer.writeUnsignedInteger(data.length);

    /**
     * @property {BinaryString} data
     */
    writer.writeBits(data);
  }
}
