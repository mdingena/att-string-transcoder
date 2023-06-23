import type { BinaryReader } from '../BinaryReader.js';
import { Entity } from '../entities/Entity.js';
import { UnsupportedEntity } from '../entities/UnsupportedEntity.js';
import { supportedEntities } from '../supportedEntities.js';

export function readEntity(
  reader: BinaryReader,
  hash: number,
  name: string,
  componentVersions?: Map<number, number>
): Entity {
  /* Get the entity's data length and ignore it. */
  reader.readUnsignedInteger();

  /* Get the entity's class. */
  const SupportedEntity = supportedEntities[name];

  /* Create an entity instance from the binary data string. */
  if (typeof SupportedEntity === 'undefined') {
    return UnsupportedEntity.fromBinary(reader, { hash, name, componentVersions });
  } else {
    return SupportedEntity.fromBinary(reader, componentVersions);
  }
}
