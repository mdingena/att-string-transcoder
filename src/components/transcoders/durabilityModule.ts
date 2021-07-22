import { ComponentHash } from '../../ComponentHash';
import { BinaryReader, createBinaryWriter } from '../../utils';

export const HASH = ComponentHash.DurabilityModule;
export const VERSION = 1;

export type Component = {
  integrity?: number;
};

export const decode = (reader: BinaryReader): Component => ({
  integrity: reader.float()
});

export const encode = ({ integrity = 1 }: Component): string => {
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
