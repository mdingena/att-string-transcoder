import { BinaryData } from '../BinaryData.js';
import { BinaryReader } from '../BinaryReader.js';
import { BinaryWriter } from '../BinaryWriter.js';
import { Prefab } from '../Prefab.js';
import { ComponentHash } from '../types/ComponentHash.js';

import { PickupDockComponent } from './PickupDockComponent.js';

const componentHash = ComponentHash.PickupDock;
const componentName = 'PickupDock';
const componentVersion = 2;
const componentProps = {
  dockedTypeHash: 1337,
  quantity: -420,
  childIndex: -69
};

describe('new PickupDockComponent()', () => {
  describe('when given the required props', () => {
    it('returns an instance of the PickupDockComponent class', () => {
      const component = new PickupDockComponent({ version: componentVersion });

      expect(component).toBeInstanceOf(PickupDockComponent);
      expect(component.hash).toStrictEqual(componentHash);
      expect(component.name).toStrictEqual(componentName);
      expect(component.version).toStrictEqual(componentVersion);
    });
  });

  describe('when given additional props', () => {
    it('returns an instance of the PickupDockComponent class', () => {
      const component = new PickupDockComponent({ version: componentVersion, ...componentProps });

      expect(component).toBeInstanceOf(PickupDockComponent);
      expect(component.hash).toStrictEqual(componentHash);
      expect(component.name).toStrictEqual(componentName);
      expect(component.version).toStrictEqual(componentVersion);
      expect(component.dockedTypeHash).toStrictEqual(componentProps.dockedTypeHash);
      expect(component.quantity).toStrictEqual(componentProps.quantity);
      expect(component.childIndex).toStrictEqual(componentProps.childIndex);
    });
  });
});

describe('PickupDockComponent.fromBinary()', () => {
  let fastForwardedReader: BinaryReader;

  const prefab = new Prefab('Grass_Clump', {
    components: {
      PickupDock: new PickupDockComponent({ version: componentVersion, ...componentProps })
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
    reader.readUnsignedInteger(); // PickupDockComponent hash.
    reader.readUnsignedInteger(); // PickupDockComponent data length.

    fastForwardedReader = reader;
  });

  it('returns an instance of the PickupDockComponent class', () => {
    const component = PickupDockComponent.fromBinary(fastForwardedReader, componentVersion);

    expect(component).toBeInstanceOf(PickupDockComponent);
    expect(component.hash).toStrictEqual(componentHash);
    expect(component.name).toStrictEqual(componentName);
    expect(component.version).toStrictEqual(componentVersion);
    expect(component.dockedTypeHash).toStrictEqual(componentProps.dockedTypeHash);
    expect(component.quantity).toStrictEqual(componentProps.quantity);
    expect(component.childIndex).toStrictEqual(componentProps.childIndex);
  });
});

describe('PickupDockComponent.toBinary()', () => {
  it('returns a BinaryString representation of the component', () => {
    const component = new PickupDockComponent({ version: componentVersion, ...componentProps });

    const data = component.toBinary();

    const expectedData =
      '000000000000000000000101001110010111111111111111111111100101110001111111111111111111111110111011';

    expect(data).toStrictEqual(expectedData);
  });
});

describe('PickupDockComponent.write()', () => {
  it('writes a BinaryString representation of the component to the given BinaryWriter, including component hash and data length', () => {
    const component = new PickupDockComponent({ version: componentVersion, ...componentProps });

    const writer = new BinaryWriter();
    component.write(writer);

    const data = writer.flush();

    const expectedData =
      '1001101010000010011111001110001100000000000000000000000001100000000000000000000000000101001110010111111111111111111111100101110001111111111111111111111110111011';

    expect(data).toStrictEqual(expectedData);

    const reader = new BinaryReader(data);

    const hash = reader.readUnsignedInteger();
    reader.readUnsignedInteger(); // PickupDockComponent data length.
    const dockedTypeHash = reader.readUnsignedInteger();
    const quantity = reader.readSignedInteger();
    const childIndex = reader.readSignedInteger();

    expect(hash).toStrictEqual(componentHash);
    expect(dockedTypeHash).toStrictEqual(componentProps.dockedTypeHash);
    expect(quantity).toStrictEqual(componentProps.quantity);
    expect(childIndex).toStrictEqual(componentProps.childIndex);
  });
});
