import { Component } from '../components/Component.js';
import { NetworkRigidbodyComponent } from '../components/NetworkRigidbodyComponent.js';
import { isUnknownComponent } from './isUnknownComponent.js';

describe('isUnknownComponent()', () => {
  describe('when given a known component', () => {
    it('returns false', () => {
      const knownComponent = new NetworkRigidbodyComponent({ version: 1 });

      const result = isUnknownComponent(knownComponent);

      expect(result).toBe(false);
    });
  });

  describe('when given an unknown component', () => {
    it('returns true', () => {
      const unknownComponent = new Component({ hash: 0, name: 'Unknown', version: 1 });

      const result = isUnknownComponent(unknownComponent);

      expect(result).toBe(true);
    });
  });
});
