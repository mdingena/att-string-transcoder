import type { BinaryWriter } from '../BinaryWriter.js';
import type { ATTPrefabName } from '../types/ATTPrefabName.js';
import type { PrefabEntities } from '../types/PrefabEntities.js';

import { terminatorHash } from '../constants.js';

/**
 * Writes given entities to the given `BinaryWriter`.
 *
 * @example
 * import { BinaryWriter, Entity, writeEntities } from 'att-string-transcoder';
 *
 * const writer = new BinaryWriter();
 *
 * const entities = {
 *   Fire_30100: new Entity<'Torch'>('Fire_30100')
 * };
 *
 * const componentVersions = new Map<number, number>([
 *   [ComponentHash.NetworkRigidbody, 1],
 *   [ComponentHash.PhysicalMaterialPart, 1],
 *   [ComponentHash.Pickup, 2]
 *   // etc...
 * ]);
 *
 * writeEntities(writer, entities, componentVersions);
 */
export function writeEntities<TPrefabName extends ATTPrefabName>(
  writer: BinaryWriter,
  entities: PrefabEntities<TPrefabName>,
  componentVersions: Map<number, number>
): void {
  for (const entity of Object.values(entities)) {
    /**
     * @property {Entity} entity
     */
    entity.write(writer, componentVersions);
  }

  /**
   * @property {number} terminatorHash
   */
  writer.writeUnsignedInteger(terminatorHash);
}
