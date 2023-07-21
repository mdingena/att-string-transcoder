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
 * @since v3.0.0
 * @version 1
 */
export class SentGiftComponent extends Component {
  receiverName: string;
  senderName: string;
  gifts: Gift[];
  senderTag: SentGiftTag;

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
