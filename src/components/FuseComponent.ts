import type { BinaryReader } from '../BinaryReader.js';
import type { BinaryString } from '../types/BinaryString.js';

import { BinaryWriter } from '../BinaryWriter.js';
import { ComponentHash } from '../types/ComponentHash.js';

import { Component, type ComponentProps } from './Component.js';

type FuseComponentPropsV1 = {
  isFinished?: boolean;
  isLit?: boolean;
  currentFuseAmount?: number;
};

export type FuseComponentProps = FuseComponentPropsV1;

/**
 * @since 3.0.0
 * @version 1
 */
export class FuseComponent extends Component {
  isFinished: boolean;
  isLit: boolean;
  currentFuseAmount: number;

  constructor({ version, isFinished, isLit, currentFuseAmount }: ComponentProps & FuseComponentProps) {
    const hash = ComponentHash.Fuse;
    const name = 'Fuse';

    super({ hash, name, version });

    this.isFinished = isFinished ?? false;
    this.isLit = isLit ?? false;
    this.currentFuseAmount = currentFuseAmount ?? 1;
  }

  static override fromBinary(reader: BinaryReader, version: number): FuseComponent {
    const props: ComponentProps & FuseComponentProps = { version };

    /**
     * @property {boolean} isFinished
     * @since v1
     */
    if (props.version >= 1) {
      props.isFinished = reader.readBoolean();
    }

    /**
     * @property {boolean} isLit
     * @since v1
     */
    if (props.version >= 1) {
      props.isLit = reader.readBoolean();
    }

    /**
     * @property {float} currentFuseAmount
     * @since v1
     */
    if (props.version >= 1) {
      props.currentFuseAmount = reader.readFloat();
    }

    return new FuseComponent(props);
  }

  override toBinary(version = this.version): BinaryString {
    const writer = new BinaryWriter();

    /**
     * @property {boolean} isFinished
     * @since v1
     */
    if (version >= 1) {
      writer.writeBoolean(this.isFinished);
    }

    /**
     * @property {boolean} isLit
     * @since v1
     */
    if (version >= 1) {
      writer.writeBoolean(this.isLit);
    }

    /**
     * @property {float} currentFuseAmount
     * @since v1
     */
    if (version >= 1) {
      writer.writeFloat(this.currentFuseAmount);
    }

    return writer.flush();
  }
}
