import { EmbeddedEntityHash } from '../EmbeddedEntityHash';
import { BinaryReader } from '../utils';
import { decodeComponents, Components } from './decodeComponents';
import { Fire } from '../embeddedEntities';

export type UnknownEmbeddedEntity = {
  hash: number;
  isAlive: boolean;
  components: Components;
};

export type KnownEmbeddedEntity = Fire;

export type EmbeddedEntities = KnownEmbeddedEntity & {
  Unknown?: UnknownEmbeddedEntity[];
  Fire?: Fire;
};

export const decodeEmbeddedEntities = (reader: BinaryReader): EmbeddedEntities => {
  const embeddedEntities: EmbeddedEntities = {
    Unknown: []
  };

  /* Continue looping until we find a zero hash. */
  while (true) {
    /* Get the entity hash. */
    const hash = reader.uInt();

    /* Break if we reached the end of the entities loop. */
    if (hash === 0) break;

    /* Get entity name. */
    const embeddedEntityName = (EmbeddedEntityHash[hash] ?? 'Unknown') as keyof EmbeddedEntities;

    /* Read the entity's data length. */
    reader.uInt();

    /* Check if entity is still alive. */
    const isAlive = reader.boolean();

    /* Get the entity's components. */
    const components = decodeComponents(reader);

    /* Save entity. */
    if (embeddedEntityName === 'Unknown') {
      (embeddedEntities.Unknown as UnknownEmbeddedEntity[]).push({ hash, isAlive, components });
    } else {
      (embeddedEntities[embeddedEntityName] as KnownEmbeddedEntity) = { isAlive, components };
    }
  }

  return embeddedEntities;
};
