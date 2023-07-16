import type { BinaryReader } from '../BinaryReader.js';
import type { BinaryString } from '../types/BinaryString.js';

import { Component, type ComponentProps } from './Component.js';

export type UnsupportedComponentProps = {
  hash: number;
  name: string;
  rawData: BinaryString;
};

export class UnsupportedComponent extends Component {
  rawData: BinaryString;

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
