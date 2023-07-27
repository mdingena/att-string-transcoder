import type { BinaryReader } from '../BinaryReader.js';
import type { BinaryString } from '../types/BinaryString.js';

import { BinaryWriter } from '../BinaryWriter.js';
import { ComponentHash } from '../types/ComponentHash.js';

import { Component, type ComponentProps } from './Component.js';

type LogicFloatReceiverComponentPropsV1 = {
  sender?: number | undefined;
};

export type LogicFloatReceiverComponentProps = LogicFloatReceiverComponentPropsV1;

/**
 * @see [Class: `LogicFloatReceiverComponent`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/LogicFloatReceiverComponent.md)
 * @since v3.0.0
 * @version 1
 *
 * @example
 * import { LogicFloatReceiverComponent } from 'att-string-transcoder';
 *
 * const componentVersion = 1;
 * const component = new LogicFloatReceiverComponent({ version: componentVersion });
 */
export class LogicFloatReceiverComponent extends Component {
  /**
   * The identifier of the `LogicFloatSender` that is connected to this `LogicFloatReceiver`.
   *
   * @since v1
   *
   * @example
   * import { LogicFloatReceiverComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new LogicFloatReceiverComponent({ version: componentVersion });
   *
   * const sender = component.sender;
   * // `sender` is `0`
   */
  sender: number;

  /**
   * @see [Class: `LogicFloatReceiverComponent`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/LogicFloatReceiverComponent.md)
   * @since v3.0.0
   * @version 1
   *
   * @example
   * import { LogicFloatReceiverComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new LogicFloatReceiverComponent({ version: componentVersion });
   */
  constructor({ version, sender }: ComponentProps & LogicFloatReceiverComponentProps) {
    const hash = ComponentHash.LogicFloatReceiver;
    const name = 'LogicFloatReceiver';

    super({ hash, name, version });

    this.sender = sender ?? 0;
  }

  static override fromBinary(reader: BinaryReader, version: number): LogicFloatReceiverComponent {
    const props: ComponentProps & LogicFloatReceiverComponentProps = { version };

    /**
     * @property {number} sender
     * @since v1
     */
    if (props.version >= 1) {
      props.sender = reader.readUnsignedInteger();
    }

    return new LogicFloatReceiverComponent(props);
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
