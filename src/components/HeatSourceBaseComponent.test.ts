import { HeatSourceBaseComponent } from './HeatSourceBaseComponent.js';
import { BinaryData } from '../BinaryData.js';
import { BinaryReader } from '../BinaryReader.js';
import { BinaryWriter } from '../BinaryWriter.js';
import { Prefab } from '../Prefab.js';
import { ComponentHash } from '../types/ComponentHash.js';

const componentHash = ComponentHash.HeatSourceBase;
const componentName = 'HeatSourceBase';
const componentVersion = 1;
const componentProps = {
  isLit: true,
  progress: 0.69,
  time: 133742069
};

describe('new HeatSourceBaseComponent()', () => {
  describe('when given the required props', () => {
    it('returns an instance of the HeatSourceBaseComponent class', () => {
      const component = new HeatSourceBaseComponent({ version: componentVersion });

      expect(component).toBeInstanceOf(HeatSourceBaseComponent);
      expect(component.hash).toStrictEqual(componentHash);
      expect(component.name).toStrictEqual(componentName);
      expect(component.version).toStrictEqual(componentVersion);
    });
  });

  describe('when given additional props', () => {
    it('returns an instance of the HeatSourceBaseComponent class', () => {
      const component = new HeatSourceBaseComponent({ version: componentVersion, ...componentProps });

      expect(component).toBeInstanceOf(HeatSourceBaseComponent);
      expect(component.hash).toStrictEqual(componentHash);
      expect(component.name).toStrictEqual(componentName);
      expect(component.version).toStrictEqual(componentVersion);
      expect(component.isLit).toStrictEqual(componentProps.isLit);
      expect(component.progress).toBeCloseTo(componentProps.progress, 2);
      expect(component.time).toStrictEqual(componentProps.time);
    });
  });
});

describe('HeatSourceBaseComponent.fromBinary()', () => {
  let fastForwardedReader: BinaryReader;

  const prefab = new Prefab('Grass_Clump', {
    components: {
      HeatSourceBase: new HeatSourceBaseComponent({ version: componentVersion, ...componentProps })
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
    reader.readUnsignedInteger(); // HeatSourceBaseComponent hash.
    reader.readUnsignedInteger(); // HeatSourceBaseComponent data length.

    fastForwardedReader = reader;
  });

  it('returns an instance of the HeatSourceBaseComponent class', () => {
    const component = HeatSourceBaseComponent.fromBinary(fastForwardedReader, componentVersion);

    expect(component).toBeInstanceOf(HeatSourceBaseComponent);
    expect(component.hash).toStrictEqual(componentHash);
    expect(component.name).toStrictEqual(componentName);
    expect(component.version).toStrictEqual(componentVersion);
    expect(component.isLit).toStrictEqual(componentProps.isLit);
    expect(component.progress).toBeCloseTo(componentProps.progress, 2);
    expect(component.time).toStrictEqual(componentProps.time);
  });
});

describe('HeatSourceBaseComponent.toBinary()', () => {
  it('returns a BinaryString representation of the component', () => {
    const component = new HeatSourceBaseComponent({ version: componentVersion, ...componentProps });

    const data = component.toBinary();

    const expectedData =
      '1001111110011000010100011110101110000011111111000101111011111010100000000000000000000000000000000';

    expect(data).toStrictEqual(expectedData);
  });
});

describe('HeatSourceBaseComponent.write()', () => {
  it('writes a BinaryString representation of the component to the given BinaryWriter, including component hash and data length', () => {
    const component = new HeatSourceBaseComponent({ version: componentVersion, ...componentProps });

    const writer = new BinaryWriter();
    component.write(writer);

    const data = writer.flush();

    const expectedData =
      '11110100111011111101111010000000000000000000000000000000011000011001111110011000010100011110101110000011111111000101111011111010100000000000000000000000000000000';

    expect(data).toStrictEqual(expectedData);

    const reader = new BinaryReader(data);

    const hash = reader.readUnsignedInteger();
    reader.readUnsignedInteger(); // HeatSourceBaseComponent data length.
    const isLit = reader.readBoolean();
    const progress = reader.readFloat();
    const time = reader.readUnsignedLong();

    expect(hash).toStrictEqual(componentHash);
    expect(isLit).toStrictEqual(componentProps.isLit);
    expect(progress).toBeCloseTo(componentProps.progress, 2);
    expect(time).toStrictEqual(componentProps.time);
  });
});
