import type { BinaryReader } from '../BinaryReader.js';
import type { BinaryString } from '../types/BinaryString.js';

import { BinaryWriter } from '../BinaryWriter.js';
import { ComponentHash } from '../types/ComponentHash.js';

import { Component, type ComponentProps } from './Component.js';

type Vector3 = { x: number; y: number; z: number };

type LogicVector3SenderComponentPropsV1 = {
  updatedValue?: number | undefined;
  changedExternally?: number | undefined;
  identifier?: number | undefined;
  value?: Vector3 | undefined;
};

export type LogicVector3SenderComponentProps = LogicVector3SenderComponentPropsV1;

/**
 * @see [Class: `LogicVector3SenderComponent`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/LogicVector3SenderComponent.md)
 * @since v3.0.0
 * @version 1
 *
 * @example
 * import { LogicVector3SenderComponent } from 'att-string-transcoder';
 *
 * const componentVersion = 1;
 * const component = new LogicVector3SenderComponent({ version: componentVersion });
 */
export class LogicVector3SenderComponent extends Component {
  /**
   * We're not quite sure what this property does.
   *
   * @since v1
   *
   * @example
   * import { LogicVector3SenderComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new LogicVector3SenderComponent({ version: componentVersion });
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
   * import { LogicVector3SenderComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new LogicVector3SenderComponent({ version: componentVersion });
   *
   * const changedExternally = component.changedExternally;
   * // `changedExternally` is `32`
   */
  changedExternally: number;

  /**
   * The identifier of this `LogicVector3Sender` that a `LogicVector3Receiver` connects to.
   *
   * @since v1
   *
   * @example
   * import { LogicVector3SenderComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new LogicVector3SenderComponent({ version: componentVersion });
   *
   * const identifier = component.identifier;
   * // `identifier` is `0`
   */
  identifier: number;

  /**
   * The output value of this `LogicVector3Sender` that a `LogicVector3Receiver` reads as its input.
   *
   * @since v1
   *
   * @example
   * import { LogicVector3SenderComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new LogicVector3SenderComponent({ version: componentVersion });
   *
   * const value = component.value;
   * // `value` is `{ x: 0, y: 0, z: 0 }`
   */
  value: Vector3;

  /**
   * @see [Class: `LogicVector3SenderComponent`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/LogicVector3SenderComponent.md)
   * @since v3.0.0
   * @version 1
   *
   * @example
   * import { LogicVector3SenderComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new LogicVector3SenderComponent({ version: componentVersion });
   */
  constructor({
    version,
    updatedValue,
    changedExternally,
    identifier,
    value
  }: ComponentProps & LogicVector3SenderComponentProps) {
    const hash = ComponentHash.LogicVector3Sender;
    const name = 'LogicVector3Sender';

    super({ hash, name, version });

    this.updatedValue = updatedValue ?? 3171294583;
    this.changedExternally = changedExternally ?? 32;
    this.identifier = identifier ?? 0;
    this.value = value ?? { x: 0, y: 0, z: 0 };
  }

  static override fromBinary(reader: BinaryReader, version: number): LogicVector3SenderComponent {
    const props: ComponentProps & LogicVector3SenderComponentProps = { version };

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
     * @property {Vector3} value
     * @since v1
     */
    if (props.version >= 1) {
      props.value = {
        x: reader.readFloat(),
        y: reader.readFloat(),
        z: reader.readFloat()
      };
    }

    return new LogicVector3SenderComponent(props);
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
     * @property {Vector3} value
     * @since v1
     */
    if (version >= 1) {
      writer.writeFloat(this.value.x);
      writer.writeFloat(this.value.y);
      writer.writeFloat(this.value.z);
    }

    return writer.flush();
  }
}
