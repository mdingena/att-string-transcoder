import type { BinaryWriter } from '../BinaryWriter.js';
import type { ATTPrefabName } from '../types/ATTPrefabName.js';
import type { PrefabEntities } from '../types/PrefabEntities.js';

import { terminatorHash } from '../constants.js';

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
