import { PhysicalMaterialPartComponent } from './PhysicalMaterialPartComponent.js';
import { BinaryData } from '../BinaryData.js';
import { BinaryReader } from '../BinaryReader.js';
import { BinaryWriter } from '../BinaryWriter.js';
import { Prefab } from '../Prefab.js';
import { ComponentHash } from '../types/ComponentHash.js';

const componentHash = ComponentHash.PhysicalMaterialPart;
const componentName = 'PhysicalMaterialPart';
const componentVersion = 1;
const componentProps = {
  materialHash: 1337
};

describe('new PhysicalMaterialPartComponent()', () => {
  describe('when given the required props', () => {
    it('returns an instance of the PhysicalMaterialPartComponent class', () => {
      const component = new PhysicalMaterialPartComponent({ version: componentVersion });

      expect(component).toBeInstanceOf(PhysicalMaterialPartComponent);
      expect(component.hash).toStrictEqual(componentHash);
      expect(component.name).toStrictEqual(componentName);
      expect(component.version).toStrictEqual(componentVersion);
    });
  });

  describe('when given additional props', () => {
    it('returns an instance of the PhysicalMaterialPartComponent class', () => {
      const component = new PhysicalMaterialPartComponent({ version: componentVersion, ...componentProps });

      expect(component).toBeInstanceOf(PhysicalMaterialPartComponent);
      expect(component.hash).toStrictEqual(componentHash);
      expect(component.name).toStrictEqual(componentName);
      expect(component.version).toStrictEqual(componentVersion);
      expect(component.materialHash).toStrictEqual(componentProps.materialHash);
    });
  });
});

describe('PhysicalMaterialPartComponent.fromBinary()', () => {
  let fastForwardedReader: BinaryReader;

  const prefab = new Prefab('Grass_Clump', {
    components: {
      PhysicalMaterialPart: new PhysicalMaterialPartComponent({ version: componentVersion, ...componentProps })
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
    reader.readUnsignedInteger(); // PhysicalMaterialPartComponent hash.
    reader.readUnsignedInteger(); // PhysicalMaterialPartComponent data length.

    fastForwardedReader = reader;
  });

  it('returns an instance of the PhysicalMaterialPartComponent class', () => {
    const component = PhysicalMaterialPartComponent.fromBinary(fastForwardedReader, componentVersion);

    expect(component).toBeInstanceOf(PhysicalMaterialPartComponent);
    expect(component.hash).toStrictEqual(componentHash);
    expect(component.name).toStrictEqual(componentName);
    expect(component.version).toStrictEqual(componentVersion);
    expect(component.materialHash).toStrictEqual(componentProps.materialHash);
  });
});

describe('PhysicalMaterialPartComponent.toBinary()', () => {
  it('returns a BinaryString representation of the component', () => {
    const component = new PhysicalMaterialPartComponent({ version: componentVersion, ...componentProps });

    const data = component.toBinary();

    const expectedData = '00000000000000000000010100111001';

    expect(data).toStrictEqual(expectedData);
  });
});

describe('PhysicalMaterialPartComponent.write()', () => {
  it('writes a BinaryString representation of the component to the given BinaryWriter, including component hash and data length', () => {
    const component = new PhysicalMaterialPartComponent({ version: componentVersion, ...componentProps });

    const writer = new BinaryWriter();
    component.write(writer);

    const data = writer.flush();

    const expectedData =
      '000100000011100101000100011001010000000000000000000000000010000000000000000000000000010100111001';

    expect(data).toStrictEqual(expectedData);

    const reader = new BinaryReader(data);

    const hash = reader.readUnsignedInteger();
    reader.readUnsignedInteger(); // PhysicalMaterialPartComponent data length.
    const materialHash = reader.readUnsignedInteger();

    expect(hash).toStrictEqual(componentHash);
    expect(materialHash).toStrictEqual(componentProps.materialHash);
  });
});
