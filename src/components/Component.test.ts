import { BinaryData } from '../BinaryData.js';
import { BinaryReader } from '../BinaryReader.js';
import { BinaryWriter } from '../BinaryWriter.js';
import { Prefab } from '../Prefab.js';

import { Component } from './Component.js';

describe('new Component()', () => {
  describe('when given the required props', () => {
    it('returns an instance of the Component class', () => {
      const componentHash = 1337;
      const componentName = 'topkek';
      const componentVersion = 1;

      const component = new Component({
        hash: componentHash,
        name: componentName,
        version: componentVersion
      });

      expect(component).toBeInstanceOf(Component);
      expect(component.hash).toStrictEqual(componentHash);
      expect(component.name).toStrictEqual(componentName);
      expect(component.version).toStrictEqual(componentVersion);
    });
  });
});

describe('Component.fromBinary()', () => {
  let fastForwardedReader: BinaryReader;
  const prefab = new Prefab('Grass_Clump');

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
    reader.readUnsignedInteger(); // Component hash.
    reader.readUnsignedInteger(); // Component data length.

    fastForwardedReader = reader;
  });

  it('throws an error', () => {
    const componentHash = 1337;
    const componentName = 'topkek';
    const componentVersion = 1;
    const expectedToThrow = () => {
      return Component.fromBinary(fastForwardedReader, componentVersion, componentHash, componentName, 1337);
    };
    const expectedError = new Error(
      'Cannot instantiate base Component class from binary string data. You must override the fromBinary() method in the extended Component class.'
    );

    expect(expectedToThrow).toThrowError(expectedError);
  });
});

describe('Component.toBinary()', () => {
  it('throws an error', () => {
    const componentHash = 1337;
    const componentName = 'topkek';
    const componentVersion = 1;

    const component = new Component({
      hash: componentHash,
      name: componentName,
      version: componentVersion
    });

    const expectedToThrow = () => component.toBinary();
    const expectedError = new Error(
      'Cannot encode base Component class. You must override the encode() method in the extended Component class.'
    );

    expect(expectedToThrow).toThrowError(expectedError);
  });
});

describe('Component.write()', () => {
  it('throws an error', () => {
    const componentHash = 1337;
    const componentName = 'topkek';
    const componentVersion = 1;

    const component = new Component({
      hash: componentHash,
      name: componentName,
      version: componentVersion
    });

    const writer = new BinaryWriter();

    const expectedToThrow = () => component.write(writer);
    const expectedError = new Error(
      'Cannot encode base Component class. You must override the encode() method in the extended Component class.'
    );

    expect(expectedToThrow).toThrowError(expectedError);
  });
});
