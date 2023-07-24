import type { BinaryReader } from '../BinaryReader.js';
import type { BinaryString } from '../types/BinaryString.js';

import { BinaryWriter } from '../BinaryWriter.js';
import { ComponentHash } from '../types/ComponentHash.js';

import { Component, type ComponentProps } from './Component.js';

type Gift = null | {
  data: number[];
  messageSizeInBytes: number;
  hash: number;
  chunkVersioning: number[];
};

type SentGiftTag = null | {
  from: number;
  to: number;
};

type SentGiftComponentPropsV1 = {
  receiverName?: string | undefined;
  senderName?: string | undefined;
  gifts?: Gift[] | undefined;
  senderTag?: SentGiftTag | undefined;
};

export type SentGiftComponentProps = SentGiftComponentPropsV1;

/**
 * @see [Class: `SentGiftComponent`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/SentGiftComponent.md)
 * @since v3.0.0
 * @version 1
 *
 * @example
 * import { SentGiftComponent } from 'att-string-transcoder';
 *
 * const componentVersion = 1;
 * const component = new SentGiftComponent({ version: componentVersion });
 */
export class SentGiftComponent extends Component {
  /**
   * Name of the player intended as the receiver of the prefab this component is attached to.
   *
   * @since v1
   *
   * @example
   * import { SentGiftComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new SentGiftComponent({ version: componentVersion });
   *
   * const receiverName = component.receiverName;
   * // `receiverName` is `''`
   */
  receiverName: string;

  /**
   * Name of the player intended as the sender of the prefab this component is attached to. This name will be displayed as a label on a gift box prefab.
   *
   * @since v1
   *
   * @example
   * import { SentGiftComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new SentGiftComponent({ version: componentVersion });
   *
   * const senderName = component.senderName;
   * // `senderName` is `''`
   */
  senderName: string;

  /**
   * Array of gifts, which are prefab save strings.
   *
   * @since v1
   *
   * @example
   * import { SentGiftComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new SentGiftComponent({ version: componentVersion });
   *
   * const gifts = component.gifts;
   * // `gifts` is `[]`
   */
  gifts: Gift[];

  /**
   * @since v1
   *
   * @example
   * import { SentGiftComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new SentGiftComponent({ version: componentVersion });
   *
   * const senderTag = component.senderTag;
   * // `senderTag` is `null`
   */
  senderTag: SentGiftTag;

  /**
   * @see [Class: `SentGiftComponent`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/SentGiftComponent.md)
   * @since v3.0.0
   * @version 1
   *
   * @example
   * import { SentGiftComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new SentGiftComponent({ version: componentVersion });
   */
  constructor({ version, receiverName, senderName, gifts, senderTag }: ComponentProps & SentGiftComponentProps) {
    const hash = ComponentHash.SentGift;
    const name = 'SentGift';

    super({ hash, name, version });

    this.receiverName = receiverName ?? '';
    this.senderName = senderName ?? '';
    this.gifts = gifts ?? [];
    this.senderTag = senderTag ?? null;
  }

