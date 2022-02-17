import { BinaryReader, VersionMap } from '../utils';
import { decodePrefabObject, PrefabObject } from './decodePrefabObject';
import { decodeComponents, Components } from './decodeComponents';
import { decodeEmbeddedEntities, EmbeddedEntities } from './decodeEmbeddedEntities';
import { decodeChildPrefabs, ChildPrefabs } from './decodeChildPrefabs';

export type PrefabData = {
  prefabObject: PrefabObject;
  components?: Components;
  embeddedEntities?: EmbeddedEntities;
  childPrefabs?: ChildPrefabs;
};

export const decodePrefab = (reader: BinaryReader, versions: VersionMap): PrefabData => {
  const prefabObject = decodePrefabObject(reader);
  const components = decodeComponents(reader, versions);
  const embeddedEntities = decodeEmbeddedEntities(reader, versions);
  const childPrefabs = decodeChildPrefabs(reader, versions);

  return {
    prefabObject,
    components,
    embeddedEntities,
    childPrefabs
  };
};
