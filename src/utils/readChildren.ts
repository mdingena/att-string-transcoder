import type { BinaryReader } from '../BinaryReader.js';
import type { PrefabChild } from '../types/PrefabChild.js';

import { Prefab } from '../Prefab.js';

/**
 * Reads all child prefabs from the given `BinaryReader` and returns an array of `PrefabChild`.
 *
 * @example
 * import { readChildren } from 'att-string-transcoder';
 *
 * const children = readChildren(reader);
 */
export function readChildren(reader: BinaryReader, componentVersions?: Map<number, number>): PrefabChild[] {
  const children: PrefabChild[] = [];

  const isLooping = true;

  while (isLooping) {
    const hasChild = reader.readBoolean();

    if (!hasChild) break;

    const parentHash = reader.readUnsignedInteger();
    const prefab = Prefab.fromBinary(reader, componentVersions);

    children.push({ parentHash, prefab });
  }

  return children;
}
