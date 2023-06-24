import type { BinaryReader } from '../BinaryReader.js';
import type { BinaryString } from '../types/BinaryString.js';
import { BinaryWriter } from '../BinaryWriter.js';
import { Component, type ComponentProps } from './Component.js';
import { ComponentHash } from '../types/ComponentHash.js';

type BasicDecayComponentPropsV3 = {
  isDisabled?: boolean;
  timelineEntry?: number;
};

export type BasicDecayComponentProps = BasicDecayComponentPropsV3;

const HUNDRED_YEARS_TICKS = 31557600000000000;

export class BasicDecayComponent extends Component {
  isDisabled: boolean;
  timelineEntry: number;

  constructor({ version, isDisabled, timelineEntry }: ComponentProps & BasicDecayComponentProps) {
    const hash = ComponentHash.BasicDecay;
    const name = 'BasicDecay';

    super({ hash, name, version });

    this.isDisabled = isDisabled ?? true;
    this.timelineEntry = timelineEntry ?? HUNDRED_YEARS_TICKS;
  }

  static override fromBinary(reader: BinaryReader, version: number): BasicDecayComponent {
    const props: ComponentProps & BasicDecayComponentProps = { version };

    /**
     * @property {boolean} isDisabled
     * @since v3
     */
    if (props.version >= 3) {
      props.isDisabled = reader.readBoolean();
    }

    /**
     * @property {number} timelineEntry
     * @since v3
     */
    if (props.version >= 3) {
      props.timelineEntry = reader.readUnsignedLong();
    }

    return new BasicDecayComponent(props);
  }

  override toBinary(version = this.version): BinaryString {
    const writer = new BinaryWriter();

    /**
     * @property {boolean} isDisabled
     * @since v3
     */
    if (version >= 3) {
      writer.writeBoolean(this.isDisabled);
    }

    /**
     * @property {number} timelineEntry
     * @since v3
     */
    if (version >= 3) {
      writer.writeUnsignedLong(this.timelineEntry);
    }

    return writer.flush();
  }
}
