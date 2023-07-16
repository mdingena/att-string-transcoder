import { BinaryData } from '../BinaryData.js';
import { BinaryReader } from '../BinaryReader.js';
import { BinaryWriter } from '../BinaryWriter.js';
import { Prefab } from '../Prefab.js';
import { ComponentHash } from '../types/ComponentHash.js';

import { SpawnAreaComponent } from './SpawnAreaComponent.js';

const componentHash = ComponentHash.SpawnArea;
const componentName = 'SpawnArea';
const componentVersion = 1;
const componentProps = {
  size: 13.37,
  groundLayers: 420,
  avoidLayers: 69,
  isAligningNormal: true,
  maxAcceptableAngleDot: 0.69
};

describe('new SpawnAreaComponent()', () => {
  describe('when given the required props', () => {
    it('returns an instance of the SpawnAreaComponent class', () => {
      const component = new SpawnAreaComponent({ version: componentVersion });

      expect(component).toBeInstanceOf(SpawnAreaComponent);
      expect(component.hash).toStrictEqual(componentHash);
      expect(component.name).toStrictEqual(componentName);
      expect(component.version).toStrictEqual(componentVersion);
    });
  });

  describe('when given additional props', () => {
    it('returns an instance of the SpawnAreaComponent class', () => {
      const component = new SpawnAreaComponent({ version: componentVersion, ...componentProps });

      expect(component).toBeInstanceOf(SpawnAreaComponent);
      expect(component.hash).toStrictEqual(componentHash);
      expect(component.name).toStrictEqual(componentName);
      expect(component.version).toStrictEqual(componentVersion);
      expect(component.size).toBeCloseTo(componentProps.size, 2);
      expect(component.groundLayers).toStrictEqual(componentProps.groundLayers);
      expect(component.avoidLayers).toStrictEqual(componentProps.avoidLayers);
      expect(component.isAligningNormal).toStrictEqual(componentProps.isAligningNormal);
      expect(component.maxAcceptableAngleDot).toBeCloseTo(componentProps.maxAcceptableAngleDot, 2);
    });
  });
});

describe('SpawnAreaComponent.fromBinary()', () => {
  let fastForwardedReader: BinaryReader;

  const prefab = new Prefab('Grass_Clump', {
    components: {
      SpawnArea: new SpawnAreaComponent({ version: componentVersion, ...componentProps })
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
    reader.readUnsignedInteger(); // SpawnAreaComponent hash.
    reader.readUnsignedInteger(); // SpawnAreaComponent data length.

    fastForwardedReader = reader;
  });

  it('returns an instance of the SpawnAreaComponent class', () => {
    const component = SpawnAreaComponent.fromBinary(fastForwardedReader, componentVersion);

    expect(component).toBeInstanceOf(SpawnAreaComponent);
    expect(component.hash).toStrictEqual(componentHash);
    expect(component.name).toStrictEqual(componentName);
    expect(component.version).toStrictEqual(componentVersion);
    expect(component.size).toBeCloseTo(componentProps.size, 2);
    expect(component.groundLayers).toStrictEqual(componentProps.groundLayers);
    expect(component.avoidLayers).toStrictEqual(componentProps.avoidLayers);
    expect(component.isAligningNormal).toStrictEqual(componentProps.isAligningNormal);
    expect(component.maxAcceptableAngleDot).toBeCloseTo(componentProps.maxAcceptableAngleDot, 2);
  });
});

describe('SpawnAreaComponent.toBinary()', () => {
  it('returns a BinaryString representation of the component', () => {
    const component = new SpawnAreaComponent({ version: componentVersion, ...componentProps });

    const data = component.toBinary();

    const expectedData =
      '010000010101010111101011100001011000000000000000000000011010010010000000000000000000000001000101100111111001100001010001111010111';

    expect(data).toStrictEqual(expectedData);
  });
});

describe('SpawnAreaComponent.write()', () => {
  it('writes a BinaryString representation of the component to the given BinaryWriter, including component hash and data length', () => {
    const component = new SpawnAreaComponent({ version: componentVersion, ...componentProps });

    const writer = new BinaryWriter();
    component.write(writer);

    const data = writer.flush();

    const expectedData =
      '1001110000000011110011111110100000000000000000000000000010000001010000010101010111101011100001011000000000000000000000011010010010000000000000000000000001000101100111111001100001010001111010111';

    expect(data).toStrictEqual(expectedData);

    const reader = new BinaryReader(data);

    const hash = reader.readUnsignedInteger();
    reader.readUnsignedInteger(); // SpawnAreaComponent data length.
    const size = reader.readFloat();
    const groundLayers = reader.readSignedInteger();
    const avoidLayers = reader.readSignedInteger();
    const isAligningNormal = reader.readBoolean();
    const maxAcceptableAngleDot = reader.readFloat();

    expect(hash).toStrictEqual(componentHash);
    expect(size).toBeCloseTo(componentProps.size, 2);
    expect(groundLayers).toStrictEqual(componentProps.groundLayers);
    expect(avoidLayers).toStrictEqual(componentProps.avoidLayers);
    expect(isAligningNormal).toStrictEqual(componentProps.isAligningNormal);
    expect(maxAcceptableAngleDot).toBeCloseTo(componentProps.maxAcceptableAngleDot, 2);
  });
});
