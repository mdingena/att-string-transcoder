import type { BinaryReader } from '../BinaryReader.js';
import type { BinaryString } from '../types/BinaryString.js';

import { BinaryWriter } from '../BinaryWriter.js';
import { ComponentHash } from '../types/ComponentHash.js';

import { Component, type ComponentProps } from './Component.js';

type LogicIntSenderComponentPropsV2 = {
  updatedValue?: number | undefined;
  changedExternally?: number | undefined;
  identifier?: number | undefined;
  value?: number | undefined;
};

export type LogicIntSenderComponentProps = LogicIntSenderComponentPropsV2;

/**
 * @see [Class: `LogicIntSenderComponent`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/LogicIntSenderComponent.md)
 * @since v3.0.0
 * @version 1
 *
 * @example
 * import { LogicIntSenderComponent } from 'att-string-transcoder';
 *
 * const componentVersion = 1;
 * const component = new LogicIntSenderComponent({ version: componentVersion });
 */
export class LogicIntSenderComponent extends Component {
  /**
   * We're not quite sure what this property does.
   *
   * @since v1
   *
   * @example
   * import { LogicIntSenderComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new LogicIntSenderComponent({ version: componentVersion });
   *
   * const updatedValue = component.updatedValue;
   * // `updatedValue` is `3171294583`
   */
  updatedValue: number;

  /**
   * We're not quite sure what this property does.
   *
   * @since v1
   *
   * @example
   * import { LogicIntSenderComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new LogicIntSenderComponent({ version: componentVersion });
   *
   * const changedExternally = component.changedExternally;
   * // `changedExternally` is `32`
   */
  changedExternally: number;

  /**
   * The identifier of this `LogicIntSender` that a `LogicIntReceiver` connects to.
   *
   * @since v1
   *
   * @example
   * import { LogicIntSenderComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new LogicIntSenderComponent({ version: componentVersion });
   *
   * const identifier = component.identifier;
   * // `identifier` is `0`
   */
  identifier: number;

  /**
   * The output value of this `LogicIntSender` that a `LogicIntReceiver` reads as its input.
   *
   * @since v1
   *
   * @example
   * import { LogicIntSenderComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new LogicIntSenderComponent({ version: componentVersion });
   *
   * const value = component.value;
   * // `value` is `0`
   */
  value: number;

  /**
   * @see [Class: `LogicIntSenderComponent`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/LogicIntSenderComponent.md)
   * @since v3.0.0
   * @version 1
   *
   * @example
   * import { LogicIntSenderComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new LogicIntSenderComponent({ version: componentVersion });
   */
  constructor({
    version,
    updatedValue,
    changedExternally,
    identifier,
    value
  }: ComponentProps & LogicIntSenderComponentProps) {
    const hash = ComponentHash.LogicIntSender;
    const name = 'LogicIntSender';

    super({ hash, name, version });

    this.updatedValue = updatedValue ?? 3171294583;
    this.changedExternally = changedExternally ?? 32;
    this.identifier = identifier ?? 0;
    this.value = value ?? 0;
  }

  static override fromBinary(reader: BinaryReader, version: number): LogicIntSenderComponent {
    const props: ComponentProps & LogicIntSenderComponentProps = { version };

    /**
     * @property {number} updatedValue
     * @since v1
     */
    if (props.version >= 1) {
      props.updatedValue = reader.readUnsignedInteger();
    }

    /**
     * @property {number} changedExternally
     * @since v1
     */
    if (props.version >= 1) {
      props.changedExternally = reader.readUnsignedInteger();
    }

    /**
     * @property {number} identifier
     * @since v1
     */
    if (props.version >= 1) {
      props.identifier = reader.readUnsignedInteger();
    }

    /**
     * @property {boolean} value
     * @since v1
     */
    if (props.version >= 1) {
      props.value = reader.readSignedInteger();
    }

    return new LogicIntSenderComponent(props);
  }

  override toBinary(version = this.version): BinaryString {
    const writer = new BinaryWriter();

    /**
     * @property {number} updatedValue
     * @since v1
     */
    if (version >= 1) {
      writer.writeUnsignedInteger(this.updatedValue);
    }

    /**
     * @property {number} changedExternally
     * @since v1
     */
    if (version >= 1) {
      writer.writeUnsignedInteger(this.changedExternally);
    }

    /**
     * @property {number} identifier
     * @since v1
     */
    if (version >= 1) {
      writer.writeUnsignedInteger(this.identifier);
    }

    /**
     * @property {boolean} value
     * @since v1
     */
    if (version >= 1) {
      writer.writeSignedInteger(this.value);
    }

    return writer.flush();
  }
}
