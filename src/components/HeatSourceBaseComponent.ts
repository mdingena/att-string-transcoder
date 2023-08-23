import type { BinaryReader } from '../BinaryReader.js';
import type { BinaryString } from '../types/BinaryString.js';

import { BinaryWriter } from '../BinaryWriter.js';
import { ComponentHash } from '../types/ComponentHash.js';

import { Component, type ComponentProps } from './Component.js';

type HeatSourceBaseComponentPropsV1 = {
  isLit?: boolean | undefined;
  progress?: number | undefined;
  time?: number | undefined;
};

export type HeatSourceBaseComponentProps = HeatSourceBaseComponentPropsV1;

const HUNDRED_YEARS_TICKS = 31557600000000000;

/**
 * @see [Class: `HeatSourceBaseComponent`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/HeatSourceBaseComponent.md)
 * @since v3.0.0
 * @version 1
 *
 * @example
 * import { HeatSourceBaseComponent } from 'att-string-transcoder';
 *
 * const componentVersion = 1;
 * const component = new HeatSourceBaseComponent({ version: componentVersion });
 */
export class HeatSourceBaseComponent extends Component {
  /**
   * Whether this heat source is lit and active or not.
   *
   * @since v1
   *
   * @example
   * import { HeatSourceBaseComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new HeatSourceBaseComponent({ version: componentVersion });
   *
   * const isLit = component.isLit;
   */
  isLit: boolean;

  /**
   * Progress of the heat source until extinguishing.
   *
   * @since v1
   *
   * @example
   * import { HeatSourceBaseComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new HeatSourceBaseComponent({ version: componentVersion });
   *
   * const progress = component.progress;
   * // `progress` is `0`
   */
  progress: number;

  /**
   * @since v1
   *
   * @example
   * import { HeatSourceBaseComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new HeatSourceBaseComponent({ version: componentVersion });
   *
   * const time = component.time;
   * // `time` is `31557600000000000`
   */
  time: number;

  /**
   * @see [Class: `HeatSourceBaseComponent`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/HeatSourceBaseComponent.md)
   * @since v3.0.0
   * @version 1
   *
   * @example
   * import { HeatSourceBaseComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new HeatSourceBaseComponent({ version: componentVersion });
   */
  constructor({ version, isLit, progress, time }: ComponentProps & HeatSourceBaseComponentProps) {
    const hash = ComponentHash.HeatSourceBase;
    const name = 'HeatSourceBase';

    super({ hash, name, version });

    this.isLit = isLit ?? true;
    this.progress = progress ?? 0;
    this.time = time ?? HUNDRED_YEARS_TICKS;
  }

  static override fromBinary(reader: BinaryReader, version: number): HeatSourceBaseComponent {
    const props: ComponentProps & HeatSourceBaseComponentProps = { version };

    /**
     * @property {boolean} isLit
     * @since v1
     */
    if (props.version >= 1) {
      props.isLit = reader.readBoolean();
    }

    /**
     * @property {float} progress
     * @since v1
     */
    if (props.version >= 1) {
      props.progress = reader.readFloat();
    }

    /**
     * @property {number} time
     * @since v1
     */
    if (props.version >= 1) {
      props.time = reader.readUnsignedLong();
    }

    return new HeatSourceBaseComponent(props);
  }

  override toBinary(version = this.version): BinaryString {
    const writer = new BinaryWriter();

    /**
     * @property {boolean} isLit
     * @since v1
     */
    if (version >= 1) {
      writer.writeBoolean(this.isLit);
    }

    /**
     * @property {float} progress
     * @since v1
     */
    if (version >= 1) {
      writer.writeFloat(this.progress);
    }

    /**
     * @property {number} time
     * @since v1
     */
    if (version >= 1) {
      writer.writeUnsignedLong(this.time);
    }

    return writer.flush();
  }
}
