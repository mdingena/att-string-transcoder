import type { BinaryReader } from '../BinaryReader.js';
import type { BinaryString } from '../types/BinaryString.js';

import { BinaryWriter } from '../BinaryWriter.js';
import { ComponentHash } from '../types/ComponentHash.js';

import { Component, type ComponentProps } from './Component.js';

type DoorComponentPropsV1 = {
  isOpen?: boolean | undefined;
};

export type DoorComponentProps = DoorComponentPropsV1;

/**
 * @see [Class: `DoorComponent`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/DoorComponent.md)
 * @since v3.0.0
 * @version 1
 *
 * @example
 * import { DoorComponent } from 'att-string-transcoder';
 *
 * const componentVersion = 1;
 * const component = new DoorComponent({ version: componentVersion });
 */
export class DoorComponent extends Component {
  /**
   * Reveals the open state of this component's prefab.
   *
   * @since v1
   *
   * @example
   * import { DoorComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new DoorComponent({ version: componentVersion });
   *
   * const isOpen = component.isOpen;
   * // `isOpen` is `false`
   */
  isOpen: boolean;

  /**
   * @see [Class: `DoorComponent`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/DoorComponent.md)
   * @since v3.0.0
   * @version 1
   *
   * @example
   * import { DoorComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new DoorComponent({ version: componentVersion });
   */
  constructor({ version, isOpen }: ComponentProps & DoorComponentProps) {
    const hash = ComponentHash.Door;
    const name = 'Door';

    super({ hash, name, version });

    this.isOpen = isOpen ?? false;
  }

  static override fromBinary(reader: BinaryReader, version: number): DoorComponent {
    const props: ComponentProps & DoorComponentProps = { version };

    /**
     * @property {boolean} isOpen
     * @since v1
     */
    if (props.version >= 1) {
      props.isOpen = reader.readBoolean();
    }

    return new DoorComponent(props);
  }

  override toBinary(version = this.version): BinaryString {
    const writer = new BinaryWriter();

    /**
     * @property {boolean} isOpen
     * @since v1
     */
    if (version >= 1) {
      writer.writeBoolean(this.isOpen);
    }

    return writer.flush();
  }
}
