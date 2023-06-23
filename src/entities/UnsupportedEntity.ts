import type { BinaryReader } from '../BinaryReader.js';
import type { SupportedPrefabComponents } from '../types/SupportedPrefabComponents.js';
import type { UnknownPrefabComponents } from '../types/UnknownPrefabComponents.js';
import type { UnsupportedPrefabComponents } from '../types/UnsupportedPrefabComponents.js';
import { Entity, type EntityProps, type BaseEntityFromBinaryProps } from './Entity.js';

type UnsupportedEntityProps = {
  hash: number;
  name: string;
};

export class UnsupportedEntity extends Entity {
  constructor({
    hash,
    name,
    isAlive,
    components
  }: EntityProps<SupportedPrefabComponents & UnsupportedPrefabComponents & Partial<UnknownPrefabComponents>> &
    UnsupportedEntityProps) {
    super({ hash, name, isAlive, components: { ...components } });
  }

  static override fromBinary(reader: BinaryReader, unsupportedProps: BaseEntityFromBinaryProps): UnsupportedEntity {
    const baseEntity = super.fromBinary(reader, unsupportedProps);

    /* Reinstantiate Entity as UnsupportedEntity. */
    return new UnsupportedEntity({
      hash: baseEntity.hash,
      name: baseEntity.name,
      isAlive: baseEntity.isAlive,
      components: baseEntity.components
    });
  }
}
