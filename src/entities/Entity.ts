import type { BinaryReader } from '../BinaryReader.js';
import type { BinaryString } from '../types/BinaryString.js';
import type { PrefabComponents } from '../types/PrefabComponents.js';
import type { SupportedPrefabComponents } from '../types/SupportedPrefabComponents.js';
import type { UnknownPrefabComponents } from '../types/UnknownPrefabComponents.js';
import type { UnsupportedPrefabComponents } from '../types/UnsupportedPrefabComponents.js';
import { BinaryWriter } from '../BinaryWriter.js';
import { readComponents } from '../utils/readComponents.js';
import { writeComponents } from '../utils/writeComponents.js';

type EntityComponents = SupportedPrefabComponents & UnsupportedPrefabComponents;

type BaseEntityProps = {
  hash: number;
  name: string;
};

export type BaseEntityFromBinaryProps = BaseEntityProps & {
  componentVersions?: Map<number, number> | undefined;
};

export type EntityProps<T extends EntityComponents> = {
  isAlive: boolean;
  components?: T & Partial<UnknownPrefabComponents>;
};

export class Entity<T extends EntityComponents = EntityComponents> {
  readonly hash: number;
  readonly name: string;
  isAlive: boolean;
  components: PrefabComponents;

  /**
   * Creates an embedded entity.
   */
  constructor({ hash, name, isAlive, components }: EntityProps<T> & BaseEntityProps) {
    this.hash = hash;
    this.name = name;
    this.isAlive = isAlive;
    this.components = {
      ...components,
      Unknown: components?.Unknown ?? []
    };
  }

  static fromBinary(reader: BinaryReader, arg?: Map<number, number> | BaseEntityFromBinaryProps): Entity {
    if (!isFromBinaryProps(arg)) {
      throw new Error('Missing arguments to create base Entity. Did you mean to create a derived Entity instead?');
    }

    const isAlive = reader.readBoolean();
    const components = readComponents(reader, arg.componentVersions);

    return new Entity({
      hash: arg.hash,
      name: arg.name,
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

function isFromBinaryProps(
  props: Map<number, number> | BaseEntityFromBinaryProps | undefined
): props is BaseEntityFromBinaryProps {
  return typeof props !== 'undefined' && 'hash' in props;
}
