import { ComponentHash } from '../../ComponentHash';
import { BinaryReader, createBinaryWriter } from '../../utils';

export type Pickup = {
  lastInteractorPlayerId?: number;
};

export const decode = (reader: BinaryReader): Pickup => ({
  lastInteractorPlayerId: reader.int()
});

export const encode = ({ lastInteractorPlayerId = 0 }: Pickup): string => {
  const writer = createBinaryWriter();

  /* Component hash. */
  writer.uInt(ComponentHash.Pickup);
  const hashBits = writer.flush();

  /* Component data. */
  writer.int(lastInteractorPlayerId);
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
