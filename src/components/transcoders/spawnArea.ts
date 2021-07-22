import { ComponentHash } from '../../ComponentHash';
import { BinaryReader, createBinaryWriter } from '../../utils';

export const HASH = ComponentHash.SpawnArea;
export const VERSION = 1;

export type Component = {
  size?: number;
  groundLayers?: number;
  avoidLayers?: number;
  isAligningNormal?: boolean;
  maxAcceptableAngleDot?: number;
};

export const decode = (reader: BinaryReader): Component => ({
  size: reader.float(),
  groundLayers: reader.int(),
  avoidLayers: reader.int(),
  isAligningNormal: reader.boolean(),
  maxAcceptableAngleDot: reader.float()
});

export const encode = ({
  size = 5,
  groundLayers = 1280,
  avoidLayers = 8721,
  isAligningNormal = false,
  maxAcceptableAngleDot = -1
}: Component): string => {
  const writer = createBinaryWriter();

  /* Component hash. */
  writer.uInt(ComponentHash.SpawnArea);
  const hashBits = writer.flush();

  /* Component data. */
  writer.float(size);
  writer.int(groundLayers);
  writer.int(avoidLayers);
  writer.boolean(isAligningNormal);
  writer.float(maxAcceptableAngleDot);
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
