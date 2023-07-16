import { BinaryData } from '../BinaryData.js';
import { BinaryReader } from '../BinaryReader.js';
import { BinaryWriter } from '../BinaryWriter.js';
import { Prefab } from '../Prefab.js';
import { ComponentHash } from '../types/ComponentHash.js';

import { FireComponent } from './FireComponent.js';

const componentHash = ComponentHash.Fire;
const componentName = 'Fire';
const componentVersion = 1;
const componentProps = {
  fuelConsumptionProgress: 0.69
};

describe('new FireComponent()', () => {
  describe('when given the required props', () => {
    it('returns an instance of the FireComponent class', () => {
      const component = new FireComponent({ version: componentVersion });

      expect(component).toBeInstanceOf(FireComponent);
      expect(component.hash).toStrictEqual(componentHash);
      expect(component.name).toStrictEqual(componentName);
      expect(component.version).toStrictEqual(componentVersion);
    });
  });

  describe('when given additional props', () => {
    it('returns an instance of the FireComponent class', () => {
      const component = new FireComponent({ version: componentVersion, ...componentProps });

      expect(component).toBeInstanceOf(FireComponent);
      expect(component.hash).toStrictEqual(componentHash);
      expect(component.name).toStrictEqual(componentName);
      expect(component.version).toStrictEqual(componentVersion);
      expect(component.fuelConsumptionProgress).toBeCloseTo(componentProps.fuelConsumptionProgress, 2);
    });
  });
});

describe('FireComponent.fromBinary()', () => {
  let fastForwardedReader: BinaryReader;

  const prefab = new Prefab('Grass_Clump', {
    components: {
      Fire: new FireComponent({ version: componentVersion, ...componentProps })
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
    reader.readUnsignedInteger(); // FireComponent hash.
    reader.readUnsignedInteger(); // FireComponent data length.

    fastForwardedReader = reader;
  });

  it('returns an instance of the FireComponent class', () => {
    const component = FireComponent.fromBinary(fastForwardedReader, componentVersion);

    expect(component).toBeInstanceOf(FireComponent);
    expect(component.hash).toStrictEqual(componentHash);
    expect(component.name).toStrictEqual(componentName);
    expect(component.version).toStrictEqual(componentVersion);
    expect(component.fuelConsumptionProgress).toBeCloseTo(componentProps.fuelConsumptionProgress, 2);
  });
});

describe('FireComponent.toBinary()', () => {
  it('returns a BinaryString representation of the component', () => {
    const component = new FireComponent({ version: componentVersion, ...componentProps });

    const data = component.toBinary();

    const expectedData = '00111111001100001010001111010111';

    expect(data).toStrictEqual(expectedData);
  });
});

describe('FireComponent.write()', () => {
  it('writes a BinaryString representation of the component to the given BinaryWriter, including component hash and data length', () => {
    const component = new FireComponent({ version: componentVersion, ...componentProps });

    const writer = new BinaryWriter();
    component.write(writer);

    const data = writer.flush();

    const expectedData =
      '110011100001010110010000010111100000000000000000000000000010000000111111001100001010001111010111';

    expect(data).toStrictEqual(expectedData);

    const reader = new BinaryReader(data);

    const hash = reader.readUnsignedInteger();
    reader.readUnsignedInteger(); // FireComponent data length.
    const fuelConsumptionProgress = reader.readFloat();

    expect(hash).toStrictEqual(componentHash);
    expect(fuelConsumptionProgress).toBeCloseTo(componentProps.fuelConsumptionProgress, 2);
  });
});
