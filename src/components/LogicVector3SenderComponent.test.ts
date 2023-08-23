import { BinaryData } from '../BinaryData.js';
import { BinaryReader } from '../BinaryReader.js';
import { BinaryWriter } from '../BinaryWriter.js';
import { Prefab } from '../Prefab.js';
import { ComponentHash } from '../types/ComponentHash.js';

import { LogicVector3SenderComponent } from './LogicVector3SenderComponent.js';

const componentHash = ComponentHash.LogicVector3Sender;
const componentName = 'LogicVector3Sender';
const componentVersion = 1;
const componentProps = {
  updatedValue: 1337,
  changedExternally: 420,
  identifier: 69,
  value: { x: 69, y: 420, z: 1337 }
};

describe('new LogicVector3SenderComponent()', () => {
  describe('when given the required props', () => {
    it('returns an instance of the LogicVector3SenderComponent class', () => {
      const component = new LogicVector3SenderComponent({ version: componentVersion });

      expect(component).toBeInstanceOf(LogicVector3SenderComponent);
      expect(component.hash).toStrictEqual(componentHash);
      expect(component.name).toStrictEqual(componentName);
      expect(component.version).toStrictEqual(componentVersion);
    });
  });

  describe('when given additional props', () => {
    it('returns an instance of the LogicVector3SenderComponent class', () => {
      const component = new LogicVector3SenderComponent({ version: componentVersion, ...componentProps });

      expect(component).toBeInstanceOf(LogicVector3SenderComponent);
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

describe('LogicVector3SenderComponent.fromBinary()', () => {
  let fastForwardedReader: BinaryReader;

  const prefab = new Prefab('MRK_Small_Lever', {
    components: {
      LogicVector3Sender: new LogicVector3SenderComponent({ version: componentVersion, ...componentProps })
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
    reader.readUnsignedInteger(); // LogicVector3SenderComponent hash.
    reader.readUnsignedInteger(); // LogicVector3SenderComponent data length.

    fastForwardedReader = reader;
  });

  it('returns an instance of the LogicVector3SenderComponent class', () => {
    const component = LogicVector3SenderComponent.fromBinary(fastForwardedReader, componentVersion);

    expect(component).toBeInstanceOf(LogicVector3SenderComponent);
    expect(component.hash).toStrictEqual(componentHash);
    expect(component.name).toStrictEqual(componentName);
    expect(component.version).toStrictEqual(componentVersion);
    expect(component.updatedValue).toStrictEqual(componentProps.updatedValue);
    expect(component.changedExternally).toStrictEqual(componentProps.changedExternally);
    expect(component.identifier).toStrictEqual(componentProps.identifier);
    expect(component.value).toStrictEqual(componentProps.value);
  });
});

describe('LogicVector3SenderComponent.toBinary()', () => {
  it('returns a BinaryString representation of the component', () => {
    const component = new LogicVector3SenderComponent({ version: componentVersion, ...componentProps });

    const data = component.toBinary();

    const expectedData =
      '000000000000000000000101001110010000000000000000000000011010010000000000000000000000000001000101010000101000101000000000000000000100001111010010000000000000000001000100101001110010000000000000';

    expect(data).toStrictEqual(expectedData);
  });
});

describe('LogicVector3SenderComponent.write()', () => {
  it('writes a BinaryString representation of the component to the given BinaryWriter, including component hash and data length', () => {
    const component = new LogicVector3SenderComponent({ version: componentVersion, ...componentProps });

    const writer = new BinaryWriter();
    component.write(writer);

    const data = writer.flush();

    const expectedData =
      '0111100011001101101001111011001100000000000000000000000011000000000000000000000000000101001110010000000000000000000000011010010000000000000000000000000001000101010000101000101000000000000000000100001111010010000000000000000001000100101001110010000000000000';

    expect(data).toStrictEqual(expectedData);

    const reader = new BinaryReader(data);

    const hash = reader.readUnsignedInteger();
    reader.readUnsignedInteger(); // LogicVector3SenderComponent data length.
    const updatedValue = reader.readUnsignedInteger();
    const changedExternally = reader.readUnsignedInteger();
    const identifier = reader.readUnsignedInteger();
    const value = {
      x: reader.readFloat(),
      y: reader.readFloat(),
      z: reader.readFloat()
    };

    expect(hash).toStrictEqual(componentHash);
    expect(updatedValue).toStrictEqual(componentProps.updatedValue);
    expect(changedExternally).toStrictEqual(componentProps.changedExternally);
    expect(identifier).toStrictEqual(componentProps.identifier);
    expect(value).toStrictEqual(componentProps.value);
  });
});
