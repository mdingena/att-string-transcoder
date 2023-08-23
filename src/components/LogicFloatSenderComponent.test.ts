import { BinaryData } from '../BinaryData.js';
import { BinaryReader } from '../BinaryReader.js';
import { BinaryWriter } from '../BinaryWriter.js';
import { Prefab } from '../Prefab.js';
import { ComponentHash } from '../types/ComponentHash.js';

import { LogicFloatSenderComponent } from './LogicFloatSenderComponent.js';

const componentHash = ComponentHash.LogicFloatSender;
const componentName = 'LogicFloatSender';
const componentVersion = 1;
const componentProps = {
  updatedValue: 1337,
  changedExternally: 420,
  identifier: 69,
  value: 0.69
};

describe('new LogicFloatSenderComponent()', () => {
  describe('when given the required props', () => {
    it('returns an instance of the LogicFloatSenderComponent class', () => {
      const component = new LogicFloatSenderComponent({ version: componentVersion });

      expect(component).toBeInstanceOf(LogicFloatSenderComponent);
      expect(component.hash).toStrictEqual(componentHash);
      expect(component.name).toStrictEqual(componentName);
      expect(component.version).toStrictEqual(componentVersion);
    });
  });

  describe('when given additional props', () => {
    it('returns an instance of the LogicFloatSenderComponent class', () => {
      const component = new LogicFloatSenderComponent({ version: componentVersion, ...componentProps });

      expect(component).toBeInstanceOf(LogicFloatSenderComponent);
      expect(component.hash).toStrictEqual(componentHash);
      expect(component.name).toStrictEqual(componentName);
      expect(component.version).toStrictEqual(componentVersion);
      expect(component.updatedValue).toStrictEqual(componentProps.updatedValue);
      expect(component.changedExternally).toStrictEqual(componentProps.changedExternally);
      expect(component.identifier).toStrictEqual(componentProps.identifier);
      expect(component.value).toBeCloseTo(componentProps.value, 2);
    });
  });
});

describe('LogicFloatSenderComponent.fromBinary()', () => {
  let fastForwardedReader: BinaryReader;

  const prefab = new Prefab('MRK_Small_Lever', {
    components: {
      LogicFloatSender: new LogicFloatSenderComponent({ version: componentVersion, ...componentProps })
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
    reader.readUnsignedInteger(); // LogicFloatSenderComponent hash.
    reader.readUnsignedInteger(); // LogicFloatSenderComponent data length.

    fastForwardedReader = reader;
  });

  it('returns an instance of the LogicFloatSenderComponent class', () => {
    const component = LogicFloatSenderComponent.fromBinary(fastForwardedReader, componentVersion);

    expect(component).toBeInstanceOf(LogicFloatSenderComponent);
    expect(component.hash).toStrictEqual(componentHash);
    expect(component.name).toStrictEqual(componentName);
    expect(component.version).toStrictEqual(componentVersion);
    expect(component.updatedValue).toStrictEqual(componentProps.updatedValue);
    expect(component.changedExternally).toStrictEqual(componentProps.changedExternally);
    expect(component.identifier).toStrictEqual(componentProps.identifier);
    expect(component.value).toBeCloseTo(componentProps.value, 2);
  });
});

describe('LogicFloatSenderComponent.toBinary()', () => {
  it('returns a BinaryString representation of the component', () => {
    const component = new LogicFloatSenderComponent({ version: componentVersion, ...componentProps });

    const data = component.toBinary();

    const expectedData =
      '00000000000000000000010100111001000000000000000000000001101001000000000000000000000000000100010100111111001100001010001111010111';

    expect(data).toStrictEqual(expectedData);
  });
});

describe('LogicFloatSenderComponent.write()', () => {
  it('writes a BinaryString representation of the component to the given BinaryWriter, including component hash and data length', () => {
    const component = new LogicFloatSenderComponent({ version: componentVersion, ...componentProps });

    const writer = new BinaryWriter();
    component.write(writer);

    const data = writer.flush();

    const expectedData =
      '011111100110101101010110101110010000000000000000000000001000000000000000000000000000010100111001000000000000000000000001101001000000000000000000000000000100010100111111001100001010001111010111';

    expect(data).toStrictEqual(expectedData);

    const reader = new BinaryReader(data);

    const hash = reader.readUnsignedInteger();
    reader.readUnsignedInteger(); // LogicFloatSenderComponent data length.
    const updatedValue = reader.readUnsignedInteger();
    const changedExternally = reader.readUnsignedInteger();
    const identifier = reader.readUnsignedInteger();
    const value = reader.readFloat();

    expect(hash).toStrictEqual(componentHash);
    expect(updatedValue).toStrictEqual(componentProps.updatedValue);
    expect(changedExternally).toStrictEqual(componentProps.changedExternally);
    expect(identifier).toStrictEqual(componentProps.identifier);
    expect(value).toBeCloseTo(componentProps.value, 2);
  });
});
