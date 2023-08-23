import { BinaryData } from '../BinaryData.js';
import { BinaryReader } from '../BinaryReader.js';
import { BinaryWriter } from '../BinaryWriter.js';
import { Prefab } from '../Prefab.js';
import { ComponentHash } from '../types/ComponentHash.js';

import { LogicIntReceiverComponent } from './LogicIntReceiverComponent.js';

const componentHash = ComponentHash.LogicIntReceiver;
const componentName = 'LogicIntReceiver';
const componentVersion = 1;
const componentProps = {
  sender: 1337
};

describe('new LogicIntReceiverComponent()', () => {
  describe('when given the required props', () => {
    it('returns an instance of the LogicIntReceiverComponent class', () => {
      const component = new LogicIntReceiverComponent({ version: componentVersion });

      expect(component).toBeInstanceOf(LogicIntReceiverComponent);
      expect(component.hash).toStrictEqual(componentHash);
      expect(component.name).toStrictEqual(componentName);
      expect(component.version).toStrictEqual(componentVersion);
    });
  });

  describe('when given additional props', () => {
    it('returns an instance of the LogicIntReceiverComponent class', () => {
      const component = new LogicIntReceiverComponent({ version: componentVersion, ...componentProps });

      expect(component).toBeInstanceOf(LogicIntReceiverComponent);
      expect(component.hash).toStrictEqual(componentHash);
      expect(component.name).toStrictEqual(componentName);
      expect(component.version).toStrictEqual(componentVersion);
      expect(component.sender).toStrictEqual(componentProps.sender);
    });
  });
});

describe('LogicIntReceiverComponent.fromBinary()', () => {
  let fastForwardedReader: BinaryReader;

  const prefab = new Prefab('MRK_Small_Lever', {
    components: {
      LogicIntReceiver: new LogicIntReceiverComponent({ version: componentVersion, ...componentProps })
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
    reader.readUnsignedInteger(); // LogicIntReceiverComponent hash.
    reader.readUnsignedInteger(); // LogicIntReceiverComponent data length.

    fastForwardedReader = reader;
  });

  it('returns an instance of the LogicIntReceiverComponent class', () => {
    const component = LogicIntReceiverComponent.fromBinary(fastForwardedReader, componentVersion);

    expect(component).toBeInstanceOf(LogicIntReceiverComponent);
    expect(component.hash).toStrictEqual(componentHash);
    expect(component.name).toStrictEqual(componentName);
    expect(component.version).toStrictEqual(componentVersion);
    expect(component.sender).toStrictEqual(componentProps.sender);
  });
});

describe('LogicIntReceiverComponent.toBinary()', () => {
  it('returns a BinaryString representation of the component', () => {
    const component = new LogicIntReceiverComponent({ version: componentVersion, ...componentProps });

    const data = component.toBinary();

    const expectedData = '00000000000000000000010100111001';

    expect(data).toStrictEqual(expectedData);
  });
});

describe('LogicIntReceiverComponent.write()', () => {
  it('writes a BinaryString representation of the component to the given BinaryWriter, including component hash and data length', () => {
    const component = new LogicIntReceiverComponent({ version: componentVersion, ...componentProps });

    const writer = new BinaryWriter();
    component.write(writer);

    const data = writer.flush();

    const expectedData =
      '010000000111001010001000101000000000000000000000000000000010000000000000000000000000010100111001';

    expect(data).toStrictEqual(expectedData);

    const reader = new BinaryReader(data);

    const hash = reader.readUnsignedInteger();
    reader.readUnsignedInteger(); // LogicIntReceiverComponent data length.
    const sender = reader.readUnsignedInteger();

    expect(hash).toStrictEqual(componentHash);
    expect(sender).toStrictEqual(componentProps.sender);
  });
});
