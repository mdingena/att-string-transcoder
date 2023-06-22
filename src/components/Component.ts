import type { BinaryReader } from '../BinaryReader.js';
import type { BinaryString } from '../types/BinaryString.js';
import { BinaryWriter } from '../BinaryWriter.js';

type BaseComponentProps = {
  hash: number;
  name: string;
};

export type ComponentProps = {
  version: number;
};

export class Component {
  hash: number;
  name: string;
  version: number;

  /**
   * Creates a versioned component.
   */
  constructor({ hash, name, version }: ComponentProps & BaseComponentProps) {
    this.hash = hash;
    this.name = name;
    this.version = version;
  }

  /**
   * Reads the binary string data and returns an instantiated component.
   */
  static fromBinary(reader: BinaryReader, version: number, hash: number, name: string, dataLength: number): Component;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static fromBinary(_: BinaryReader, __: number): Component {
    throw new Error(
      'Cannot instantiate base Component class from binary string data. You must override the fromBinary() method in the extended Component class.'
    );
  }

  /**
   * Returns a `BinaryString` representation of the component.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  toBinary(_ = this.version): BinaryString {
    throw new Error(
      'Cannot encode base Component class. You must override the encode() method in the extended Component class.'
    );
  }

  /**
   * Writes a `BinaryString` representation of the component to the given `BinaryWriter`,
   * including the component hash and data length.
   */
  write(writer: BinaryWriter, version = this.version): void {
    const data = this.toBinary(version);

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
