import { ChildPrefabs } from '../decoders';
import { createBinaryWriter } from '../utils/createBinaryWriter';
import { encodePrefab } from '.';

export const encodeChildPrefabs = (childPrefabs: ChildPrefabs = []): string => {
  const writer = createBinaryWriter();

  for (const childPrefab of childPrefabs) {
    writer.boolean(true); // exists bit
    writer.uInt(childPrefab.parentHash);

    const childPrefabBits = encodePrefab(childPrefab.prefab);
    writer.binary(childPrefabBits);
  }

  writer.boolean(false); // exists bit (terminator)

  return writer.flush();
};
