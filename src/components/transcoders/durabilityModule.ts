import { ComponentHash } from '../../ComponentHash';
import { BinaryReader, createBinaryWriter } from '../../utils';

export type DurabilityModule = {
  integrity?: number;
};

export const decode = (reader: BinaryReader): DurabilityModule => ({
  integrity: reader.float()
});

export const encode = ({ integrity = 1 }: DurabilityModule): string => {
  const writer = createBinaryWriter();

  /* Component hash. */
  writer.uInt(ComponentHash.DurabilityModule);
  const hashBits = writer.flush();

  /* Component data. */
  writer.float(integrity);
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
