import type { BinaryReader } from '../BinaryReader.js';
import type { BinaryString } from '../types/BinaryString.js';

import { BinaryWriter } from '../BinaryWriter.js';
import { ComponentHash } from '../types/ComponentHash.js';

import { Component, type ComponentProps } from './Component.js';

type FuseComponentPropsV1 = {
  isFinished?: boolean | undefined;
  isLit?: boolean | undefined;
  currentFuseAmount?: number | undefined;
};

export type FuseComponentProps = FuseComponentPropsV1;

/**
 * @see [Class: `FuseComponent`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/FuseComponent.md)
 * @since v3.0.0
 * @version 1
 *
 * @example
 * import { FuseComponent } from 'att-string-transcoder';
 *
 * const componentVersion = 1;
 * const component = new FuseComponent({ version: componentVersion });
 */
export class FuseComponent extends Component {
  /**
   * Whether the fuse is finished or not.
   *
   * @since v1
   *
   * @example
   * import { FuseComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new FuseComponent({ version: componentVersion });
   *
   * const isFinished = component.isFinished;
   * // `isFinished` is `false`
   */
  isFinished: boolean;

  /**
   * Whether the fuse is lit or not.
   *
   * @since v1
   *
   * @example
   * import { FuseComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new FuseComponent({ version: componentVersion });
   *
   * const isLit = component.isLit;
   * // `isLit` is `false`
   */
  isLit: boolean;

  /**
   * How much of the fuse is left.
   *
   * @since v1
   *
   * @example
   * import { FuseComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new FuseComponent({ version: componentVersion });
   *
   * const currentFuseAmount = component.currentFuseAmount;
   * // `currentFuseAmount` is `1`
   */
  currentFuseAmount: number;

  /**
   * @see [Class: `FuseComponent`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/FuseComponent.md)
   * @since v3.0.0
   * @version 1
   *
   * @example
   * import { FuseComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new FuseComponent({ version: componentVersion });
   */
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
