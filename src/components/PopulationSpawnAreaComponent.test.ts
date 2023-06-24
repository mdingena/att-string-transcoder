import {
  PopulationSpawnAreaComponent,
  type PopulationSpawnAreaComponentProps
} from './PopulationSpawnAreaComponent.js';
import { BinaryData } from '../BinaryData.js';
import { BinaryReader } from '../BinaryReader.js';
import { BinaryWriter } from '../BinaryWriter.js';
import { Prefab } from '../Prefab.js';
import { ComponentHash } from '../types/ComponentHash.js';

const componentHash = ComponentHash.PopulationSpawnArea;
const componentName = 'PopulationSpawnArea';
const componentVersion = 2;

const child = {
  index: -420,
  pointIndex: -69
};

const componentProps = {
  definition: 1337,
  isPopulationStarted: true,
  children: [child],
  maxPopulation: 420,
  currentPopulation: 69,
  checkPopulationTime: 133742069,
  numberOfSpawnPoints: 42,
  startingPopulation: 8,
  isOneOff: false
};

describe('new PopulationSpawnAreaComponent()', () => {
  describe('when given the required props', () => {
    it('returns an instance of the PopulationSpawnAreaComponent class', () => {
      const component = new PopulationSpawnAreaComponent({ version: componentVersion });

      expect(component).toBeInstanceOf(PopulationSpawnAreaComponent);
      expect(component.hash).toStrictEqual(componentHash);
      expect(component.name).toStrictEqual(componentName);
      expect(component.version).toStrictEqual(componentVersion);
    });
  });

  describe('when given additional props', () => {
    it('returns an instance of the PopulationSpawnAreaComponent class', () => {
      const component = new PopulationSpawnAreaComponent({ version: componentVersion, ...componentProps });

      expect(component).toBeInstanceOf(PopulationSpawnAreaComponent);
      expect(component.hash).toStrictEqual(componentHash);
      expect(component.name).toStrictEqual(componentName);
      expect(component.version).toStrictEqual(componentVersion);
      expect(component.definition).toStrictEqual(componentProps.definition);
      expect(component.isPopulationStarted).toStrictEqual(componentProps.isPopulationStarted);
      expect(component.children).toStrictEqual(componentProps.children);
      expect(component.maxPopulation).toStrictEqual(componentProps.maxPopulation);
      expect(component.currentPopulation).toStrictEqual(componentProps.currentPopulation);
      expect(component.checkPopulationTime).toStrictEqual(componentProps.checkPopulationTime);
      expect(component.numberOfSpawnPoints).toStrictEqual(componentProps.numberOfSpawnPoints);
      expect(component.startingPopulation).toStrictEqual(componentProps.startingPopulation);
      expect(component.isOneOff).toStrictEqual(componentProps.isOneOff);
    });
  });
});

