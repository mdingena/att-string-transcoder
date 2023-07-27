import type { BinaryReader } from '../BinaryReader.js';
import type { BinaryString } from '../types/BinaryString.js';

import { BinaryWriter } from '../BinaryWriter.js';
import { ComponentHash } from '../types/ComponentHash.js';
import { LogicOperator } from '../types/LogicOperator.js';

import { Component, type ComponentProps } from './Component.js';

type LogicGateReceiverComponentPropsV2 = {
  senders?: number[] | undefined;
  operationType?: LogicOperator | undefined;
  isInversedOutputSaved?: boolean | undefined;
};

export type LogicGateReceiverComponentProps = LogicGateReceiverComponentPropsV2;

/**
 * @see [Class: `LogicGateReceiverComponent`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/LogicGateReceiverComponent.md)
 * @since v3.0.0
 * @version 2
 *
 * @example
 * import { LogicGateReceiverComponent } from 'att-string-transcoder';
 *
 * const componentVersion = 2;
 * const component = new LogicGateReceiverComponent({ version: componentVersion });
 */
export class LogicGateReceiverComponent extends Component {
  /**
   * The identifiers of the `Logic*Sender` components that are connected to this `LogicGateReceiver`.
   *
   * @since v2
   *
   * @example
   * import { LogicGateReceiverComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 2;
   * const component = new LogicGateReceiverComponent({ version: componentVersion });
   *
   * const senders = component.senders;
   * // `senders` is `[]`
   */
  senders: number[];

  /**
   * The type of operation to perform on the received inputs.
   *
   * @since v2
   *
   * @example
   * import { LogicGateReceiverComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 2;
   * const component = new LogicGateReceiverComponent({ version: componentVersion });
   *
   * const operationType = component.operationType;
   * // `operationType` is `0` (AND)
   */
  operationType: LogicOperator;

  /**
   * Whether to inverse the output of this gate.
   *
   * @since v2
   *
   * @example
   * import { LogicGateReceiverComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 2;
   * const component = new LogicGateReceiverComponent({ version: componentVersion });
   *
   * const isInversedOutputSaved = component.isInversedOutputSaved;
   * // `isInversedOutputSaved` is `false`
   */
  isInversedOutputSaved: boolean;

  /**
   * @see [Class: `LogicGateReceiverComponent`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/LogicGateReceiverComponent.md)
   * @since v3.0.0
   * @version 2
   *
   * @example
   * import { LogicGateReceiverComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 2;
   * const component = new LogicGateReceiverComponent({ version: componentVersion });
   */
  constructor({
    version,
    senders,
    operationType,
    isInversedOutputSaved
  }: ComponentProps & LogicGateReceiverComponentProps) {
    const hash = ComponentHash.LogicGateReceiver;
    const name = 'LogicGateReceiver';

    super({ hash, name, version });

    this.senders = senders ?? [];
    this.operationType = operationType ?? LogicOperator.And;
    this.isInversedOutputSaved = isInversedOutputSaved ?? false;
  }

  static override fromBinary(reader: BinaryReader, version: number): LogicGateReceiverComponent {
    const props: ComponentProps & LogicGateReceiverComponentProps = { version };

    /**
     * @property {number[]} senders
     * @since v2
     */
    if (props.version >= 2) {
      const sendersLength = reader.readUnsignedInteger();
      props.senders = [];

      for (let sendersIndex = 0; sendersIndex < sendersLength; ++sendersIndex) {
        /**
         * @property {number} sender
         * @since v2
         */
        props.senders.push(reader.readUnsignedInteger());
      }
    }

    /**
     * @property {number} operationType
     * @since v2
     */
    if (props.version >= 2) {
      props.operationType = reader.readSignedInteger();
    }

    /**
     * @property {number} isInversedOutputSaved
     * @since v2
     */
    if (props.version >= 2) {
      props.isInversedOutputSaved = reader.readBoolean();
    }

    return new LogicGateReceiverComponent(props);
  }

  override toBinary(version = this.version): BinaryString {
    const writer = new BinaryWriter();

    /**
     * @property {number[]} senders
     * @since v2
     */
    if (version >= 2) {
      writer.writeUnsignedInteger(this.senders.length);

      for (const sender of this.senders) {
        /**
         * @property {number} sender
         * @since v2
         */
        writer.writeUnsignedInteger(sender);
      }
    }

    /**
     * @property {number} operationType
     * @since v2
     */
    if (version >= 2) {
      writer.writeSignedInteger(this.operationType);
    }

    /**
     * @property {number} isInversedOutputSaved
     * @since v2
     */
    if (version >= 2) {
      writer.writeBoolean(this.isInversedOutputSaved);
    }

    return writer.flush();
  }
}
