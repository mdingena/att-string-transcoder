import type { BinaryReader } from '../BinaryReader.js';
import type { BinaryString } from '../types/BinaryString.js';

import { BinaryWriter } from '../BinaryWriter.js';
import { ComponentHash } from '../types/ComponentHash.js';

import { Component, type ComponentProps } from './Component.js';

type LogicIntReceiverComponentPropsV1 = {
  sender?: number | undefined;
};

export type LogicIntReceiverComponentProps = LogicIntReceiverComponentPropsV1;

/**
 * @see [Class: `LogicIntReceiverComponent`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/LogicIntReceiverComponent.md)
 * @since v3.0.0
 * @version 1
 *
 * @example
 * import { LogicIntReceiverComponent } from 'att-string-transcoder';
 *
 * const componentVersion = 1;
 * const component = new LogicIntReceiverComponent({ version: componentVersion });
 */
export class LogicIntReceiverComponent extends Component {
  /**
   * The identifier of the `LogicIntSender` that is connected to this `LogicIntReceiver`.
   *
   * @since v1
   *
   * @example
   * import { LogicIntReceiverComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new LogicIntReceiverComponent({ version: componentVersion });
   *
   * const sender = component.sender;
   * // `sender` is `0`
   */
  sender: number;

  /**
   * @see [Class: `LogicIntReceiverComponent`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/LogicIntReceiverComponent.md)
   * @since v3.0.0
   * @version 1
   *
   * @example
   * import { LogicIntReceiverComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new LogicIntReceiverComponent({ version: componentVersion });
   */
  constructor({ version, sender }: ComponentProps & LogicIntReceiverComponentProps) {
    const hash = ComponentHash.LogicIntReceiver;
    const name = 'LogicIntReceiver';

    super({ hash, name, version });

    this.sender = sender ?? 1;
  }

  static override fromBinary(reader: BinaryReader, version: number): LogicIntReceiverComponent {
    const props: ComponentProps & LogicIntReceiverComponentProps = { version };

    /**
     * @property {number} sender
     * @since v1
     */
    if (props.version >= 1) {
      props.sender = reader.readUnsignedInteger();
    }

    return new LogicIntReceiverComponent(props);
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
