import { readComponent } from './readComponent.js';
import { Component } from '../components/Component.js';
import { NetworkRigidbodyComponent } from '../components/NetworkRigidbodyComponent.js';
import { UnsupportedComponent } from '../components/UnsupportedComponent.js';
import { BinaryData } from '../BinaryData.js';
import { BinaryReader } from '../BinaryReader.js';
import { Prefab } from '../Prefab.js';
import { BinaryString } from '../types/BinaryString.js';
import { ComponentHash } from '../types/ComponentHash.js';

describe('readComponent()', () => {
  describe('when reading a supported component', () => {
    let fastForwardedReader: BinaryReader;
    const componentHash = ComponentHash.NetworkRigidbody;
    const componentName = 'NetworkRigidbody';
    const componentVersion = 1;
    const prefab = new Prefab('Handle_Short', {
      components: {
        NetworkRigidbody: new NetworkRigidbodyComponent({
          version: componentVersion,
          isKinematic: true,
          velocity: { x: 1337, y: 420, z: 69 }
        })
      }
    });

    beforeEach(() => {
      const saveString = prefab.toSaveString();
      const [dataString] = saveString.split('|');

      if (typeof dataString === 'undefined') {
        throw new Error('Invalid test data.');
      }

      const unsignedIntegers = dataString.split(',').map(Number);

      const data = BinaryData.fromUnsignedIntegerArray(unsignedIntegers);
      const reader = new BinaryReader(data.toBinaryString());

      reader.readUnsignedInteger(); // Root prefab hash.
      reader.readUnsignedInteger(); // SaveString bytes.
      reader.readUnsignedInteger(); // Parent prefab hash.
      reader.readFloat(); // Parent position X.
      reader.readFloat(); // Parent position Y.
      reader.readFloat(); // Parent position Z.
      reader.readFloat(); // Parent rotation X.
      reader.readFloat(); // Parent rotation Y.
      reader.readFloat(); // Parent rotation Z.
      reader.readFloat(); // Parent rotation W.
      reader.readFloat(); // Parent scale.

      fastForwardedReader = reader;
    });

    it('returns a Component', () => {
      const hash = fastForwardedReader.readUnsignedInteger();

      if (hash !== componentHash) {
        throw new Error('Invalid test data.');
      }

      const component = readComponent(fastForwardedReader, componentHash, componentName, componentVersion);

      expect(component).toBeInstanceOf(Component);
      expect(component).toBeInstanceOf(NetworkRigidbodyComponent);
      expect(component.hash).toStrictEqual(componentHash);
      expect(component.name).toStrictEqual(componentName);
      expect((component as NetworkRigidbodyComponent).isKinematic).toBe(true);
      expect((component as NetworkRigidbodyComponent).velocity).toStrictEqual({ x: 1337, y: 420, z: 69 });
    });
  });

  describe('when reading an unsupported component', () => {
    let fastForwardedReader: BinaryReader;
    const componentHash = ComponentHash.RandomSpawnRectangle;
    const componentName = 'RandomSpawnRectangle';
    const componentVersion = 1;
    const prefab = new Prefab('Handle_Short', {
      components: {
        RandomSpawnRectangle: new UnsupportedComponent({
          hash: componentHash,
          name: componentName,
          version: componentVersion,
          rawData: '00000001001101111111' as BinaryString
        })
      }
    });

    beforeEach(() => {
      const saveString = prefab.toSaveString();
      const [dataString] = saveString.split('|');

      if (typeof dataString === 'undefined') {
        throw new Error('Invalid test data.');
      }

      const unsignedIntegers = dataString.split(',').map(Number);

      const data = BinaryData.fromUnsignedIntegerArray(unsignedIntegers);
      const reader = new BinaryReader(data.toBinaryString());

      reader.readUnsignedInteger(); // Root prefab hash.
      reader.readUnsignedInteger(); // SaveString bytes.
      reader.readUnsignedInteger(); // Parent prefab hash.
      reader.readFloat(); // Parent position X.
      reader.readFloat(); // Parent position Y.
      reader.readFloat(); // Parent position Z.
      reader.readFloat(); // Parent rotation X.
      reader.readFloat(); // Parent rotation Y.
      reader.readFloat(); // Parent rotation Z.
      reader.readFloat(); // Parent rotation W.
      reader.readFloat(); // Parent scale.

      fastForwardedReader = reader;
    });

    it('returns an UnsupportedComponent', () => {
      const hash = fastForwardedReader.readUnsignedInteger();

      if (hash !== componentHash) {
        throw new Error('Invalid test data.');
      }

      const component = readComponent(fastForwardedReader, componentHash, componentName, componentVersion);

      expect(component).toBeInstanceOf(Component);
      expect(component).toBeInstanceOf(UnsupportedComponent);
      expect(component.hash).toStrictEqual(componentHash);
      expect(component.name).toStrictEqual(componentName);
      expect((component as UnsupportedComponent).rawData).toStrictEqual('00000001001101111111' as BinaryString);
    });
  });
});
