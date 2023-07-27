import type { BinaryReader } from '../BinaryReader.js';
import type { BinaryString } from '../types/BinaryString.js';

import { BinaryWriter } from '../BinaryWriter.js';
import { ComponentHash } from '../types/ComponentHash.js';

import { Component, type ComponentProps } from './Component.js';

type LogicVector3ReceiverComponentPropsV1 = {
  sender?: number | undefined;
};

export type LogicVector3ReceiverComponentProps = LogicVector3ReceiverComponentPropsV1;

/**
 * @see [Class: `LogicVector3ReceiverComponent`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/LogicVector3ReceiverComponent.md)
 * @since v3.0.0
 * @version 1
 *
 * @example
 * import { LogicVector3ReceiverComponent } from 'att-string-transcoder';
 *
 * const componentVersion = 1;
 * const component = new LogicVector3ReceiverComponent({ version: componentVersion });
 */
export class LogicVector3ReceiverComponent extends Component {
  /**
   * The identifier of the `LogicVector3Sender` that is connected to this `LogicVector3Receiver`.
   *
   * @since v1
   *
   * @example
   * import { LogicVector3ReceiverComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new LogicVector3ReceiverComponent({ version: componentVersion });
   *
   * const sender = component.sender;
   * // `sender` is `0`
   */
  sender: number;

  /**
   * @see [Class: `LogicVector3ReceiverComponent`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/LogicVector3ReceiverComponent.md)
   * @since v3.0.0
   * @version 1
   *
   * @example
   * import { LogicVector3ReceiverComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new LogicVector3ReceiverComponent({ version: componentVersion });
   */
  constructor({ version, sender }: ComponentProps & LogicVector3ReceiverComponentProps) {
    const hash = ComponentHash.LogicVector3Receiver;
    const name = 'LogicVector3Receiver';

    super({ hash, name, version });

    this.sender = sender ?? 0;
  }

  static override fromBinary(reader: BinaryReader, version: number): LogicVector3ReceiverComponent {
    const props: ComponentProps & LogicVector3ReceiverComponentProps = { version };

    /**
     * @property {number} sender
     * @since v1
     */
    if (props.version >= 1) {
      props.sender = reader.readUnsignedInteger();
    }

    return new LogicVector3ReceiverComponent(props);
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
