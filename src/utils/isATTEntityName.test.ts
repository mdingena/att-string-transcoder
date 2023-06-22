import { isATTEntityName } from './isATTEntityName.js';
import { ATTPrefabs } from '../types/ATTPrefabs.js';

describe('isATTEntityName()', () => {
  describe('when given a valid entity name', () => {
    it('returns true', () => {
      const validName = ATTPrefabs.Handle_Short.embedded.Handle_Short_42104.name;

      const result = isATTEntityName(validName);

      expect(result).toBe(true);
    });
  });

  describe('when given an invalid entity name', () => {
    it('returns false', () => {
      const invalidName = 'topkek';

      const result = isATTEntityName(invalidName);

      expect(result).toBe(false);
    });
  });
});
