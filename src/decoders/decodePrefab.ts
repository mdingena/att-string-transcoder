import { BinaryReader } from '../utils';
import { decodePrefabObject, PrefabObject } from './decodePrefabObject';
import { decodeComponents, Components } from './decodeComponents';
import { decodeEmbeddedEntities, EmbeddedEntities } from './decodeEmbeddedEntities';
import { decodeChildPrefabs, ChildPrefabs } from './decodeChildPrefabs';

export type Prefab = {
  prefabObject: PrefabObject;
  components?: Components;
  embeddedEntities?: EmbeddedEntities;
  childPrefabs?: ChildPrefabs;
};

export const decodePrefab = (reader: BinaryReader): Prefab => {
  const prefabObject = decodePrefabObject(reader);
  const components = decodeComponents(reader);
  const embeddedEntities = decodeEmbeddedEntities(reader);
  const childPrefabs = decodeChildPrefabs(reader);

  return {
    prefabObject,
    components,
    embeddedEntities,
    childPrefabs
  };
};
