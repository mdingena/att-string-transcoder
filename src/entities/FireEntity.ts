import { Entity, type EntityProps } from './Entity.js';
import { FireComponent } from '../components/FireComponent.js';
import { HeatSourceBaseComponent } from '../components/HeatSourceBaseComponent.js';
import { EntityHash } from '../types/EntityHash.js';

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
}
