import { ComponentHash } from '../../ComponentHash';
import { BinaryReader, createBinaryWriter } from '../../utils';

const HUNDRED_YEARS_TICKS = 31557600000000000;

export type HeatSourceBase = {
  isLit?: boolean;
  progress?: number;
  time?: number;
};

export const decode = (reader: BinaryReader, version: number): HeatSourceBase => {
  const component: HeatSourceBase = {};

  if (version >= 1) component.isLit = reader.boolean();

  if (version >= 1) component.progress = reader.float();

  if (version >= 1) component.time = reader.uLong();

  return component;
};

export const encode = ({ isLit = true, progress = 0, time = HUNDRED_YEARS_TICKS }: HeatSourceBase): string => {
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
