import type { BinaryReader } from './BinaryReader.js';
import type { ATTPrefabName } from './types/ATTPrefabName.js';
import type { BinaryString } from './types/BinaryString.js';
import type { PrefabComponents } from './types/PrefabComponents.js';
import type { SupportedPrefabComponents } from './types/SupportedPrefabComponents.js';
import type { UnknownPrefabComponents } from './types/UnknownPrefabComponents.js';
import type { UnsupportedPrefabComponents } from './types/UnsupportedPrefabComponents.js';

import { BinaryWriter } from './BinaryWriter.js';
import { ATTPrefabs } from './types/ATTPrefabs.js';
import { readComponents } from './utils/readComponents.js';
import { writeComponents } from './utils/writeComponents.js';

type EntityKey<TPrefabName extends ATTPrefabName> = 'Unknown' | keyof (typeof ATTPrefabs)[TPrefabName]['embedded'];

type EntityBaseProps = {
  hash?: number;
};

type EntityConstructorProps = EntityBaseProps & {
  isAlive?: boolean;
  components?: SupportedPrefabComponents & UnsupportedPrefabComponents & Partial<UnknownPrefabComponents>;
};

type EntityFromBinaryProps = {
  key: string;
  hash: number;
  componentVersions?: Map<number, number> | undefined;
};

export class Entity<TPrefabName extends ATTPrefabName> {
  hash: number;
  name: string;
  isAlive: boolean;
  components: PrefabComponents;

  constructor(key: EntityKey<TPrefabName>, { hash, isAlive, components }: EntityConstructorProps = {}) {
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
   * Reads the binary string data and returns an instantiated entity.
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
   * Returns a `BinaryString` representation of the entity.
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
   * Writes a `BinaryString` representation of the entity to the given `BinaryWriter`,
   * including the entity hash and data length.
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
