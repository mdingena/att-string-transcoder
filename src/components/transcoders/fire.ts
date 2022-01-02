import { ComponentHash } from '../../ComponentHash';
import { BinaryReader, createBinaryWriter } from '../../utils';

export type Fire = {
  fuelConsumptionProgress?: number;
};

export const decode = (reader: BinaryReader): Fire => ({
  fuelConsumptionProgress: reader.float()
});

export const encode = ({ fuelConsumptionProgress = 0 }: Fire): string => {
  const writer = createBinaryWriter();

  /* Component hash. */
  writer.uInt(ComponentHash.Fire);
  const hashBits = writer.flush();

  /* Component data. */
  writer.float(fuelConsumptionProgress);
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
