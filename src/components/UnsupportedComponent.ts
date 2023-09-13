import type { BinaryReader } from '../BinaryReader.js';
import type { BinaryString } from '../types/BinaryString.js';

import { Component, type ComponentProps } from './Component.js';

export type UnsupportedComponentProps = {
  hash: number;
  name: string;
  rawData: BinaryString;
};

/**
 * A component whose data shape has not been configured in _ATT String Transcoder_. Its internal
 * data shape is a raw binary data string so it may be re-encoded later.
 *
 * @see [Class: `UnsupportedComponent`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/UnsupportedComponent.md)
 * @since v3.0.0
 *
 * @example
 * import { UnsupportedComponent, type BinaryString } from 'att-string-transcoder';
 *
 * const hash = 1337;
 * const name = 'SomeUnrecognisedComponentName';
 * const rawData = '11110111001100010000' as BinaryString;
 * const version = 1;
 *
 * const component = new UnsupportedComponent({ hash, name, rawData, version });
 */
export class UnsupportedComponent extends Component {
  /**
   * The component's serialised data.
   *
   * @example
   * import { UnsupportedComponent } from 'att-string-transcoder';
   *
   * const hash = 1337;
   * const name = 'SomeUnrecognisedComponentName';
   * const rawData = '11110111001100010000';
   * const version = 1;
   *
   * const component = new UnsupportedComponent({ hash, name, rawData, version });
   *
   * const rawData = component.rawData;
   * // `rawData` is `'11110111001100010000'`
   */
  rawData: BinaryString;

  /**
   * Creates a versioned component without deserialising its data.
   *
   * @see [Class: `UnsupportedComponent`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/UnsupportedComponent.md)
   * @since v3.0.0
   *
   * @example
   * import { UnsupportedComponent, type BinaryString } from 'att-string-transcoder';
   *
   * const hash = 1337;
   * const name = 'SomeUnrecognisedComponentName';
   * const rawData = '11110111001100010000' as BinaryString;
   * const version = 1;
   *
   * const component = new UnsupportedComponent({ hash, name, rawData, version });
   */
  constructor({ hash, name, rawData, version }: ComponentProps & UnsupportedComponentProps) {
    super({ hash, name, version });

    this.rawData = rawData;
  }

  static override fromBinary(
    reader: BinaryReader,
    version: number,
    hash: number,
    name: string,
    dataLength: number
  ): UnsupportedComponent {
    return new UnsupportedComponent({
      hash,
      name,
      version,
      rawData: reader.readBits(dataLength)
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  override toBinary(_ = this.version): BinaryString {
    /**
     * @property {BinaryString} rawData
     */
    return this.rawData;
  }
}