describe('PopulationSpawnAreaComponent.fromBinary()', () => {
  let fastForwardedReader: BinaryReader;

  describe('when all component props are given', () => {
    const prefab = new Prefab('Grass_Clump', {
      components: {
        PopulationSpawnArea: new PopulationSpawnAreaComponent({ version: componentVersion, ...componentProps })
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
      reader.readUnsignedInteger(); // PopulationSpawnAreaComponent hash.
      reader.readUnsignedInteger(); // PopulationSpawnAreaComponent data length.

      fastForwardedReader = reader;
    });

    it('returns an instance of the PopulationSpawnAreaComponent class', () => {
      const component = PopulationSpawnAreaComponent.fromBinary(fastForwardedReader, componentVersion);

      expect(component).toBeInstanceOf(PopulationSpawnAreaComponent);
      expect(component.hash).toStrictEqual(componentHash);
      expect(component.name).toStrictEqual(componentName);
      expect(component.version).toStrictEqual(componentVersion);
      expect(component.definition).toStrictEqual(componentProps.definition);
      expect(component.isPopulationStarted).toStrictEqual(componentProps.isPopulationStarted);
      expect(component.children).toStrictEqual(componentProps.children);
      expect(component.maxPopulation).toStrictEqual(componentProps.maxPopulation);
      expect(component.currentPopulation).toStrictEqual(componentProps.currentPopulation);
      expect(component.checkPopulationTime).toStrictEqual(componentProps.checkPopulationTime);
      expect(component.numberOfSpawnPoints).toStrictEqual(componentProps.numberOfSpawnPoints);
      expect(component.startingPopulation).toStrictEqual(componentProps.startingPopulation);
      expect(component.isOneOff).toStrictEqual(componentProps.isOneOff);
    });
  });

  describe('when child is null', () => {
    beforeEach(() => {
      (componentProps as PopulationSpawnAreaComponentProps).children = [null];

      const prefab = new Prefab('Grass_Clump', {
        components: {
          PopulationSpawnArea: new PopulationSpawnAreaComponent({ version: componentVersion, ...componentProps })
        }
      });
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
      reader.readUnsignedInteger(); // PopulationSpawnAreaComponent hash.
      reader.readUnsignedInteger(); // PopulationSpawnAreaComponent data length.

      fastForwardedReader = reader;
    });

    afterEach(() => {
      componentProps.children = [child];
    });

    it('returns an instance of the PopulationSpawnAreaComponent class', () => {
      const component = PopulationSpawnAreaComponent.fromBinary(fastForwardedReader, componentVersion);

      expect(component).toBeInstanceOf(PopulationSpawnAreaComponent);
      expect(component.hash).toStrictEqual(componentHash);
      expect(component.name).toStrictEqual(componentName);
      expect(component.version).toStrictEqual(componentVersion);
      expect(component.definition).toStrictEqual(componentProps.definition);
      expect(component.isPopulationStarted).toStrictEqual(componentProps.isPopulationStarted);
      expect(component.children).toStrictEqual(componentProps.children);
      expect(component.maxPopulation).toStrictEqual(componentProps.maxPopulation);
      expect(component.currentPopulation).toStrictEqual(componentProps.currentPopulation);
      expect(component.checkPopulationTime).toStrictEqual(componentProps.checkPopulationTime);
      expect(component.numberOfSpawnPoints).toStrictEqual(componentProps.numberOfSpawnPoints);
      expect(component.startingPopulation).toStrictEqual(componentProps.startingPopulation);
      expect(component.isOneOff).toStrictEqual(componentProps.isOneOff);
    });
  });
});

describe('PopulationSpawnAreaComponent.toBinary()', () => {
  it('returns a BinaryString representation of the component', () => {
    const component = new PopulationSpawnAreaComponent({ version: componentVersion, ...componentProps });

    const data = component.toBinary();

    const expectedData =
      '00000000000000000000010100111001100000000000000000000000000000001001111111111111111111111001011100011111111111111111111111101110111000000000000000000000011010010010000000000000000000000001000101000001111111100010111101111101010000000000000000000000000000000010000000000000000000000000101010100000000000000000000000000010000';

    expect(data).toStrictEqual(expectedData);
  });
});

describe('PopulationSpawnAreaComponent.write()', () => {
  it('writes a BinaryString representation of the component to the given BinaryWriter, including component hash and data length', () => {
    const component = new PopulationSpawnAreaComponent({ version: componentVersion, ...componentProps });

    const writer = new BinaryWriter();
    component.write(writer);

    const data = writer.flush();

    const expectedData =
      '101101110000010000000011100111110000000000000000000000010100001100000000000000000000010100111001100000000000000000000000000000001001111111111111111111111001011100011111111111111111111111101110111000000000000000000000011010010010000000000000000000000001000101000001111111100010111101111101010000000000000000000000000000000010000000000000000000000000101010100000000000000000000000000010000';

    expect(data).toStrictEqual(expectedData);

    const reader = new BinaryReader(data);

    const hash = reader.readUnsignedInteger();
    reader.readUnsignedInteger(); // PopulationSpawnAreaComponent data length.
    const definition = reader.readUnsignedInteger();
    const isPopulationStarted = reader.readBoolean();
    reader.readUnsignedInteger(); // Children array length.
    const isNullBit = reader.readBoolean();
    const index = reader.readSignedInteger();
    const pointIndex = reader.readSignedInteger();
    const maxPopulation = reader.readSignedInteger();
    const currentPopulation = reader.readSignedInteger();
    const checkPopulationTime = reader.readUnsignedLong();
    const numberOfSpawnPoints = reader.readSignedInteger();
    const startingPopulation = reader.readSignedInteger();
    const isOneOff = reader.readBoolean();

    expect(hash).toStrictEqual(componentHash);
    expect(definition).toStrictEqual(componentProps.definition);
    expect(isPopulationStarted).toStrictEqual(componentProps.isPopulationStarted);
    expect(isNullBit).toStrictEqual(false);
    expect(index).toStrictEqual(componentProps.children[0]?.index);
    expect(pointIndex).toStrictEqual(componentProps.children[0]?.pointIndex);
    expect(maxPopulation).toStrictEqual(componentProps.maxPopulation);
    expect(currentPopulation).toStrictEqual(componentProps.currentPopulation);
    expect(checkPopulationTime).toStrictEqual(componentProps.checkPopulationTime);
    expect(numberOfSpawnPoints).toStrictEqual(componentProps.numberOfSpawnPoints);
    expect(startingPopulation).toStrictEqual(componentProps.startingPopulation);
    expect(isOneOff).toStrictEqual(componentProps.isOneOff);
  });
});
