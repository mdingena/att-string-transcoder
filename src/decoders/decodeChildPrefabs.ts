import { BinaryReader } from '../utils';
import { decodePrefab, Prefab } from './decodePrefab';

export type ChildPrefab = {
  parentHash: number;
  prefab: Prefab;
};

export type ChildPrefabs = ChildPrefab[];

export const decodeChildPrefabs = (reader: BinaryReader): ChildPrefab[] => {
  const childPrefabs: ChildPrefab[] = [];

  /* Continue looping until we find a false exists bit. */
  while (true) {
    /* Get the exists bit. */
    const exists = reader.boolean();

    /* Break if we reached the end of the child prefabs loop. */
    if (!exists) break;

    /* Get the parent entity hash. */
    const parentHash = reader.uInt();

    /* Get the child prefab. */
    const prefab = decodePrefab(reader);

    /* Save entity. */
    childPrefabs.push({ parentHash, prefab });
  }

  return childPrefabs;
};
