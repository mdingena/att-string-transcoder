import { ComponentHash } from '../../ComponentHash';
import { BinaryReader, createBinaryWriter } from '../../utils';

const HUNDRED_YEARS_TICKS = 31557600000000000;

export type BasicDecay = {
  isDisabled?: boolean;
  timelineEntry?: number;
};

export const decode = (reader: BinaryReader): BasicDecay => ({
  isDisabled: reader.boolean(),
  timelineEntry: reader.uLong()
});

export const encode = ({ isDisabled = true, timelineEntry = HUNDRED_YEARS_TICKS }: BasicDecay): string => {
  const writer = createBinaryWriter();

  /* Component hash. */
  writer.uInt(ComponentHash.BasicDecay);
  const hashBits = writer.flush();

  /* Component data. */
  writer.boolean(isDisabled);
  writer.uLong(timelineEntry);
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
