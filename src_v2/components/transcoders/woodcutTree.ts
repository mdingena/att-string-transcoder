import { ComponentHash } from '../../ComponentHash';
import { PresetHash } from '../../PresetHash';
import { SpeciesHash } from '../../SpeciesHash';
import { BinaryReader, createBinaryWriter } from '../../utils';

export type WoodcutTree = {
  presetHash?: 0 | PresetHash;
  speciesHash?: SpeciesHash;
};

export const decode = (reader: BinaryReader, version: number): WoodcutTree => {
  const component: WoodcutTree = {};

  if (version >= 3) component.presetHash = reader.uInt();

  if (version >= 3) component.speciesHash = reader.uInt();

  return component;
};

export const encode = ({ presetHash = 0, speciesHash = SpeciesHash.Oak }: WoodcutTree): string => {
  const writer = createBinaryWriter();

  /* Component hash. */
  writer.uInt(ComponentHash.WoodcutTree);
  const hashBits = writer.flush();

  /* Component data. */
  writer.uInt(presetHash);
  writer.uInt(speciesHash);
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
