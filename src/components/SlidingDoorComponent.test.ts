import { BinaryData } from '../BinaryData.js';
import { BinaryReader } from '../BinaryReader.js';
import { BinaryWriter } from '../BinaryWriter.js';
import { Prefab } from '../Prefab.js';
import { ComponentHash } from '../types/ComponentHash.js';

import { SlidingDoorComponent } from './SlidingDoorComponent.js';

const componentHash = ComponentHash.SlidingDoor;
const componentName = 'SlidingDoor';
const componentVersion = 1;
const componentProps = {
  isOpen: true
};

describe('new SlidingDoorComponent()', () => {
  describe('when given the required props', () => {
    it('returns an instance of the SlidingDoorComponent class', () => {
      const component = new SlidingDoorComponent({ version: componentVersion });

      expect(component).toBeInstanceOf(SlidingDoorComponent);
      expect(component.hash).toStrictEqual(componentHash);
      expect(component.name).toStrictEqual(componentName);
      expect(component.version).toStrictEqual(componentVersion);
    });
  });

  describe('when given additional props', () => {
    it('returns an instance of the SlidingDoorComponent class', () => {
      const component = new SlidingDoorComponent({ version: componentVersion, ...componentProps });

      expect(component).toBeInstanceOf(SlidingDoorComponent);
      expect(component.hash).toStrictEqual(componentHash);
      expect(component.name).toStrictEqual(componentName);
      expect(component.version).toStrictEqual(componentVersion);
      expect(component.isOpen).toStrictEqual(componentProps.isOpen);
    });
  });
});

describe('SlidingDoorComponent.fromBinary()', () => {
  let fastForwardedReader: BinaryReader;

  const prefab = new Prefab('Grass_Clump', {
    components: {
      SlidingDoor: new SlidingDoorComponent({ version: componentVersion, ...componentProps })
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
    reader.readUnsignedInteger(); // SlidingDoorComponent hash.
    reader.readUnsignedInteger(); // SlidingDoorComponent data length.

    fastForwardedReader = reader;
  });

  it('returns an instance of the SlidingDoorComponent class', () => {
    const component = SlidingDoorComponent.fromBinary(fastForwardedReader, componentVersion);

    expect(component).toBeInstanceOf(SlidingDoorComponent);
    expect(component.hash).toStrictEqual(componentHash);
    expect(component.name).toStrictEqual(componentName);
    expect(component.version).toStrictEqual(componentVersion);
    expect(component.isOpen).toStrictEqual(componentProps.isOpen);
  });
});

describe('SlidingDoorComponent.toBinary()', () => {
  it('returns a BinaryString representation of the component', () => {
    const component = new SlidingDoorComponent({ version: componentVersion, ...componentProps });

    const data = component.toBinary();

    const expectedData = '1';

    expect(data).toStrictEqual(expectedData);
  });
});

describe('SlidingDoorComponent.write()', () => {
  it('writes a BinaryString representation of the component to the given BinaryWriter, including component hash and data length', () => {
    const component = new SlidingDoorComponent({ version: componentVersion, ...componentProps });

    const writer = new BinaryWriter();
    component.write(writer);

    const data = writer.flush();

    const expectedData = '11010101100101110100110110010100000000000000000000000000000000011';

    expect(data).toStrictEqual(expectedData);

    const reader = new BinaryReader(data);

    const hash = reader.readUnsignedInteger();
    reader.readUnsignedInteger(); // SlidingDoorComponent data length.
    const isOpen = reader.readBoolean();

    expect(hash).toStrictEqual(componentHash);
    expect(isOpen).toStrictEqual(componentProps.isOpen);
  });
});
