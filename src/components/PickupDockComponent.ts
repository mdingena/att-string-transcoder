import type { BinaryReader } from '../BinaryReader.js';
import type { BinaryString } from '../types/BinaryString.js';
import { BinaryWriter } from '../BinaryWriter.js';
import { Component, type ComponentProps } from './Component.js';
import { ComponentHash } from '../types/ComponentHash.js';

type PickupDockComponentPropsV2 = {
  dockedTypeHash?: number;
  quantity?: number;
  childIndex?: number;
};

export type PickupDockComponentProps = PickupDockComponentPropsV2;

export class PickupDockComponent extends Component {
  dockedTypeHash: number;
  quantity: number;
  childIndex: number;

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
