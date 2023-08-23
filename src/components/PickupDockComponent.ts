import type { BinaryReader } from '../BinaryReader.js';
import type { BinaryString } from '../types/BinaryString.js';

import { BinaryWriter } from '../BinaryWriter.js';
import { ComponentHash } from '../types/ComponentHash.js';

import { Component, type ComponentProps } from './Component.js';

type PickupDockComponentPropsV2 = {
  dockedTypeHash?: number | undefined;
  quantity?: number | undefined;
  childIndex?: number | undefined;
};

export type PickupDockComponentProps = PickupDockComponentPropsV2;

/**
 * @see [Class: `BasicDecayComponent`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/BasicDecayComponent.md)
 * @since v3.0.0
 * @version 2
 *
 * @example
 * import { PickupDockComponent } from 'att-string-transcoder';
 *
 * const componentVersion = 2;
 * const component = new PickupDockComponent({ version: componentVersion });
 */
export class PickupDockComponent extends Component {
  /**
   * @since v2
   *
   * @example
   * import { PickupDockComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 2;
   * const component = new PickupDockComponent({ version: componentVersion });
   *
   * const dockedTypeHash = component.dockedTypeHash;
   * // `dockedTypeHash` is `0`
   */
  dockedTypeHash: number;

  /**
   * @since v2
   *
   * @example
   * import { PickupDockComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 2;
   * const component = new PickupDockComponent({ version: componentVersion });
   *
   * const quantity = component.quantity;
   * // `quantity` is `1`
   */
  quantity: number;

  /**
   * @since v2
   *
   * @example
   * import { PickupDockComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 2;
   * const component = new PickupDockComponent({ version: componentVersion });
   *
   * const childIndex = component.childIndex;
   * // `childIndex` is `0`
   */
  childIndex: number;

  /**
   * @see [Class: `BasicDecayComponent`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/BasicDecayComponent.md)
   * @since v3.0.0
   * @version 2
   *
   * @example
   * import { PickupDockComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 2;
   * const component = new PickupDockComponent({ version: componentVersion });
   */
  constructor({ version, dockedTypeHash, quantity, childIndex }: ComponentProps & PickupDockComponentProps) {
    const hash = ComponentHash.PickupDock;
    const name = 'PickupDock';

    super({ hash, name, version });

    this.dockedTypeHash = dockedTypeHash ?? 0;
    this.quantity = quantity ?? 1;
    this.childIndex = childIndex ?? 0;
  }

  static override fromBinary(reader: BinaryReader, version: number): PickupDockComponent {
    const props: ComponentProps & PickupDockComponentProps = { version };

    /**
     * @property {number} dockedTypeHash
     * @since v2
     */
    if (props.version >= 2) {
      props.dockedTypeHash = reader.readUnsignedInteger();
    }

    /**
     * @property {number} quantity
     * @since v2
     */
    if (props.version >= 2) {
      props.quantity = reader.readSignedInteger();
    }

    /**
     * @property {number} childIndex
     * @since v2
     */
    if (props.version >= 2) {
      props.childIndex = reader.readSignedInteger();
    }

    return new PickupDockComponent(props);
  }

  override toBinary(version = this.version): BinaryString {
    const writer = new BinaryWriter();

    /**
     * @property {number} dockedTypeHash
     * @since v2
     */
    if (version >= 2) {
      writer.writeUnsignedInteger(this.dockedTypeHash);
    }

    /**
     * @property {number} quantity
     * @since v2
     */
    if (version >= 2) {
      writer.writeSignedInteger(this.quantity);
    }

    /**
     * @property {number} childIndex
     * @since v2
     */
    if (version >= 2) {
      writer.writeSignedInteger(this.childIndex);
    }

    return writer.flush();
  }
}
