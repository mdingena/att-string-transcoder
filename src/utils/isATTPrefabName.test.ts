import { ATTPrefabs } from '../types/ATTPrefabs.js';
import { isATTPrefabName } from './isATTPrefabName.js';

describe('isATTPrefabName()', () => {
  describe('when given a valid prefab name', () => {
    it('returns true', () => {
      const validName = ATTPrefabs.Handle_Short.name;

      const result = isATTPrefabName(validName);

      expect(result).toBe(true);
    });
  });

  describe('when given an invalid prefab name', () => {
    it('returns true', () => {
      const invalidName = 'topkek';

      const result = isATTPrefabName(invalidName);

      expect(result).toBe(false);
    });
  });
});
