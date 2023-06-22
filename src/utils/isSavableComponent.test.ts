import { ATTPrefabs } from '../types/ATTPrefabs.js';
import { isSavableComponent } from './isSavableComponent.js';

describe('isSavableComponent()', () => {
  describe('when given a valid component name on a corresponding prefab hash', () => {
    it('returns true', () => {
      const validComponentName = ATTPrefabs.Potion_Medium.embedded.Potion_Medium_23646.savables.Pickup.name;
      const correspondingPrefabHash = ATTPrefabs.Potion_Medium.hash;

      const result = isSavableComponent(validComponentName, correspondingPrefabHash);

      expect(result).toBe(true);
    });
  });

  describe('when given a valid component name on a corresponding prefab name', () => {
    it('returns true', () => {
      const validComponentName = ATTPrefabs.Potion_Medium.embedded.Potion_Medium_23646.savables.Pickup.name;
      const correspondingPrefabName = ATTPrefabs.Potion_Medium.name;

      const result = isSavableComponent(validComponentName, correspondingPrefabName);

      expect(result).toBe(true);
    });
  });

  describe('when given a valid component name on a prefab name that does not correspond to the component', () => {
    it('returns false', () => {
      const validComponentName = ATTPrefabs.Potion_Medium.embedded.Potion_Medium_23646.savables.Pickup.name;
      const nonCorrespondingPrefabName = ATTPrefabs.Anvil.name;

      const result = isSavableComponent(validComponentName, nonCorrespondingPrefabName);

      expect(result).toBe(false);
    });
  });
});
