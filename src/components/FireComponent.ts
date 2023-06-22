import type { BinaryReader } from '../BinaryReader.js';
import type { BinaryString } from '../types/BinaryString.js';
import { BinaryWriter } from '../BinaryWriter.js';
import { Component, type ComponentProps } from './Component.js';
import { ComponentHash } from '../types/ComponentHash.js';

type FireComponentPropsV1 = {
  fuelConsumptionProgress?: number;
};

type FireComponentProps = FireComponentPropsV1;

export class FireComponent extends Component {
  fuelConsumptionProgress: number;

  constructor({ version, fuelConsumptionProgress }: ComponentProps & FireComponentProps) {
    const hash = ComponentHash.Fire;
    const name = 'Fire';

    super({ hash, name, version });

    this.fuelConsumptionProgress = fuelConsumptionProgress ?? 1;
  }

  static override fromBinary(reader: BinaryReader, version: number): FireComponent {
    const props: ComponentProps & FireComponentProps = { version };

    /**
     * @property {float} fuelConsumptionProgress
     * @since v1
     */
    if (props.version >= 1) {
      props.fuelConsumptionProgress = reader.readFloat();
    }

    return new FireComponent(props);
  }

  override toBinary(version = this.version): BinaryString {
    const writer = new BinaryWriter();

    /**
     * @property {float} fuelConsumptionProgress
     * @since v1
     */
    if (version >= 1) {
      writer.writeFloat(this.fuelConsumptionProgress);
    }

    return writer.flush();
  }
}
