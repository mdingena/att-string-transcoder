import type { BinaryReader } from '../BinaryReader.js';
import type { BinaryString } from '../types/BinaryString.js';

import { BinaryWriter } from '../BinaryWriter.js';
import { ComponentHash } from '../types/ComponentHash.js';

import { Component, type ComponentProps } from './Component.js';

type Color = {
  r: number;
  g: number;
  b: number;
  a: number;
};

type Effect = null | {
  hash: number;
  strengthMultiplier: number;
};

type FoodChunk = number;

type CustomData = null | {
  color: Color;
  isConsumableThroughSkin: boolean;
  visualDataHash: number;
  effects: Effect[];
  foodChunks: FoodChunk[];
};

type LiquidContainerComponentPropsV1 = {
  canAddTo?: boolean | undefined;
  canRemoveFrom?: boolean | undefined;
  contentLevel?: number | undefined;
  hasContent?: boolean | undefined;
  isCustom?: boolean | undefined;
  presetHash?: number | undefined;
  customData?: CustomData | undefined;
};

export type LiquidContainerComponentProps = LiquidContainerComponentPropsV1;

/**
 * @see [Class: `LiquidContainerComponent`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/LiquidContainerComponent.md)
 * @since v3.0.0
 * @version 1
 *
 * @example
 * import { LiquidContainerComponent } from 'att-string-transcoder';
 *
 * const componentVersion = 1;
 * const component = new LiquidContainerComponent({ version: componentVersion });
 */
export class LiquidContainerComponent extends Component {
  /**
   * Whether any content can be added to the liquid container or not.
   *
   * @since v1
   *
   * @example
   * import { LiquidContainerComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new LiquidContainerComponent({ version: componentVersion });
   *
   * const canAddTo = component.canAddTo;
   * // `canAddTo` is `false`
   */
  canAddTo: boolean;

  /**
   * Whether any content can be removed from the liquid container or not.
   *
   * @since v1
   *
   * @example
   * import { LiquidContainerComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new LiquidContainerComponent({ version: componentVersion });
   *
   * const canRemoveFrom = component.canRemoveFrom;
   * // `canRemoveFrom` is `false`
   */
  canRemoveFrom: boolean;

  /**
   * The amount of content stored inside the liquid container.
   *
   * @since v1
   *
   * @example
   * import { LiquidContainerComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new LiquidContainerComponent({ version: componentVersion });
   *
   * const contentLevel = component.contentLevel;
   * // `contentLevel` is `0`
   */
  contentLevel: number;

  /**
   * Whether any content is stored in the liquid container or not.
   *
   * @since v1
   *
   * @example
   * import { LiquidContainerComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new LiquidContainerComponent({ version: componentVersion });
   *
   * const hasContent = component.hasContent;
   * // `hasContent` is `false`
   */
  hasContent: boolean;

  /**
   * Whether the content stored in the liquid container is custom or a preset.
   *
   * @since v1
   *
   * @example
   * import { LiquidContainerComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new LiquidContainerComponent({ version: componentVersion });
   *
   * const isCustom = component.isCustom;
   * // `isCustom` is `false`
   */
  isCustom: boolean;

  /**
   * The hash of the preset of the contents stored in the liquid container. Is `0` when no preset is used (uses `CustomData` instead).
   *
   * @since v1
   *
   * @example
   * import { LiquidContainerComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new LiquidContainerComponent({ version: componentVersion });
   *
   * const presetHash = component.presetHash;
   * // `presetHash` is `0`
   */
  presetHash: number;

  /**
   * The data to use as the customised contents of the liquid container.
   *
   * @since v1
   *
   * @example
   * import { LiquidContainerComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new LiquidContainerComponent({ version: componentVersion });
   *
   * const customData = component.customData;
   * // `customData` is `null`
   */
  customData: null | CustomData;

  /**
   * @see [Class: `LiquidContainerComponent`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/LiquidContainerComponent.md)
   * @since v3.0.0
   * @version 1
   *
   * @example
   * import { LiquidContainerComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new LiquidContainerComponent({ version: componentVersion });
   */
  constructor({
    version,
    canAddTo,
    canRemoveFrom,
    contentLevel,
    customData,
    hasContent,
    isCustom,
    presetHash
  }: ComponentProps & LiquidContainerComponentProps) {
    const hash = ComponentHash.LiquidContainer;
    const name = 'LiquidContainer';

    super({ hash, name, version });

    this.canAddTo = canAddTo ?? false;
    this.canRemoveFrom = canRemoveFrom ?? false;
    this.contentLevel = Math.round(contentLevel ?? 0);
    this.hasContent = hasContent ?? (contentLevel ?? 0) > 0;
    this.isCustom = isCustom ?? false;
    this.presetHash = presetHash ?? 0;
    this.customData = customData ?? null;
  }

