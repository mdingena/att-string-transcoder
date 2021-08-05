import { ComponentHash } from '../../ComponentHash';
import { PhysicalMaterialPartHash } from '../../PhysicalMaterialPartHash';
import { BinaryReader, createBinaryWriter } from '../../utils';

export type PhysicalMaterialPart = {
  materialHash?: number;
};

export const decode = (reader: BinaryReader): PhysicalMaterialPart => ({
  materialHash: reader.uInt()
});

export const encode = ({ materialHash = PhysicalMaterialPartHash.Iron }: PhysicalMaterialPart): string => {
  const writer = createBinaryWriter();

  /* Component hash. */
  writer.uInt(ComponentHash.PhysicalMaterialPart);
  const hashBits = writer.flush();

  /* Component data. */
  writer.uInt(materialHash);
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
