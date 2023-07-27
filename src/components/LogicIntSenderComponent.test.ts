import { BinaryData } from '../BinaryData.js';
import { BinaryReader } from '../BinaryReader.js';
import { BinaryWriter } from '../BinaryWriter.js';
import { Prefab } from '../Prefab.js';
import { ComponentHash } from '../types/ComponentHash.js';

import { LogicIntSenderComponent } from './LogicIntSenderComponent.js';

const componentHash = ComponentHash.LogicIntSender;
const componentName = 'LogicIntSender';
const componentVersion = 1;
const componentProps = {
  updatedValue: 1337,
  changedExternally: 420,
  identifier: 69,
  value: -420
};

describe('new LogicIntSenderComponent()', () => {
  describe('when given the required props', () => {
    it('returns an instance of the LogicIntSenderComponent class', () => {
      const component = new LogicIntSenderComponent({ version: componentVersion });

      expect(component).toBeInstanceOf(LogicIntSenderComponent);
      expect(component.hash).toStrictEqual(componentHash);
      expect(component.name).toStrictEqual(componentName);
      expect(component.version).toStrictEqual(componentVersion);
    });
  });

  describe('when given additional props', () => {
    it('returns an instance of the LogicIntSenderComponent class', () => {
      const component = new LogicIntSenderComponent({ version: componentVersion, ...componentProps });

      expect(component).toBeInstanceOf(LogicIntSenderComponent);
      expect(component.hash).toStrictEqual(componentHash);
      expect(component.name).toStrictEqual(componentName);
      expect(component.version).toStrictEqual(componentVersion);
      expect(component.updatedValue).toStrictEqual(componentProps.updatedValue);
      expect(component.changedExternally).toStrictEqual(componentProps.changedExternally);
      expect(component.identifier).toStrictEqual(componentProps.identifier);
      expect(component.value).toStrictEqual(componentProps.value);
    });
  });
});

describe('LogicIntSenderComponent.fromBinary()', () => {
  let fastForwardedReader: BinaryReader;

  const prefab = new Prefab('MRK_Small_Lever', {
    components: {
      LogicIntSender: new LogicIntSenderComponent({ version: componentVersion, ...componentProps })
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
    reader.readUnsignedInteger(); // LogicIntSenderComponent hash.
    reader.readUnsignedInteger(); // LogicIntSenderComponent data length.

    fastForwardedReader = reader;
  });

  it('returns an instance of the LogicIntSenderComponent class', () => {
    const component = LogicIntSenderComponent.fromBinary(fastForwardedReader, componentVersion);

    expect(component).toBeInstanceOf(LogicIntSenderComponent);
    expect(component.hash).toStrictEqual(componentHash);
    expect(component.name).toStrictEqual(componentName);
    expect(component.version).toStrictEqual(componentVersion);
    expect(component.updatedValue).toStrictEqual(componentProps.updatedValue);
    expect(component.changedExternally).toStrictEqual(componentProps.changedExternally);
    expect(component.identifier).toStrictEqual(componentProps.identifier);
    expect(component.value).toStrictEqual(componentProps.value);
  });
});

describe('LogicIntSenderComponent.toBinary()', () => {
  it('returns a BinaryString representation of the component', () => {
    const component = new LogicIntSenderComponent({ version: componentVersion, ...componentProps });

    const data = component.toBinary();

    const expectedData =
      '00000000000000000000010100111001000000000000000000000001101001000000000000000000000000000100010101111111111111111111111001011100';

    expect(data).toStrictEqual(expectedData);
  });
});

describe('LogicIntSenderComponent.write()', () => {
  it('writes a BinaryString representation of the component to the given BinaryWriter, including component hash and data length', () => {
    const component = new LogicIntSenderComponent({ version: componentVersion, ...componentProps });

    const writer = new BinaryWriter();
    component.write(writer);

    const data = writer.flush();

    const expectedData =
      '101010111011001001000101100111000000000000000000000000001000000000000000000000000000010100111001000000000000000000000001101001000000000000000000000000000100010101111111111111111111111001011100';

    expect(data).toStrictEqual(expectedData);

    const reader = new BinaryReader(data);

    const hash = reader.readUnsignedInteger();
    reader.readUnsignedInteger(); // LogicIntSenderComponent data length.
    const updatedValue = reader.readUnsignedInteger();
    const changedExternally = reader.readUnsignedInteger();
    const identifier = reader.readUnsignedInteger();
    const value = reader.readSignedInteger();

    expect(hash).toStrictEqual(componentHash);
    expect(updatedValue).toStrictEqual(componentProps.updatedValue);
    expect(changedExternally).toStrictEqual(componentProps.changedExternally);
    expect(identifier).toStrictEqual(componentProps.identifier);
    expect(value).toStrictEqual(componentProps.value);
  });
});
