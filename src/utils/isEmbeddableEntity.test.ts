import { ATTPrefabs } from '../types/ATTPrefabs.js';
import { isEmbeddableEntity } from './isEmbeddableEntity.js';

describe('isEmbeddableEntity()', () => {
  describe('when given a valid entity name on a corresponding prefab hash', () => {
    it('returns true', () => {
      const validEntityName = ATTPrefabs.Handle_Short.embedded.Handle_Short_42104.name;
      const correspondingPrefabHash = ATTPrefabs.Handle_Short.hash;

      const result = isEmbeddableEntity(validEntityName, correspondingPrefabHash);

      expect(result).toBe(true);
    });
  });

  describe('when given a valid entity name on a corresponding prefab name', () => {
    it('returns true', () => {
      const validEntityName = ATTPrefabs.Handle_Short.embedded.Handle_Short_42104.name;
      const correspondingPrefabName = ATTPrefabs.Handle_Short.name;

      const result = isEmbeddableEntity(validEntityName, correspondingPrefabName);

      expect(result).toBe(true);
    });
  });

  describe('when given a valid entity name on a prefab name that does not correspond to the embedded entity', () => {
    it('returns false', () => {
      const validEntityName = ATTPrefabs.Handle_Short.embedded.Handle_Short_42104.name;
      const nonCorrespondingPrefabName = ATTPrefabs.Guard.name;

      const result = isEmbeddableEntity(validEntityName, nonCorrespondingPrefabName);

      expect(result).toBe(false);
    });
  });
});