  static override fromBinary(reader: BinaryReader, version: number): LiquidContainerComponent {
    const props: ComponentProps & LiquidContainerComponentProps = { version };

    /**
     * @property {boolean} canAddTo
     * @since v1
     */
    if (props.version >= 1) {
      props.canAddTo = reader.readBoolean();
    }

    /**
     * @property {boolean} canRemoveFrom
     * @since v1
     */
    if (props.version >= 1) {
      props.canRemoveFrom = reader.readBoolean();
    }

    /**
     * @property {number} contentLevel
     * @since v1
     */
    if (props.version >= 1) {
      props.contentLevel = reader.readSignedInteger();
    }

    /**
     * @property {boolean} hasContent
     * @since v1
     */
    if (props.version >= 1) {
      props.hasContent = reader.readBoolean();
    }

    /**
     * @property {boolean} isCustom
     * @since v1
     */
    if (props.version >= 1) {
      props.isCustom = reader.readBoolean();
    }

    /**
     * @property {number} presetHash
     * @since v1
     */
    if (props.version >= 1) {
      props.presetHash = reader.readUnsignedInteger();
    }

    /**
     * @property {null | CustomData} customData
     * @since v1
     */
    if (props.version >= 1) {
      /**
       * @property {boolean} isNull
       * @since v1
       */
      const isNull = reader.readBoolean();

      if (isNull) {
        props.customData = null;
      } else {
        props.customData = {} as Exclude<CustomData, null>;

        /**
         * @property {Color} color
         * @since v1
         */
        props.customData.color = {
          r: reader.readFloat(),
          g: reader.readFloat(),
          b: reader.readFloat(),
          a: reader.readFloat()
        };

        /**
         * @property {boolean} isConsumableThroughSkin
         * @since v1
         */
        props.customData.isConsumableThroughSkin = reader.readBoolean();

        /**
         * @property {number} visualDataHash
         * @since v1
         */
        props.customData.visualDataHash = reader.readUnsignedInteger();

        /**
         * @property {number} effectsLength
         * @since v1
         */
        const effectsLength = reader.readUnsignedInteger();
        props.customData.effects = [];

        for (let index = 0; index < effectsLength; ++index) {
          /**
           * @property {boolean} isNull
           * @since v1
           */
          const isNull = reader.readBoolean();

          if (isNull) {
            props.customData.effects.push(null);
            continue;
          }

          props.customData.effects.push({
            /**
             * @property {number} hash
             * @since v1
             */
            hash: reader.readUnsignedInteger(),

            /**
             * @property {float} strengthMultiplier
             * @since v1
             */
            strengthMultiplier: reader.readFloat()
          });
        }

        /**
         * @property {number} foodChunksLength
         * @since v1
         */
        const foodChunksLength = reader.readUnsignedInteger();
        props.customData.foodChunks = [];

        for (let index = 0; index < foodChunksLength; ++index) {
          /**
           * @property {number} foodChunkHash
           * @since v1
           */
          props.customData.foodChunks.push(reader.readUnsignedInteger());
        }
      }
    }

    return new LiquidContainerComponent(props);
  }

  override toBinary(version = this.version): BinaryString {
    const writer = new BinaryWriter();

    /**
     * @property {boolean} canAddTo
     * @since v1
     */
    if (version >= 1) {
      writer.writeBoolean(this.canAddTo);
    }

    /**
     * @property {boolean} canRemoveFrom
     * @since v1
     */
    if (version >= 1) {
      writer.writeBoolean(this.canRemoveFrom);
    }

    /**
     * @property {number} contentLevel
     * @since v1
     */
    if (version >= 1) {
      writer.writeSignedInteger(this.contentLevel);
    }

    /**
     * @property {boolean} hasContent
     * @since v1
     */
    if (version >= 1) {
      writer.writeBoolean(this.hasContent);
    }

    /**
     * @property {boolean} isCustom
     * @since v1
     */
    if (version >= 1) {
      writer.writeBoolean(this.isCustom);
    }

    /**
     * @property {number} presetHash
     * @since v1
     */
    if (version >= 1) {
      writer.writeUnsignedInteger(this.presetHash);
    }

    /**
     * @property {null | CustomData} customData
     * @since v1
     */
    if (version >= 1) {
      const isNull = this.customData === null;

      /**
       * @property {boolean} isNull
       * @since v1
       */
      writer.writeBoolean(isNull);

      if (this.customData !== null) {
        /**
         * @property {Color} color
         * @since v1
         */
        writer.writeFloat(this.customData.color.r);
        writer.writeFloat(this.customData.color.g);
        writer.writeFloat(this.customData.color.b);
        writer.writeFloat(this.customData.color.a);

        /**
         * @property {boolean} isConsumableThroughSkin
         * @since v1
         */
        writer.writeBoolean(this.customData.isConsumableThroughSkin);

        /**
         * @property {number} visualDataHash
         * @since v1
         */
        writer.writeUnsignedInteger(this.customData.visualDataHash);

        /**
         * @property {number} effectsLength
         * @since v1
         */
        writer.writeUnsignedInteger(this.customData.effects.length);

        for (const effect of this.customData.effects) {
          const isNull = effect === null;

          /**
           * @property {boolean} isNull
           * @since v1
           */
          writer.writeBoolean(isNull);

          if (!isNull) {
            /**
             * @property {number} hash
             * @since v1
             */
            writer.writeUnsignedInteger(effect.hash);

            /**
             * @property {float} strengthMultiplier
             * @since v1
             */
            writer.writeFloat(effect.strengthMultiplier);
          }
        }

        /**
         * @property {number} foodChunksLength
         * @since v1
         */
        writer.writeUnsignedInteger(this.customData.foodChunks.length);

        for (const foodChunkHash of this.customData.foodChunks) {
          /**
           * @property {number} foodChunkHash
           * @since v1
           */
          writer.writeUnsignedInteger(foodChunkHash);
        }
      }
    }

    return writer.flush();
  }
}
