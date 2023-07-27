import type { BinaryReader } from '../BinaryReader.js';
import type { BinaryString } from '../types/BinaryString.js';

import { BinaryWriter } from '../BinaryWriter.js';
import { ComponentHash } from '../types/ComponentHash.js';

import { Component, type ComponentProps } from './Component.js';

type LogicBoolReceiverComponentPropsV1 = {
  sender?: number | undefined;
};

export type LogicBoolReceiverComponentProps = LogicBoolReceiverComponentPropsV1;

/**
 * @see [Class: `LogicBoolReceiverComponent`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/LogicBoolReceiverComponent.md)
 * @since v3.0.0
 * @version 1
 *
 * @example
 * import { LogicBoolReceiverComponent } from 'att-string-transcoder';
 *
 * const componentVersion = 1;
 * const component = new LogicBoolReceiverComponent({ version: componentVersion });
 */
export class LogicBoolReceiverComponent extends Component {
  /**
   * The identifier of the `LogicBoolSender` that is connected to this `LogicBoolReceiver`.
   *
   * @since v1
   *
   * @example
   * import { LogicBoolReceiverComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new LogicBoolReceiverComponent({ version: componentVersion });
   *
   * const sender = component.sender;
   * // `sender` is `0`
   */
  sender: number;

  /**
   * @see [Class: `LogicBoolReceiverComponent`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/LogicBoolReceiverComponent.md)
   * @since v3.0.0
   * @version 1
   *
   * @example
   * import { LogicBoolReceiverComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new LogicBoolReceiverComponent({ version: componentVersion });
   */
  constructor({ version, sender }: ComponentProps & LogicBoolReceiverComponentProps) {
    const hash = ComponentHash.LogicBoolReceiver;
    const name = 'LogicBoolReceiver';

    super({ hash, name, version });

    this.sender = sender ?? 0;
  }

  static override fromBinary(reader: BinaryReader, version: number): LogicBoolReceiverComponent {
    const props: ComponentProps & LogicBoolReceiverComponentProps = { version };

    /**
     * @property {number} sender
     * @since v1
     */
    if (props.version >= 1) {
      props.sender = reader.readUnsignedInteger();
    }

    return new LogicBoolReceiverComponent(props);
  }

  override toBinary(version = this.version): BinaryString {
    const writer = new BinaryWriter();

    /**
     * @property {number} sender
     * @since v1
     */
    if (version >= 1) {
      writer.writeUnsignedInteger(this.sender);
    }

    return writer.flush();
  }
}
