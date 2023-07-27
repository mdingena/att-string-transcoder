import type { BinaryReader } from '../BinaryReader.js';
import type { BinaryString } from '../types/BinaryString.js';

import { BinaryWriter } from '../BinaryWriter.js';
import { ComponentHash } from '../types/ComponentHash.js';

import { Component, type ComponentProps } from './Component.js';

type LogicBoolSenderComponentPropsV2 = {
  updatedValue?: number | undefined;
  changedExternally?: number | undefined;
  identifier?: number | undefined;
  value?: boolean | undefined;
};

export type LogicBoolSenderComponentProps = LogicBoolSenderComponentPropsV2;

/**
 * @see [Class: `LogicBoolSenderComponent`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/LogicBoolSenderComponent.md)
 * @since v3.0.0
 * @version 2
 *
 * @example
 * import { LogicBoolSenderComponent } from 'att-string-transcoder';
 *
 * const componentVersion = 2;
 * const component = new LogicBoolSenderComponent({ version: componentVersion });
 */
export class LogicBoolSenderComponent extends Component {
  /**
   * We're not quite sure what this property does.
   *
   * @since v2
   *
   * @example
   * import { LogicBoolSenderComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 2;
   * const component = new LogicBoolSenderComponent({ version: componentVersion });
   *
   * const updatedValue = component.updatedValue;
   * // `updatedValue` is `3171294583`
   */
  updatedValue: number;

  /**
   * We're not quite sure what this property does.
   *
   * @since v2
   *
   * @example
   * import { LogicBoolSenderComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 2;
   * const component = new LogicBoolSenderComponent({ version: componentVersion });
   *
   * const changedExternally = component.changedExternally;
   * // `changedExternally` is `32`
   */
  changedExternally: number;

  /**
   * The identifier of this `LogicBoolSender` that a `LogicBoolReceiver` connects to.
   *
   * @since v2
   *
   * @example
   * import { LogicBoolSenderComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 2;
   * const component = new LogicBoolSenderComponent({ version: componentVersion });
   *
   * const identifier = component.identifier;
   * // `identifier` is `0`
   */
  identifier: number;

  /**
   * The output value of this `LogicBoolSender` that a `LogicBoolReceiver` reads as its input.
   *
   * @since v2
   *
   * @example
   * import { LogicBoolSenderComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 2;
   * const component = new LogicBoolSenderComponent({ version: componentVersion });
   *
   * const value = component.value;
   * // `value` is `false`
   */
  value: boolean;

  /**
   * @see [Class: `LogicBoolSenderComponent`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/LogicBoolSenderComponent.md)
   * @since v3.0.0
   * @version 2
   *
   * @example
   * import { LogicBoolSenderComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 2;
   * const component = new LogicBoolSenderComponent({ version: componentVersion });
   */
  constructor({
    version,
    updatedValue,
    changedExternally,
    identifier,
    value
  }: ComponentProps & LogicBoolSenderComponentProps) {
    const hash = ComponentHash.LogicBoolSender;
    const name = 'LogicBoolSender';

    super({ hash, name, version });

    this.updatedValue = updatedValue ?? 3171294583;
    this.changedExternally = changedExternally ?? 32;
    this.identifier = identifier ?? 0;
    this.value = value ?? false;
  }

  static override fromBinary(reader: BinaryReader, version: number): LogicBoolSenderComponent {
    const props: ComponentProps & LogicBoolSenderComponentProps = { version };

    /**
     * @property {number} updatedValue
     * @since v2
     */
    if (props.version >= 2) {
      props.updatedValue = reader.readUnsignedInteger();
    }

    /**
     * @property {number} changedExternally
     * @since v2
     */
    if (props.version >= 2) {
      props.changedExternally = reader.readUnsignedInteger();
    }

    /**
     * @property {number} identifier
     * @since v2
     */
    if (props.version >= 2) {
      props.identifier = reader.readUnsignedInteger();
    }

    /**
     * @property {boolean} value
     * @since v2
     */
    if (props.version >= 2) {
      props.value = reader.readBoolean();
    }

    return new LogicBoolSenderComponent(props);
  }

  override toBinary(version = this.version): BinaryString {
    const writer = new BinaryWriter();

    /**
     * @property {number} updatedValue
     * @since v2
     */
    if (version >= 2) {
      writer.writeUnsignedInteger(this.updatedValue);
    }

    /**
     * @property {number} changedExternally
     * @since v2
     */
    if (version >= 2) {
      writer.writeUnsignedInteger(this.changedExternally);
    }

    /**
     * @property {number} identifier
     * @since v2
     */
    if (version >= 2) {
      writer.writeUnsignedInteger(this.identifier);
    }

    /**
     * @property {boolean} value
     * @since v2
     */
    if (version >= 2) {
      writer.writeBoolean(this.value);
    }

    return writer.flush();
  }
}
