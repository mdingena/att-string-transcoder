import { PrefabObject } from '../decoders';
import { createBinaryWriter } from '../utils';

export const encodePrefabObject = ({
  hash,
  position = { x: 0, y: 0, z: 0 },
  rotation = { x: 0, y: 0, z: 0, w: 1 },
  scale = 1
}: PrefabObject): string => {
  const writer = createBinaryWriter();

  /* Prefab object hash. */
  writer.uInt(hash);

  /* Prefab object data. */
  writer.float(position.x);
  writer.float(position.y);
  writer.float(position.z);
  writer.float(rotation.x);
  writer.float(rotation.y);
  writer.float(rotation.z);
  writer.float(rotation.w);
  writer.float(scale);

  return writer.flush();
};
