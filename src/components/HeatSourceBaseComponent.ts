import type { BinaryReader } from '../BinaryReader.js';
import type { BinaryString } from '../types/BinaryString.js';
import { BinaryWriter } from '../BinaryWriter.js';
import { Component, type ComponentProps } from './Component.js';
import { ComponentHash } from '../types/ComponentHash.js';

type HeatSourceBaseComponentPropsV1 = {
  isLit?: boolean;
  progress?: number;
  time?: number;
};

export type HeatSourceBaseComponentProps = HeatSourceBaseComponentPropsV1;

const HUNDRED_YEARS_TICKS = 31557600000000000;

export class HeatSourceBaseComponent extends Component {
  isLit: boolean;
  progress: number;
  time: number;

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
