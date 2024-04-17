import type { BinaryReader } from '../BinaryReader.js';
import type { ATTPrefabName } from '../types/ATTPrefabName.js';
import type { EntityKey } from '../types/EntityKey.js';
import type { PrefabEntities } from '../types/PrefabEntities.js';

import { Entity } from '../Entity.js';
import { terminatorHash } from '../constants.js';
import { ATTPrefabs } from '../types/ATTPrefabs.js';

/**
 * Reads all entities from the given `BinaryReader` and returns a `PrefabEntities` object.
 *
 * @example
 * import { BinaryReader, readEntities, type ATTPrefabName } from 'att-string-transcoder';
 *
 * const reader = new BinaryReader('...');
 * const prefabName = 'Handle_Short' as ATTPrefabName;
 *
 * const componentVersions = new Map<number, number>([
 *   [ComponentHash.NetworkRigidbody, 1],
 *   [ComponentHash.PhysicalMaterialPart, 1],
 *   [ComponentHash.Pickup, 2]
 *   // etc...
 * ]);
 *
 * const component = readEntities(reader, prefabName, componentVersions);
 */
export function readEntities<TPrefabName extends ATTPrefabName>(
  reader: BinaryReader,
  prefabName: TPrefabName,
  componentVersions?: Map<number, number>
): PrefabEntities<TPrefabName> {
  const entities: PrefabEntities<TPrefabName> = {};

  const isLooping = true;

  while (isLooping) {
    const hash = reader.readUnsignedInteger();

    if (hash === terminatorHash) break;

    /* Get the entity's data length and ignore it. */
    reader.readUnsignedInteger();

    const entity = Object.values<{
      hash: number;
      name: string;
      savables: Record<string, { hash: number; name: string }>;
    }>(ATTPrefabs[prefabName].embedded).find(attPrefabEntity => attPrefabEntity.hash === hash);

    const name = entity?.name ?? 'Unknown';
    const key = `${name}_${hash}` as EntityKey<TPrefabName>;

    entities[key] = Entity.fromBinary<typeof prefabName>(reader, {
      hash,
      key: name === 'Unknown' ? name : (key as string),
      componentVersions
    });
  }

  return entities;
}
