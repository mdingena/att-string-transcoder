import type { BinaryReader } from '../BinaryReader.js';
import type { PrefabChild } from '../types/PrefabChild.js';
import { Prefab } from '../Prefab.js';

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
