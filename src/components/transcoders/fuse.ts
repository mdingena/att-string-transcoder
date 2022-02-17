import { ComponentHash } from '../../ComponentHash';
import { BinaryReader, createBinaryWriter } from '../../utils';

export type Fuse = {
  isFinished?: boolean;
  isLit?: boolean;
  currentFuseAmount?: number;
};

export const decode = (reader: BinaryReader, version: number): Fuse => {
  const component: Fuse = {};

  if (version >= 1) component.isFinished = reader.boolean();

  if (version >= 1) component.isLit = reader.boolean();

  if (version >= 1) component.currentFuseAmount = reader.float();

  return component;
};

export const encode = ({ isFinished = false, isLit = false, currentFuseAmount = 1 }: Fuse): string => {
  const writer = createBinaryWriter();

  /* Component hash. */
  writer.uInt(ComponentHash.Fuse);
  const hashBits = writer.flush();

  /* Component data. */
  writer.boolean(isFinished);
  writer.boolean(isLit);
  writer.float(currentFuseAmount);
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
