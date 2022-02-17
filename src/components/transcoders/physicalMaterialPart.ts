import { ComponentHash } from '../../ComponentHash';
import { PhysicalMaterialPartHash } from '../../PhysicalMaterialPartHash';
import { BinaryReader, createBinaryWriter } from '../../utils';

export type PhysicalMaterialPart = {
  materialHash?: number;
};

export const decode = (reader: BinaryReader, version: number): PhysicalMaterialPart => {
  const component: PhysicalMaterialPart = {};

  if (version >= 1) component.materialHash = reader.uInt();

  return component;
};

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
