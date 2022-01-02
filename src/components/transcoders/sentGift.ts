import { ComponentHash } from '../../ComponentHash';
import { BinaryReader, createBinaryWriter } from '../../utils';

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

export type SentGift = {
  receiverName?: string;
  senderName?: string;
  gifts?: Gift[];
  senderTag?: SentGiftTag;
};

export const decode = (reader: BinaryReader): SentGift => {
  const receiverName = reader.string();
  const senderName = reader.string();

  /* Get the gifts array. */
  const giftsLength = reader.uInt();
  const gifts: Gift[] = [];

  for (let g = 0; g < giftsLength; ++g) {
    /* Skip gift if is null. */
    const isNull = reader.boolean();
    if (isNull) {
      gifts.push(null);
      continue;
    }

    /* Get the data array. */
    const dataLength = reader.uInt();
    const data: number[] = [];

    for (let d = 0; d < dataLength; ++d) {
      data.push(reader.uInt());
    }

    const messageSizeInBytes = reader.uInt();
    const hash = reader.uInt();

    /* Get the chunkVersioning array. */
    const chunkVersioningLength = reader.uInt();
    const chunkVersioning: number[] = [];

    for (let c = 0; c < chunkVersioningLength; ++c) {
      chunkVersioning.push(reader.uInt());
    }

    gifts.push({
      data,
      messageSizeInBytes,
      hash,
      chunkVersioning
    });
  }

  const senderTagIsNull = reader.boolean();

  const senderTag: SentGiftTag = senderTagIsNull
    ? null
    : {
        from: reader.int(),
        to: reader.int()
      };

  const result: SentGift = {
    receiverName,
    senderName,
    gifts,
    senderTag
  };

  return result;
};

export const encode = ({ receiverName = '', senderName = '', gifts = [], senderTag = null }: SentGift): string => {
  const writer = createBinaryWriter();

  /* Component hash. */
  writer.uInt(ComponentHash.SentGift);
  const hashBits = writer.flush();

  /* Component data. */
  writer.string(receiverName);
  writer.string(senderName);
  writer.uInt(gifts.length);

  for (const gift of gifts) {
    if (gift === null) {
      writer.boolean(true); // isNull bit
    } else {
      writer.boolean(false); // isNull bit
      writer.uInt(gift.data.length);

      for (const d of gift.data) writer.uInt(d);

      writer.uInt(gift.messageSizeInBytes);
      writer.uInt(gift.hash);
      writer.uInt(gift.chunkVersioning.length);

      for (const c of gift.chunkVersioning) writer.uInt(c);
    }
  }

  if (senderTag === null) {
    writer.boolean(true); // isNull bit
  } else {
    writer.boolean(false); // isNull bit
    writer.int(senderTag.from);
    writer.int(senderTag.to);
  }

  const dataBits = writer.flush();

  /* Component data length. */
  writer.uInt(dataBits.length);
  const sizeBits = writer.flush();

  /* Return encoded component. */
  writer.binary(hashBits);
  writer.binary(sizeBits);
  writer.binary(dataBits);

  return writer.flush();
};
