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

/**
 * Base class for all components. This class should not be used directly. Use any of its derived
 * classes instead.
 *
 * @see [Class: `Component`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/Component.md)
 * @see [API Reference Documentation](https://github.com/mdingena/att-string-transcoder/tree/main/docs/README.md)
 */
export class Component {
  hash: number;
  name: string;
  version: number;

  /**
   * Creates a versioned component. This constructor is used internally. You shouldn't create any
   * instances of this base class.
   *
   * @see [Class: `Component`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/Component.md)
   * @see [API Reference Documentation](https://github.com/mdingena/att-string-transcoder/tree/main/docs/README.md)
   */
  constructor({ hash, name, version }: ComponentProps & BaseComponentProps) {
    this.hash = hash;
    this.name = name;
    this.version = version;
  }

  /**
   * Reads the binary string data and returns an instantiated component.
   *
   * @example
   * import { BinaryReader, DerivedComponent } from 'att-string-transcoder';
   *
   * const reader = new BinaryReader('...');
   * const componentVersion = 1;
   *
   * const component = DerivedComponent.fromBinary(reader, componentVersion);
   */
  static fromBinary(reader: BinaryReader, version: number, hash: number, name: string, dataLength: number): Component;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static fromBinary(_reader: BinaryReader, _version: number): Component {
    throw new Error(
      'Cannot instantiate base Component class from binary string data. You must call the fromBinary() method on the derived Component class.'
    );
  }

  /**
   * Returns a `BinaryString` representation of the component.
   *
   * @example
   * import { DerivedComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new DerivedComponent({ version: componentVersion });
   *
   * const binaryString = component.toBinary(componentVersion);
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  toBinary(_version = this.version): BinaryString {
    throw new Error(
      'Cannot encode base Component class. You must call the toBinary() method on the derived Component class.'
    );
  }

  /**
   * Writes a `BinaryString` representation of the component to the given `BinaryWriter`, including
   * the component hash and data length.
   *
   * @example
   * import { BinaryWriter, DerivedComponent } from 'att-string-transcoder';
   *
   * const writer = new BinaryWriter();
   * const componentVersion = 1;
   *
   * const component = new DerivedComponent({ version: componentVersion });
   *
   * component.write(writer, componentVersion);
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
