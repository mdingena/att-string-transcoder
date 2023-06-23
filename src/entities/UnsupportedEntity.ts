import type { BinaryReader } from '../BinaryReader.js';
import type { PrefabComponents } from '../types/PrefabComponents.js';
import { Entity, type EntityProps, type BaseEntityFromBinaryProps } from './Entity.js';

type UnsupportedEntityProps = {
  hash: number;
  name: string;
};

export class UnsupportedEntity extends Entity {
  constructor({ hash, name, isAlive, components }: EntityProps<PrefabComponents> & UnsupportedEntityProps) {
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