  static override fromBinary(reader: BinaryReader, version: number): SentGiftComponent {
    const props: ComponentProps & SentGiftComponentProps = { version };

    /**
     * @property {string} receiverName
     * @since v1
     */
    if (props.version >= 1) {
      props.receiverName = reader.readString();
    }

    /**
     * @property {string} senderName
     * @since v1
     */
    if (props.version >= 1) {
      props.senderName = reader.readString();
    }

    /**
     * @property {Gift[]} gifts
     * @since v1
     */
    if (props.version >= 1) {
      const giftsLength = reader.readUnsignedInteger();
      props.gifts = [];

      for (let index = 0; index < giftsLength; ++index) {
        /**
         * @property {boolean} isNull
         * @since v1
         */
        const isNull = reader.readBoolean();

        if (isNull) {
          props.gifts.push(null);
          continue;
        }

        /**
         * @property {number[]} data
         * @since v1
         */
        const dataLength = reader.readUnsignedInteger();
        const data: number[] = [];

        for (let dataIndex = 0; dataIndex < dataLength; ++dataIndex) {
          /**
           * @property {number} data
           * @since v1
           */
          data.push(reader.readUnsignedInteger());
        }

        /**
         * @property {number} messageSizeInBytes
         * @since v1
         */

        const messageSizeInBytes = reader.readUnsignedInteger();

        /**
         * @property {number} hash
         * @since v1
         */
        const hash = reader.readUnsignedInteger();

        /**
         * @property {number[]} chunkVersioning
         * @since v1
         */
        const chunkVersioningLength = reader.readUnsignedInteger();
        const chunkVersioning: number[] = [];

        for (let chunkVersioningIndex = 0; chunkVersioningIndex < chunkVersioningLength; ++chunkVersioningIndex) {
          /**
           * @property {number} chunkVersioning
           * @since v1
           */
          chunkVersioning.push(reader.readUnsignedInteger());
        }

        props.gifts.push({
          data,
          messageSizeInBytes,
          hash,
          chunkVersioning
        });
      }
    }

    /**
     * @property {SentGiftTag} senderTag
     * @since v1
     */
    if (props.version >= 1) {
      /**
       * @property {boolean} isNull
       * @since v1
       */
      const isNull = reader.readBoolean();

      props.senderTag = isNull
        ? null
        : {
            /**
             * @property {number} from
             * @since v1
             */
            from: reader.readSignedInteger(),

            /**
             * @property {number} to
             * @since v1
             */
            to: reader.readSignedInteger()
          };
    }

    return new SentGiftComponent(props);
  }

  override toBinary(version = this.version): BinaryString {
    const writer = new BinaryWriter();

    /**
     * @property {string} receiverName
     * @since v1
     */
    if (version >= 1) {
      writer.writeString(this.receiverName);
    }

    /**
     * @property {string} senderName
     * @since v1
     */
    if (version >= 1) {
      writer.writeString(this.senderName);
    }

    /**
     * @property {Gift[]} gifts
     * @since v1
     */
    if (version >= 1) {
      writer.writeUnsignedInteger(this.gifts.length);

      for (const gift of this.gifts) {
        const isNull = gift === null;

        /**
         * @property {boolean} isNull
         * @since v1
         */
        writer.writeBoolean(isNull);

        if (!isNull) {
          /**
           * @property {number[]} data
           * @since v1
           */
          writer.writeUnsignedInteger(gift.data.length);

          for (const data of gift.data) {
            /**
             * @property {number} data
             * @since v1
             */
            writer.writeUnsignedInteger(data);
          }

          /**
           * @property {number} messageSizeInBytes
           * @since v1
           */
          writer.writeUnsignedInteger(gift.messageSizeInBytes);

          /**
           * @property {number} hash
           * @since v1
           */
          writer.writeUnsignedInteger(gift.hash);

          /**
           * @property {number[]} chunkVersioning
           * @since v1
           */
          writer.writeUnsignedInteger(gift.chunkVersioning.length);

          for (const chunk of gift.chunkVersioning) {
            /**
             * @property {number} chunkVersioning
             * @since v1
             */
            writer.writeUnsignedInteger(chunk);
          }
        }
      }
    }

    /**
     * @property {SentGiftTag} senderTag
     * @since v1
     */
    if (version >= 1) {
      const isNull = this.senderTag === null;

      /**
       * @property {boolean} isNull
       * @since v1
       */
      writer.writeBoolean(isNull);

      if (this.senderTag !== null) {
        /**
         * @property {number} from
         * @since v1
         */
        writer.writeSignedInteger(this.senderTag.from);

        /**
         * @property {number} to
         * @since v1
         */
        writer.writeSignedInteger(this.senderTag.to);
      }
    }

    return writer.flush();
  }
}
