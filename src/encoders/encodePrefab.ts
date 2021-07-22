import { Prefab } from '../decoders';
import { createBinaryWriter } from '../utils/createBinaryWriter';
import { encodePrefabObject, encodeComponents, encodeEmbeddedEntities, encodeChildPrefabs } from '.';

export const encodePrefab = (prefab: Prefab): string => {
  const writer = createBinaryWriter();

  /* Create prefab object. */
  const prefabObjectBits = encodePrefabObject(prefab.prefabObject);
  writer.binary(prefabObjectBits);

  /* Create components. */
  const componentsBits = encodeComponents(prefab.components);
  writer.binary(componentsBits);

  /* Create embedded entities. */
  const embeddedEntitiesBits = encodeEmbeddedEntities(prefab.embeddedEntities);
  writer.binary(embeddedEntitiesBits);

  /* Create child prefabs. */
  const childPrefabsBits = encodeChildPrefabs(prefab.childPrefabs);
  writer.binary(childPrefabsBits);

  return writer.flush();
};
