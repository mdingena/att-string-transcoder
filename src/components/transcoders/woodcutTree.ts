import { ComponentHash } from '../../ComponentHash';
import { PresetHash } from '../../PresetHash';
import { SpeciesHash } from '../../SpeciesHash';
import { BinaryReader, createBinaryWriter } from '../../utils';

export const HASH = ComponentHash.WoodcutTree;
export const VERSION = 3;

export type Component = {
  presetHash?: 0 | PresetHash;
  speciesHash?: SpeciesHash;
};

export const decode = (reader: BinaryReader): Component => ({
  presetHash: reader.uInt(),
  speciesHash: reader.uInt()
});

export const encode = ({ presetHash = 0, speciesHash = SpeciesHash.Oak }: Component): string => {
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
