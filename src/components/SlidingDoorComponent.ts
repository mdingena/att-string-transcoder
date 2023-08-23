import type { BinaryReader } from '../BinaryReader.js';
import type { BinaryString } from '../types/BinaryString.js';

import { BinaryWriter } from '../BinaryWriter.js';
import { ComponentHash } from '../types/ComponentHash.js';

import { Component, type ComponentProps } from './Component.js';

type SlidingDoorComponentPropsV1 = {
  isOpen?: boolean | undefined;
};

export type SlidingDoorComponentProps = SlidingDoorComponentPropsV1;

/**
 * @see [Class: `SlidingDoorComponent`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/SlidingDoorComponent.md)
 * @since v3.0.0
 * @version 1
 *
 * @example
 * import { SlidingDoorComponent } from 'att-string-transcoder';
 *
 * const componentVersion = 1;
 * const component = new SlidingDoorComponent({ version: componentVersion });
 */
export class SlidingDoorComponent extends Component {
  /**
   * Reveals the open state of this component's prefab.
   *
   * @since v1
   *
   * @example
   * import { SlidingDoorComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new SlidingDoorComponent({ version: componentVersion });
   *
   * const isOpen = component.isOpen;
   * // `isOpen` is `false`
   */
  isOpen: boolean;

  /**
   * @see [Class: `SlidingDoorComponent`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/SlidingDoorComponent.md)
   * @since v3.0.0
   * @version 1
   *
   * @example
   * import { SlidingDoorComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new SlidingDoorComponent({ version: componentVersion });
   */
  constructor({ version, isOpen }: ComponentProps & SlidingDoorComponentProps) {
    const hash = ComponentHash.SlidingDoor;
    const name = 'SlidingDoor';

    super({ hash, name, version });

    this.isOpen = isOpen ?? false;
  }

  static override fromBinary(reader: BinaryReader, version: number): SlidingDoorComponent {
    const props: ComponentProps & SlidingDoorComponentProps = { version };

    /**
     * @property {boolean} isOpen
     * @since v1
     */
    if (props.version >= 1) {
      props.isOpen = reader.readBoolean();
    }

    return new SlidingDoorComponent(props);
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
