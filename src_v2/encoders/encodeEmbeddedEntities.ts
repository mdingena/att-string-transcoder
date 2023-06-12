import { EmbeddedEntities, KnownEmbeddedEntity, UnknownEmbeddedEntity } from '../decoders';
import { EmbeddedEntityHash } from '../EmbeddedEntityHash';
import { createBinaryWriter } from '../utils/createBinaryWriter';
import { encodeComponents } from './encodeComponents';

const terminator = '0'.repeat(32);

export const encodeEmbeddedEntities = (entities: EmbeddedEntities = {}): string => {
  const writer = createBinaryWriter();

  for (const [key, value] of Object.entries(entities)) {
    const embeddedEntityName = key as keyof EmbeddedEntities;

    if (embeddedEntityName === 'Unknown') {
      const unknownEmbeddedEntities = value as UnknownEmbeddedEntity[];

      for (const { hash = 0, isAlive = true, components = {} } of unknownEmbeddedEntities) {
        const componentsBits = encodeComponents(components);

        writer.uInt(hash);
        writer.uInt(1 + componentsBits.length);
        writer.boolean(isAlive);
        writer.binary(componentsBits);
      }
    } else {
      const { isAlive = true, components = {} } = value as KnownEmbeddedEntity;
      const componentsBits = encodeComponents(components);

      writer.uInt(EmbeddedEntityHash[embeddedEntityName as keyof typeof EmbeddedEntityHash]);
      writer.uInt(1 + componentsBits.length);
      writer.boolean(isAlive);
      writer.binary(componentsBits);
    }
  }

  const binary = writer.flush();

  return `${binary}${terminator}`;
};
