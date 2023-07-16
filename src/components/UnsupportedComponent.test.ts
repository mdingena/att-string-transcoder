import type { BinaryString } from '../types/BinaryString.js';

import { BinaryData } from '../BinaryData.js';
import { BinaryReader } from '../BinaryReader.js';
import { BinaryWriter } from '../BinaryWriter.js';
import { Prefab } from '../Prefab.js';
import { ComponentHash } from '../types/ComponentHash.js';

import { UnsupportedComponent } from './UnsupportedComponent.js';

describe('new UnsupportedComponent()', () => {
  describe('when given the required props', () => {
    it('returns an instance of the UnsupportedComponent class', () => {
      const componentHash = 1337;
      const componentName = 'topkek';
      const componentVersion = 1;
      const componentData = '11110111001100010000' as BinaryString;

      const component = new UnsupportedComponent({
        hash: componentHash,
        name: componentName,
        version: componentVersion,
        rawData: componentData
      });

      expect(component).toBeInstanceOf(UnsupportedComponent);
      expect(component.hash).toStrictEqual(componentHash);
      expect(component.name).toStrictEqual(componentName);
      expect(component.version).toStrictEqual(componentVersion);
      expect(component.rawData).toStrictEqual(componentData);
    });
  });
});

describe('UnsupportedComponent.fromBinary()', () => {
  let fastForwardedReader: BinaryReader;
  let componentDataLength: number;
  const componentHash = ComponentHash.RandomSpawnRectangle;
  const componentName = 'RandomSpawnRectangle';
  const componentVersion = 1;
  const componentData = '11110111001100010000' as BinaryString;
  const prefab = new Prefab('Grass_Clump', {
    components: {
      RandomSpawnRectangle: new UnsupportedComponent({
        hash: componentHash,
        name: componentName,
        version: componentVersion,
        rawData: componentData
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
    reader.readUnsignedInteger(); // UnsupportedComponent hash.
    const dataLength = reader.readUnsignedInteger(); // UnsupportedComponent data length.

    fastForwardedReader = reader;
    componentDataLength = dataLength;
  });

  it('returns an instance of the UnsupportedComponent class', () => {
    const component = UnsupportedComponent.fromBinary(
      fastForwardedReader,
      componentVersion,
      componentHash,
      componentName,
      componentDataLength
    );

    expect(component).toBeInstanceOf(UnsupportedComponent);
    expect(component.hash).toStrictEqual(componentHash);
    expect(component.name).toStrictEqual(componentName);
    expect(component.version).toStrictEqual(componentVersion);
    expect(component.rawData).toStrictEqual(componentData);
  });
});

describe('UnsupportedComponent.toBinary()', () => {
  it('returns a BinaryString representation of the component', () => {
    const componentHash = 1337;
    const componentName = 'topkek';
    const componentVersion = 1;
    const componentData = '11110111001100010000' as BinaryString;

    const component = new UnsupportedComponent({
      hash: componentHash,
      name: componentName,
      version: componentVersion,
      rawData: componentData
    });

    const data = component.toBinary();

    const expectedData = componentData;

    expect(data).toStrictEqual(expectedData);
  });
});

describe('UnsupportedComponent.write()', () => {
  it('writes a BinaryString representation of the component to the given BinaryWriter, including component hash and data length', () => {
    const componentHash = 1337;
    const componentName = 'topkek';
    const componentVersion = 1;
    const componentData = '11110111001100010000' as BinaryString;

    const component = new UnsupportedComponent({
      hash: componentHash,
      name: componentName,
      version: componentVersion,
      rawData: componentData
    });

    const writer = new BinaryWriter();
    component.write(writer);

    const data = writer.flush();

    const expectedData = '000000000000000000000101001110010000000000000000000000000001010011110111001100010000';

    expect(data).toStrictEqual(expectedData);

    const reader = new BinaryReader(data);

    const hash = reader.readUnsignedInteger();
    const dataLength = reader.readUnsignedInteger();
    const rawData = reader.readBits(dataLength);

    expect(hash).toStrictEqual(componentHash);
    expect(rawData).toStrictEqual(componentData);
  });
});
