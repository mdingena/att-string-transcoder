import { BinaryData } from '../BinaryData.js';
import { BinaryReader } from '../BinaryReader.js';
import { BinaryWriter } from '../BinaryWriter.js';
import { Prefab } from '../Prefab.js';
import { ComponentHash } from '../types/ComponentHash.js';
import { LogicOperator } from '../types/LogicOperator.js';

import { LogicGateReceiverComponent } from './LogicGateReceiverComponent.js';

const componentHash = ComponentHash.LogicGateReceiver;
const componentName = 'LogicGateReceiver';
const componentVersion = 2;
const componentProps = {
  senders: [69, 420, 1337],
  operationType: LogicOperator.Xor,
  isInversedOutputSaved: true
};

describe('new LogicGateReceiverComponent()', () => {
  describe('when given the required props', () => {
    it('returns an instance of the LogicGateReceiverComponent class', () => {
      const component = new LogicGateReceiverComponent({ version: componentVersion });

      expect(component).toBeInstanceOf(LogicGateReceiverComponent);
      expect(component.hash).toStrictEqual(componentHash);
      expect(component.name).toStrictEqual(componentName);
      expect(component.version).toStrictEqual(componentVersion);
    });
  });

  describe('when given additional props', () => {
    it('returns an instance of the LogicGateReceiverComponent class', () => {
      const component = new LogicGateReceiverComponent({ version: componentVersion, ...componentProps });

      expect(component).toBeInstanceOf(LogicGateReceiverComponent);
      expect(component.hash).toStrictEqual(componentHash);
      expect(component.name).toStrictEqual(componentName);
      expect(component.version).toStrictEqual(componentVersion);
      expect(component.senders).toStrictEqual(componentProps.senders);
      expect(component.operationType).toStrictEqual(componentProps.operationType);
      expect(component.isInversedOutputSaved).toStrictEqual(componentProps.isInversedOutputSaved);
    });
  });
});

describe('LogicGateReceiverComponent.fromBinary()', () => {
  let fastForwardedReader: BinaryReader;

  const prefab = new Prefab('MRK_Small_Lever', {
    components: {
      LogicGateReceiver: new LogicGateReceiverComponent({ version: componentVersion, ...componentProps })
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
    reader.readUnsignedInteger(); // LogicGateReceiverComponent hash.
    reader.readUnsignedInteger(); // LogicGateReceiverComponent data length.

    fastForwardedReader = reader;
  });

  it('returns an instance of the LogicGateReceiverComponent class', () => {
    const component = LogicGateReceiverComponent.fromBinary(fastForwardedReader, componentVersion);

    expect(component).toBeInstanceOf(LogicGateReceiverComponent);
    expect(component.hash).toStrictEqual(componentHash);
    expect(component.name).toStrictEqual(componentName);
    expect(component.version).toStrictEqual(componentVersion);
    expect(component.senders).toStrictEqual(componentProps.senders);
    expect(component.operationType).toStrictEqual(componentProps.operationType);
    expect(component.isInversedOutputSaved).toStrictEqual(componentProps.isInversedOutputSaved);
  });
});

describe('LogicGateReceiverComponent.toBinary()', () => {
  it('returns a BinaryString representation of the component', () => {
    const component = new LogicGateReceiverComponent({ version: componentVersion, ...componentProps });

    const data = component.toBinary();

    const expectedData =
      '00000000000000000000000000000011000000000000000000000000010001010000000000000000000000011010010000000000000000000000010100111001100000000000000000000000000000101';

    expect(data).toStrictEqual(expectedData);
  });
});

describe('LogicGateReceiverComponent.write()', () => {
  it('writes a BinaryString representation of the component to the given BinaryWriter, including component hash and data length', () => {
    const component = new LogicGateReceiverComponent({ version: componentVersion, ...componentProps });

    const writer = new BinaryWriter();
    component.write(writer);

    const data = writer.flush();

    const expectedData =
      '010100101111001111111000000011100000000000000000000000001010000100000000000000000000000000000011000000000000000000000000010001010000000000000000000000011010010000000000000000000000010100111001100000000000000000000000000000101';

    expect(data).toStrictEqual(expectedData);

    const reader = new BinaryReader(data);

    const hash = reader.readUnsignedInteger();
    reader.readUnsignedInteger(); // LogicGateReceiverComponent data length.
    reader.readUnsignedInteger(); // Senders array length.
    const sender1 = reader.readUnsignedInteger();
    const sender2 = reader.readUnsignedInteger();
    const sender3 = reader.readUnsignedInteger();
    const operationType = reader.readSignedInteger();
    const isInversedOutputSaved = reader.readBoolean();

    expect(hash).toStrictEqual(componentHash);
    expect(sender1).toStrictEqual(componentProps.senders[0]);
    expect(sender2).toStrictEqual(componentProps.senders[1]);
    expect(sender3).toStrictEqual(componentProps.senders[2]);
    expect(operationType).toStrictEqual(componentProps.operationType);
    expect(isInversedOutputSaved).toStrictEqual(componentProps.isInversedOutputSaved);
  });
});
