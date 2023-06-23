import type { BinaryReader } from '../BinaryReader.js';
import type { PrefabEntities } from '../types/PrefabEntities.js';
import type { UnknownPrefabEntities } from '../types/UnknownPrefabEntities.js';
import { readEntity } from './readEntity.js';
import { terminatorHash } from '../constants.js';
import { Entity } from '../entities/Entity.js';
import { EntityHash } from '../types/EntityHash.js';

type KnownPrefabEntities = Record<string, Entity>;

export function readEntities(reader: BinaryReader, componentVersions?: Map<number, number>): PrefabEntities {
  const entities = Object.assign({} as KnownPrefabEntities, { Unknown: [] } as UnknownPrefabEntities);

  const isLooping = true;

  while (isLooping) {
    const hash = reader.readUnsignedInteger();

    if (hash === terminatorHash) break;

    const name = EntityHash[hash] ?? 'Unknown';

    const entity = readEntity(reader, hash, name, componentVersions);

    if (entity.name === 'Unknown') {
      entities.Unknown.push(entity);
    } else {
      entities[name] = entity;
    }
  }

  return entities;
}
