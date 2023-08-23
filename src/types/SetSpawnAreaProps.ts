import type { PopulationSpawnAreaComponentProps } from '../components/PopulationSpawnAreaComponent.js';
import type { SpawnAreaComponentProps } from '../components/SpawnAreaComponent.js';

export type SetSpawnAreaProps = Pick<
  PopulationSpawnAreaComponentProps,
  | 'currentPopulation'
  | 'isOneOff'
  | 'isPopulationStarted'
  | 'maxPopulation'
  | 'numberOfSpawnPoints'
  | 'startingPopulation'
> &
  Pick<SpawnAreaComponentProps, 'size'>;
