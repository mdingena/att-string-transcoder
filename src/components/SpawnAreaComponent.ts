import type { BinaryReader } from '../BinaryReader.js';
import type { BinaryString } from '../types/BinaryString.js';
import { BinaryWriter } from '../BinaryWriter.js';
import { Component, type ComponentProps } from './Component.js';
import { ComponentHash } from '../types/ComponentHash.js';

type SpawnAreaComponentPropsV1 = {
  size?: number;
  groundLayers?: number;
  avoidLayers?: number;
  isAligningNormal?: boolean;
  maxAcceptableAngleDot?: number;
};

export type SpawnAreaComponentProps = SpawnAreaComponentPropsV1;

export class SpawnAreaComponent extends Component {
  size: number;
  groundLayers: number;
  avoidLayers: number;
  isAligningNormal: boolean;
  maxAcceptableAngleDot: number;

  constructor({
    version,
    size,
    groundLayers,
    avoidLayers,
    isAligningNormal,
    maxAcceptableAngleDot
  }: ComponentProps & SpawnAreaComponentProps) {
    const hash = ComponentHash.SpawnArea;
    const name = 'SpawnArea';

    super({ hash, name, version });

    this.size = size ?? 5;
    this.groundLayers = groundLayers ?? 1280;
    this.avoidLayers = avoidLayers ?? 8721;
    this.isAligningNormal = isAligningNormal ?? false;
    this.maxAcceptableAngleDot = maxAcceptableAngleDot ?? -1;
  }

  static override fromBinary(reader: BinaryReader, version: number): SpawnAreaComponent {
    const props: ComponentProps & SpawnAreaComponentProps = { version };

    /**
     * @property {float} size
     * @since v1
     */
    if (props.version >= 1) {
      props.size = reader.readFloat();
    }

    /**
     * @property {number} groundLayers
     * @since v1
     */
    if (props.version >= 1) {
      props.groundLayers = reader.readSignedInteger();
    }

    /**
     * @property {number} avoidLayers
     * @since v1
     */
    if (props.version >= 1) {
      props.avoidLayers = reader.readSignedInteger();
    }

    /**
     * @property {boolean} isAligningNormal
     * @since v1
     */
    if (props.version >= 1) {
      props.isAligningNormal = reader.readBoolean();
    }

    /**
     * @property {float} maxAcceptableAngleDot
     * @since v1
     */
    if (props.version >= 1) {
      props.maxAcceptableAngleDot = reader.readFloat();
    }

    return new SpawnAreaComponent(props);
  }

  override toBinary(version = this.version): BinaryString {
    const writer = new BinaryWriter();

    /**
     * @property {float} size
     * @since v1
     */
    if (version >= 1) {
      writer.writeFloat(this.size);
    }

    /**
     * @property {number} groundLayers
     * @since v1
     */
    if (version >= 1) {
      writer.writeSignedInteger(this.groundLayers);
    }

    /**
     * @property {number} avoidLayers
     * @since v1
     */
    if (version >= 1) {
      writer.writeSignedInteger(this.avoidLayers);
    }

    /**
     * @property {boolean} isAligningNormal
     * @since v1
     */
    if (version >= 1) {
      writer.writeBoolean(this.isAligningNormal);
    }

    /**
     * @property {float} maxAcceptableAngleDot
     * @since v1
     */
    if (version >= 1) {
      writer.writeFloat(this.maxAcceptableAngleDot);
    }

    return writer.flush();
  }
}
