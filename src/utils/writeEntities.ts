import type { BinaryWriter } from '../BinaryWriter.js';
import type { PrefabEntities } from '../types/PrefabEntities.js';
import { terminatorHash } from '../constants.js';

export function writeEntities(
  writer: BinaryWriter,
  entities: PrefabEntities,
  componentVersions: Map<number, number>
): void {
  for (const entity of Object.values(entities)) {
    if (Array.isArray(entity)) {
      for (const unknownEntity of entity) {
        /**
         * @property {Entity} unknownEntity
         */
        unknownEntity.write(writer, componentVersions);
      }
    } else {
      /**
       * @property {Entity} entity
       */
      entity.write(writer, componentVersions);
    }
  }

  /**
   * @property {number} terminatorHash
   */
  writer.writeUnsignedInteger(terminatorHash);
}
