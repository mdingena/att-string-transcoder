import { BinaryData } from '../BinaryData.js';
import { BinaryReader } from '../BinaryReader.js';
import { BinaryWriter } from '../BinaryWriter.js';
import { Prefab } from '../Prefab.js';
import { ComponentHash } from '../types/ComponentHash.js';

import { FuseComponent } from './FuseComponent.js';

const componentHash = ComponentHash.Fuse;
const componentName = 'Fuse';
const componentVersion = 1;
const componentProps = {
  isFinished: false,
  isLit: true,
  currentFuseAmount: 0.69
};

describe('new FuseComponent()', () => {
  describe('when given the required props', () => {
    it('returns an instance of the FuseComponent class', () => {
      const component = new FuseComponent({ version: componentVersion });

      expect(component).toBeInstanceOf(FuseComponent);
      expect(component.hash).toStrictEqual(componentHash);
      expect(component.name).toStrictEqual(componentName);
      expect(component.version).toStrictEqual(componentVersion);
    });
  });

  describe('when given additional props', () => {
    it('returns an instance of the FuseComponent class', () => {
      const component = new FuseComponent({ version: componentVersion, ...componentProps });

      expect(component).toBeInstanceOf(FuseComponent);
      expect(component.hash).toStrictEqual(componentHash);
      expect(component.name).toStrictEqual(componentName);
      expect(component.version).toStrictEqual(componentVersion);
      expect(component.isFinished).toStrictEqual(componentProps.isFinished);
      expect(component.isLit).toStrictEqual(componentProps.isLit);
      expect(component.currentFuseAmount).toBeCloseTo(componentProps.currentFuseAmount, 2);
    });
  });
});

describe('FuseComponent.fromBinary()', () => {
  let fastForwardedReader: BinaryReader;

  const prefab = new Prefab('Grass_Clump', {
    components: {
      Fuse: new FuseComponent({ version: componentVersion, ...componentProps })
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
    reader.readUnsignedInteger(); // FuseComponent hash.
    reader.readUnsignedInteger(); // FuseComponent data length.

    fastForwardedReader = reader;
  });

  it('returns an instance of the FuseComponent class', () => {
    const component = FuseComponent.fromBinary(fastForwardedReader, componentVersion);

    expect(component).toBeInstanceOf(FuseComponent);
    expect(component.hash).toStrictEqual(componentHash);
    expect(component.name).toStrictEqual(componentName);
    expect(component.version).toStrictEqual(componentVersion);
    expect(component.isFinished).toStrictEqual(componentProps.isFinished);
    expect(component.isLit).toStrictEqual(componentProps.isLit);
    expect(component.currentFuseAmount).toBeCloseTo(componentProps.currentFuseAmount, 2);
  });
});

describe('FuseComponent.toBinary()', () => {
  it('returns a BinaryString representation of the component', () => {
    const component = new FuseComponent({ version: componentVersion, ...componentProps });

    const data = component.toBinary();

    const expectedData = '0100111111001100001010001111010111';

    expect(data).toStrictEqual(expectedData);
  });
});

describe('FuseComponent.write()', () => {
  it('writes a BinaryString representation of the component to the given BinaryWriter, including component hash and data length', () => {
    const component = new FuseComponent({ version: componentVersion, ...componentProps });

    const writer = new BinaryWriter();
    component.write(writer);

    const data = writer.flush();

    const expectedData =
      '11011010100000011100101110011001000000000000000000000000001000100100111111001100001010001111010111';

    expect(data).toStrictEqual(expectedData);

    const reader = new BinaryReader(data);

    const hash = reader.readUnsignedInteger();
    reader.readUnsignedInteger(); // FuseComponent data length.
    const isFinished = reader.readBoolean();
    const isLit = reader.readBoolean();
    const currentFuseAmount = reader.readFloat();

    expect(hash).toStrictEqual(componentHash);
    expect(isFinished).toStrictEqual(componentProps.isFinished);
    expect(isLit).toStrictEqual(componentProps.isLit);
    expect(currentFuseAmount).toBeCloseTo(componentProps.currentFuseAmount, 2);
  });
});
