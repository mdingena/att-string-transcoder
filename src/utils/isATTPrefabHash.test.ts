import { ATTPrefabs } from '../types/ATTPrefabs.js';
import { isATTPrefabHash } from './isATTPrefabHash.js';

describe('isATTPrefabHash()', () => {
  describe('when given a valid prefab hash', () => {
    it('returns true', () => {
      const validHash = ATTPrefabs.Handle_Short.hash;

      const result = isATTPrefabHash(validHash);

      expect(result).toBe(true);
    });
  });

  describe('when given an invalid prefab hash', () => {
    it('returns false', () => {
      const invalidHash = 0;

      const result = isATTPrefabHash(invalidHash);

      expect(result).toBe(false);
    });
  });
});
