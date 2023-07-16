import { BinaryData } from '../BinaryData.js';
import { BinaryReader } from '../BinaryReader.js';
import { BinaryWriter } from '../BinaryWriter.js';
import { Prefab } from '../Prefab.js';
import { ComponentHash } from '../types/ComponentHash.js';

import { BasicDecayComponent } from './BasicDecayComponent.js';

const componentHash = ComponentHash.BasicDecay;
const componentName = 'BasicDecay';
const componentVersion = 3;
const componentProps = {
  isDisabled: false,
  timelineEntry: 133742069
};

describe('new BasicDecayComponent()', () => {
  describe('when given the required props', () => {
    it('returns an instance of the BasicDecayComponent class', () => {
      const component = new BasicDecayComponent({ version: componentVersion });

      expect(component).toBeInstanceOf(BasicDecayComponent);
      expect(component.hash).toStrictEqual(componentHash);
      expect(component.name).toStrictEqual(componentName);
      expect(component.version).toStrictEqual(componentVersion);
    });
  });

  describe('when given additional props', () => {
    it('returns an instance of the BasicDecayComponent class', () => {
      const component = new BasicDecayComponent({ version: componentVersion, ...componentProps });

      expect(component).toBeInstanceOf(BasicDecayComponent);
      expect(component.hash).toStrictEqual(componentHash);
      expect(component.name).toStrictEqual(componentName);
      expect(component.version).toStrictEqual(componentVersion);
      expect(component.isDisabled).toStrictEqual(componentProps.isDisabled);
      expect(component.timelineEntry).toStrictEqual(componentProps.timelineEntry);
    });
  });
});

describe('BasicDecayComponent.fromBinary()', () => {
  let fastForwardedReader: BinaryReader;

  const prefab = new Prefab('Grass_Clump', {
    components: {
      BasicDecay: new BasicDecayComponent({ version: componentVersion, ...componentProps })
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
    reader.readUnsignedInteger(); // BasicDecayComponent hash.
    reader.readUnsignedInteger(); // BasicDecayComponent data length.

    fastForwardedReader = reader;
  });

  it('returns an instance of the BasicDecayComponent class', () => {
    const component = BasicDecayComponent.fromBinary(fastForwardedReader, componentVersion);

    expect(component).toBeInstanceOf(BasicDecayComponent);
    expect(component.hash).toStrictEqual(componentHash);
    expect(component.name).toStrictEqual(componentName);
    expect(component.version).toStrictEqual(componentVersion);
    expect(component.isDisabled).toStrictEqual(componentProps.isDisabled);
    expect(component.timelineEntry).toStrictEqual(componentProps.timelineEntry);
  });
});

describe('BasicDecayComponent.toBinary()', () => {
  it('returns a BinaryString representation of the component', () => {
    const component = new BasicDecayComponent({ version: componentVersion, ...componentProps });

    const data = component.toBinary();

    const expectedData = '00000011111111000101111011111010100000000000000000000000000000000';

    expect(data).toStrictEqual(expectedData);
  });
});

describe('BasicDecayComponent.write()', () => {
  it('writes a BinaryString representation of the component to the given BinaryWriter, including component hash and data length', () => {
    const component = new BasicDecayComponent({ version: componentVersion, ...componentProps });

    const writer = new BinaryWriter();
    component.write(writer);

    const data = writer.flush();

    const expectedData =
      '111000101001001010010011010100100000000000000000000000000100000100000011111111000101111011111010100000000000000000000000000000000';

    expect(data).toStrictEqual(expectedData);

    const reader = new BinaryReader(data);

    const hash = reader.readUnsignedInteger();
    reader.readUnsignedInteger(); // BasicDecayComponent data length.
    const isDisabled = reader.readBoolean();
    const timelineEntry = reader.readUnsignedLong();

    expect(hash).toStrictEqual(componentHash);
    expect(isDisabled).toStrictEqual(componentProps.isDisabled);
    expect(timelineEntry).toStrictEqual(componentProps.timelineEntry);
  });
});
