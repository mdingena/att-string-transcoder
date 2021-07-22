import { ComponentHash } from '../../ComponentHash';
import { BinaryReader, createBinaryWriter } from '../../utils';

export const HASH = ComponentHash.HeatSourceBase;
export const VERSION = 2;

const HUNDRED_YEARS_TICKS = 31557600000000000;

export type Component = {
  isLit?: boolean;
  progress?: number;
  time?: number;
};

export const decode = (reader: BinaryReader): Component => ({
  isLit: reader.boolean(),
  progress: reader.float(),
  time: reader.uLong()
});

export const encode = ({ isLit = true, progress = 0, time = HUNDRED_YEARS_TICKS }: Component): string => {
  const writer = createBinaryWriter();

  /* Component hash. */
  writer.uInt(ComponentHash.HeatSourceBase);
  const hashBits = writer.flush();

  /* Component data. */
  writer.boolean(isLit);
  writer.float(progress);
  writer.uLong(time);
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
