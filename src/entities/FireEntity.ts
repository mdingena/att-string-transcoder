import type { BinaryReader } from '../BinaryReader.js';
import { Entity, type EntityProps } from './Entity.js';
import { FireComponent } from '../components/FireComponent.js';
import { HeatSourceBaseComponent } from '../components/HeatSourceBaseComponent.js';
import { EntityHash } from '../types/EntityHash.js';
import { readComponents } from '../utils/readComponents.js';

export type FireEntityComponents = {
  Fire?: FireComponent;
  HeatSourceBase?: HeatSourceBaseComponent;
};

export class FireEntity extends Entity {
  constructor({ isAlive, components }: EntityProps<FireEntityComponents>) {
    const hash = EntityHash.Fire;
    const name = 'Fire';

    super({ hash, name, isAlive, components: { ...components } });
  }

  static override fromBinary(reader: BinaryReader, componentVersions?: Map<number, number>): FireEntity {
    /**
     * @property {boolean} isAlive
     */
    const isAlive = reader.readBoolean();

    /**
     * @property {PrefabComponents} components
     */
    const components = readComponents(reader, componentVersions);

    return new FireEntity({
      isAlive,
      components
    });
  }
}
