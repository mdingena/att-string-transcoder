import { BinaryData } from '../BinaryData.js';
import { BinaryReader } from '../BinaryReader.js';
import { BinaryWriter } from '../BinaryWriter.js';
import { Prefab } from '../Prefab.js';
import { ComponentHash } from '../types/ComponentHash.js';

import { LogicBoolSenderComponent } from './LogicBoolSenderComponent.js';

const componentHash = ComponentHash.LogicBoolSender;
const componentName = 'LogicBoolSender';
const componentVersion = 2;
const componentProps = {
  updatedValue: 1337,
  changedExternally: 420,
  identifier: 69,
  value: true
};

describe('new LogicBoolSenderComponent()', () => {
  describe('when given the required props', () => {
    it('returns an instance of the LogicBoolSenderComponent class', () => {
      const component = new LogicBoolSenderComponent({ version: componentVersion });

      expect(component).toBeInstanceOf(LogicBoolSenderComponent);
      expect(component.hash).toStrictEqual(componentHash);
      expect(component.name).toStrictEqual(componentName);
      expect(component.version).toStrictEqual(componentVersion);
    });
  });

  describe('when given additional props', () => {
    it('returns an instance of the LogicBoolSenderComponent class', () => {
      const component = new LogicBoolSenderComponent({ version: componentVersion, ...componentProps });

      expect(component).toBeInstanceOf(LogicBoolSenderComponent);
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

describe('LogicBoolSenderComponent.fromBinary()', () => {
  let fastForwardedReader: BinaryReader;

  const prefab = new Prefab('MRK_Small_Lever', {
    components: {
      LogicBoolSender: new LogicBoolSenderComponent({ version: componentVersion, ...componentProps })
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
    reader.readUnsignedInteger(); // LogicBoolSenderComponent hash.
    reader.readUnsignedInteger(); // LogicBoolSenderComponent data length.

    fastForwardedReader = reader;
  });

  it('returns an instance of the LogicBoolSenderComponent class', () => {
    const component = LogicBoolSenderComponent.fromBinary(fastForwardedReader, componentVersion);

    expect(component).toBeInstanceOf(LogicBoolSenderComponent);
    expect(component.hash).toStrictEqual(componentHash);
    expect(component.name).toStrictEqual(componentName);
    expect(component.version).toStrictEqual(componentVersion);
    expect(component.updatedValue).toStrictEqual(componentProps.updatedValue);
    expect(component.changedExternally).toStrictEqual(componentProps.changedExternally);
    expect(component.identifier).toStrictEqual(componentProps.identifier);
    expect(component.value).toStrictEqual(componentProps.value);
  });
});

describe('LogicBoolSenderComponent.toBinary()', () => {
  it('returns a BinaryString representation of the component', () => {
    const component = new LogicBoolSenderComponent({ version: componentVersion, ...componentProps });

    const data = component.toBinary();

    const expectedData =
      '0000000000000000000001010011100100000000000000000000000110100100000000000000000000000000010001011';

    expect(data).toStrictEqual(expectedData);
  });
});

describe('LogicBoolSenderComponent.write()', () => {
  it('writes a BinaryString representation of the component to the given BinaryWriter, including component hash and data length', () => {
    const component = new LogicBoolSenderComponent({ version: componentVersion, ...componentProps });

    const writer = new BinaryWriter();
    component.write(writer);

    const data = writer.flush();

    const expectedData =
      '01001010111100001001110001001011000000000000000000000000011000010000000000000000000001010011100100000000000000000000000110100100000000000000000000000000010001011';

    expect(data).toStrictEqual(expectedData);

    const reader = new BinaryReader(data);

    const hash = reader.readUnsignedInteger();
    reader.readUnsignedInteger(); // LogicBoolSenderComponent data length.
    const updatedValue = reader.readUnsignedInteger();
    const changedExternally = reader.readUnsignedInteger();
    const identifier = reader.readUnsignedInteger();
    const value = reader.readBoolean();

    expect(hash).toStrictEqual(componentHash);
    expect(updatedValue).toStrictEqual(componentProps.updatedValue);
    expect(changedExternally).toStrictEqual(componentProps.changedExternally);
    expect(identifier).toStrictEqual(componentProps.identifier);
    expect(value).toStrictEqual(componentProps.value);
  });
});
