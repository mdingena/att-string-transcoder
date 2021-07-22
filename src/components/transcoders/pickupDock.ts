import { ComponentHash } from '../../ComponentHash';
import { BinaryReader, createBinaryWriter } from '../../utils';

export const HASH = ComponentHash.PickupDock;
export const VERSION = 2;

export type Component = {
  dockedTypeHash?: number;
  quantity?: number;
  childIndex?: number;
};

export const decode = (reader: BinaryReader): Component => ({
  dockedTypeHash: reader.uInt(),
  quantity: reader.int(),
  childIndex: reader.int()
});

export const encode = ({ dockedTypeHash = 0, quantity = 1, childIndex = 0 }: Component): string => {
  const writer = createBinaryWriter();

  /* Component hash. */
  writer.uInt(ComponentHash.PickupDock);
  const hashBits = writer.flush();

  /* Component data. */
  writer.uInt(dockedTypeHash);
  writer.int(quantity);
  writer.int(childIndex);

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
