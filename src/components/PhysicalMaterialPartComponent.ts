import type { BinaryReader } from '../BinaryReader.js';
import type { BinaryString } from '../types/BinaryString.js';
import { BinaryWriter } from '../BinaryWriter.js';
import { Component, type ComponentProps } from './Component.js';
import { ComponentHash } from '../types/ComponentHash.js';
import { PhysicalMaterialPartHash } from '../types/PhysicalMaterialPartHash.js';

type PhysicalMaterialPartComponentPropsV1 = {
  materialHash?: number;
};

export type PhysicalMaterialPartComponentProps = PhysicalMaterialPartComponentPropsV1;

export class PhysicalMaterialPartComponent extends Component {
  materialHash: number;

  constructor({ version, materialHash }: ComponentProps & PhysicalMaterialPartComponentProps) {
    const hash = ComponentHash.PhysicalMaterialPart;
    const name = 'PhysicalMaterialPart';

    super({ hash, name, version });

    this.materialHash = materialHash ?? PhysicalMaterialPartHash.Iron;
  }

  static override fromBinary(reader: BinaryReader, version: number): PhysicalMaterialPartComponent {
    const props: ComponentProps & PhysicalMaterialPartComponentProps = { version };

    /**
     * @property {number} materialHash
     * @since v1
     */
    if (props.version >= 1) {
      props.materialHash = reader.readUnsignedInteger();
    }

    return new PhysicalMaterialPartComponent(props);
  }

  override toBinary(version = this.version): BinaryString {
    const writer = new BinaryWriter();

    /**
     * @property {number} materialHash
     * @since v1
     */
    if (version >= 1) {
      writer.writeUnsignedInteger(this.materialHash);
    }

    return writer.flush();
  }
}
