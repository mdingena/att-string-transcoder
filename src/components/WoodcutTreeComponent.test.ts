import { WoodcutTreeComponent } from './WoodcutTreeComponent.js';
import { BinaryData } from '../BinaryData.js';
import { BinaryReader } from '../BinaryReader.js';
import { BinaryWriter } from '../BinaryWriter.js';
import { Prefab } from '../Prefab.js';
import { ComponentHash } from '../types/ComponentHash.js';
import { SpeciesHash } from '../types/SpeciesHash.js';

const componentHash = ComponentHash.WoodcutTree;
const componentName = 'WoodcutTree';
const componentVersion = 3;
const componentProps = {
  presetHash: 0,
  speciesHash: SpeciesHash.Walnut
};

describe('new WoodcutTreeComponent()', () => {
  describe('when given the required props', () => {
    it('returns an instance of the WoodcutTreeComponent class', () => {
      const component = new WoodcutTreeComponent({ version: componentVersion });

      expect(component).toBeInstanceOf(WoodcutTreeComponent);
      expect(component.hash).toStrictEqual(componentHash);
      expect(component.name).toStrictEqual(componentName);
      expect(component.version).toStrictEqual(componentVersion);
    });
  });

  describe('when given additional props', () => {
    it('returns an instance of the WoodcutTreeComponent class', () => {
      const component = new WoodcutTreeComponent({ version: componentVersion, ...componentProps });

      expect(component).toBeInstanceOf(WoodcutTreeComponent);
      expect(component.hash).toStrictEqual(componentHash);
      expect(component.name).toStrictEqual(componentName);
      expect(component.version).toStrictEqual(componentVersion);
      expect(component.presetHash).toStrictEqual(componentProps.presetHash);
      expect(component.speciesHash).toStrictEqual(componentProps.speciesHash);
    });
  });
});

describe('WoodcutTreeComponent.fromBinary()', () => {
  let fastForwardedReader: BinaryReader;

  const prefab = new Prefab('Grass_Clump', {
    components: {
      WoodcutTree: new WoodcutTreeComponent({ version: componentVersion, ...componentProps })
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
    reader.readUnsignedInteger(); // WoodcutTreeComponent hash.
    reader.readUnsignedInteger(); // WoodcutTreeComponent data length.

    fastForwardedReader = reader;
  });

  it('returns an instance of the WoodcutTreeComponent class', () => {
    const component = WoodcutTreeComponent.fromBinary(fastForwardedReader, componentVersion);

    expect(component).toBeInstanceOf(WoodcutTreeComponent);
    expect(component.hash).toStrictEqual(componentHash);
    expect(component.name).toStrictEqual(componentName);
    expect(component.version).toStrictEqual(componentVersion);
    expect(component.presetHash).toStrictEqual(componentProps.presetHash);
    expect(component.speciesHash).toStrictEqual(componentProps.speciesHash);
  });
});

describe('WoodcutTreeComponent.toBinary()', () => {
  it('returns a BinaryString representation of the component', () => {
    const component = new WoodcutTreeComponent({ version: componentVersion, ...componentProps });

    const data = component.toBinary();

    const expectedData = '0000000000000000000000000000000000000000000000000110110110001100';

    expect(data).toStrictEqual(expectedData);
  });
});

describe('WoodcutTreeComponent.write()', () => {
  it('writes a BinaryString representation of the component to the given BinaryWriter, including component hash and data length', () => {
    const component = new WoodcutTreeComponent({ version: componentVersion, ...componentProps });

    const writer = new BinaryWriter();
    component.write(writer);

    const data = writer.flush();

    const expectedData =
      '01000001011100101110101010001111000000000000000000000000010000000000000000000000000000000000000000000000000000000110110110001100';

    expect(data).toStrictEqual(expectedData);

    const reader = new BinaryReader(data);

    const hash = reader.readUnsignedInteger();
    reader.readUnsignedInteger(); // WoodcutTreeComponent data length.
    const presetHash = reader.readUnsignedInteger();
    const speciesHash = reader.readUnsignedInteger();

    expect(hash).toStrictEqual(componentHash);
    expect(presetHash).toStrictEqual(componentProps.presetHash);
    expect(speciesHash).toStrictEqual(componentProps.speciesHash);
  });
});
