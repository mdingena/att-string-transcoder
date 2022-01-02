import { ComponentHash } from '../../ComponentHash';
import { BinaryReader, createBinaryWriter } from '../../utils';

export type Fuse = {
  isFinished?: boolean;
  isLit?: boolean;
  currentFuseAmount?: number;
};

export const decode = (reader: BinaryReader): Fuse => ({
  isFinished: reader.boolean(),
  isLit: reader.boolean(),
  currentFuseAmount: reader.float()
});

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
