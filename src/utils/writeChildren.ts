import type { BinaryWriter } from '../BinaryWriter.js';
import type { PrefabChild } from '../types/PrefabChild.js';

export function writeChildren(
  writer: BinaryWriter,
  children: PrefabChild[],
  componentVersions: Map<number, number>
): void {
  for (const { parentHash, prefab } of children) {
    /**
     * @property {boolean} hasChild
     */
    writer.writeBoolean(true);

    /**
     * @property {number} parentHash
     */
    writer.writeUnsignedInteger(parentHash);

    /**
     * @property {Prefab} prefab
     */
    const data = prefab.toBinary(componentVersions);
    writer.writeBits(data);
  }

  /**
   * @property {boolean} terminatorBit
   */
  writer.writeBoolean(false);
}
