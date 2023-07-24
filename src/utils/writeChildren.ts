import type { BinaryWriter } from '../BinaryWriter.js';
import type { PrefabChild } from '../types/PrefabChild.js';

/**
 * Writes given child prefabs to the given `BinaryWriter`.
 *
 * @example
 * import { BinaryWriter, writeChildren } from 'att-string-transcoder';
 *
 * const writer = new BinaryWriter();
 *
 * const children = [
 *   {
 *     parentHash: 0,
 *     prefab: new Prefab('Guard')
 *   }
 * ];
 *
 * const componentVersions = new Map<number, number>([
 *   [ComponentHash.NetworkRigidbody, 1],
 *   [ComponentHash.PhysicalMaterialPart, 1],
 *   [ComponentHash.Pickup, 2]
 *   // etc...
 * ]);
 *
 * writeChildren(writer, children, componentVersions);
 */
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
