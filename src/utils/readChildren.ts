import type { BinaryReader } from '../BinaryReader.js';
import type { PrefabChild } from '../types/PrefabChild.js';

import { Prefab } from '../Prefab.js';

/**
 * Reads all child prefabs from the given `BinaryReader` and returns an array of `PrefabChild`.
 *
 * @example
 * import { BinaryReader, readChildren } from 'att-string-transcoder';
 *
 * const reader = new BinaryReader('...');
 *
 * const componentVersions = new Map<number, number>([
 *   [ComponentHash.NetworkRigidbody, 1],
 *   [ComponentHash.PhysicalMaterialPart, 1],
 *   [ComponentHash.Pickup, 2]
 *   // etc...
 * ]);
 *
 * const children = readChildren(reader, componentVersions);
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
