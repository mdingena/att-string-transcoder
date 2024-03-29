import type { BinaryReader } from '../BinaryReader.js';
import type { BinaryString } from '../types/BinaryString.js';

import { BinaryWriter } from '../BinaryWriter.js';
import { ComponentHash } from '../types/ComponentHash.js';

import { Component, type ComponentProps } from './Component.js';

type SpawnAreaComponentPropsV1 = {
  size?: number | undefined;
  groundLayers?: number | undefined;
  avoidLayers?: number | undefined;
  isAligningNormal?: boolean | undefined;
  maxAcceptableAngleDot?: number | undefined;
};

export type SpawnAreaComponentProps = SpawnAreaComponentPropsV1;

/**
 * @see [Class: `SpawnAreaComponent`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/SpawnAreaComponent.md)
 * @since v3.0.0
 * @version 1
 *
 * @example
 * import { SpawnAreaComponent } from 'att-string-transcoder';
 *
 * const componentVersion = 1;
 * const component = new SpawnAreaComponent({ version: componentVersion });
 */
export class SpawnAreaComponent extends Component {
  /**
   * The size (in metres) of the spawn area of the prefab this component is attached to.
   *
   * @since v1
   *
   * @example
   * import { SpawnAreaComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new SpawnAreaComponent({ version: componentVersion });
   *
   * const size = component.size;
   * // `size` is `5`
   */
  size: number;

  /**
   * @since v1
   *
   * @example
   * import { SpawnAreaComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new SpawnAreaComponent({ version: componentVersion });
   *
   * const groundLayers = component.groundLayers;
   * // `groundLayers` is `1280`
   */
  groundLayers: number;

  /**
   * @since v1
   *
   * @example
   * import { SpawnAreaComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new SpawnAreaComponent({ version: componentVersion });
   *
   * const avoidLayers = component.avoidLayers;
   * // `avoidLayers` is `8721`
   */
  avoidLayers: number;

  /**
   * @since v1
   *
   * @example
   * import { SpawnAreaComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new SpawnAreaComponent({ version: componentVersion });
   *
   * const isAligningNormal = component.isAligningNormal;
   * // `isAligningNormal` is `false`
   */
  isAligningNormal: boolean;

  /**
   * @since v1
   *
   * @example
   * import { SpawnAreaComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new SpawnAreaComponent({ version: componentVersion });
   *
   * const maxAcceptableAngleDot = component.maxAcceptableAngleDot;
   * // `maxAcceptableAngleDot` is `-1`
   */
  maxAcceptableAngleDot: number;

  /**
   * @see [Class: `SpawnAreaComponent`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/SpawnAreaComponent.md)
   * @since v3.0.0
   * @version 1
   *
   * @example
   * import { SpawnAreaComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new SpawnAreaComponent({ version: componentVersion });
   */
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
