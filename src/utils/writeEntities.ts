import type { BinaryWriter } from '../BinaryWriter.js';
import type { ATTPrefabName } from '../types/ATTPrefabName.js';
import type { PrefabEntities } from '../types/PrefabEntities.js';

import { terminatorHash } from '../constants.js';

/**
 * Writes given entities to the given `BinaryWriter`.
 *
 * @example
 * import { writeEntities } from 'att-string-transcoder';
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
