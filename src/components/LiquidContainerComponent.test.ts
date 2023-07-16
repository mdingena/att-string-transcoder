import { BinaryData } from '../BinaryData.js';
import { BinaryReader } from '../BinaryReader.js';
import { BinaryWriter } from '../BinaryWriter.js';
import { Prefab } from '../Prefab.js';
import { ComponentHash } from '../types/ComponentHash.js';
import { PresetHash } from '../types/PresetHash.js';

import { LiquidContainerComponent, type LiquidContainerComponentProps } from './LiquidContainerComponent.js';

const componentHash = ComponentHash.LiquidContainer;
const componentName = 'LiquidContainer';
const componentVersion = 1;

const effect = {
  hash: 420,
  strengthMultiplier: 69
};

const customData = {
  color: { r: 0, g: 111, b: 222, a: 128 },
  isConsumableThroughSkin: false,
  visualDataHash: 1337,
  effects: [effect],
  foodChunks: [1337, 420, 69]
};

const componentProps: LiquidContainerComponentProps = {
  canAddTo: true,
  canRemoveFrom: true,
  contentLevel: 42,
  hasContent: true,
  isCustom: true,
  presetHash: 0,
  customData
};

beforeEach(() => {
  customData.effects = [effect];
  componentProps.customData = customData;
});

describe('new LiquidContainerComponent()', () => {
  describe('when given the required props', () => {
    it('returns an instance of the LiquidContainerComponent class', () => {
      const component = new LiquidContainerComponent({ version: componentVersion });

      expect(component).toBeInstanceOf(LiquidContainerComponent);
      expect(component.hash).toStrictEqual(componentHash);
      expect(component.name).toStrictEqual(componentName);
      expect(component.version).toStrictEqual(componentVersion);
    });
  });

  describe('when given additional props', () => {
    it('returns an instance of the LiquidContainerComponent class', () => {
      const component = new LiquidContainerComponent({ version: componentVersion, ...componentProps });

      expect(component).toBeInstanceOf(LiquidContainerComponent);
      expect(component.hash).toStrictEqual(componentHash);
      expect(component.name).toStrictEqual(componentName);
      expect(component.version).toStrictEqual(componentVersion);
      expect(component.canAddTo).toStrictEqual(componentProps.canAddTo);
      expect(component.canRemoveFrom).toStrictEqual(componentProps.canRemoveFrom);
      expect(component.contentLevel).toStrictEqual(componentProps.contentLevel);
      expect(component.hasContent).toStrictEqual(componentProps.hasContent);
      expect(component.isCustom).toStrictEqual(componentProps.isCustom);
      expect(component.presetHash).toStrictEqual(componentProps.presetHash);
      expect(component.customData).toStrictEqual(componentProps.customData);
    });
  });
});

describe('LiquidContainerComponent.fromBinary()', () => {
  describe('when all component props are given', () => {
    let fastForwardedReader: BinaryReader;

    const prefab = new Prefab('Grass_Clump', {
      components: {
        LiquidContainer: new LiquidContainerComponent({ version: componentVersion, ...componentProps })
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
      reader.readUnsignedInteger(); // LiquidContainerComponent hash.
      reader.readUnsignedInteger(); // LiquidContainerComponent data length.

      fastForwardedReader = reader;
    });

    it('returns an instance of the LiquidContainerComponent class', () => {
      const component = LiquidContainerComponent.fromBinary(fastForwardedReader, componentVersion);

      expect(component).toBeInstanceOf(LiquidContainerComponent);
      expect(component.hash).toStrictEqual(componentHash);
      expect(component.name).toStrictEqual(componentName);
      expect(component.version).toStrictEqual(componentVersion);
      expect(component.canAddTo).toStrictEqual(componentProps.canAddTo);
      expect(component.canRemoveFrom).toStrictEqual(componentProps.canRemoveFrom);
      expect(component.contentLevel).toStrictEqual(componentProps.contentLevel);
      expect(component.hasContent).toStrictEqual(componentProps.hasContent);
      expect(component.isCustom).toStrictEqual(componentProps.isCustom);
      expect(component.presetHash).toStrictEqual(componentProps.presetHash);
      expect(component.customData).toStrictEqual(componentProps.customData);
    });
  });

  describe('when CustomData is null', () => {
    let fastForwardedReader: BinaryReader;

    beforeEach(() => {
      componentProps.isCustom = false;
      componentProps.presetHash = PresetHash.TeleportationPotion;
      componentProps.customData = null;

      const prefab = new Prefab('Grass_Clump', {
        components: {
          LiquidContainer: new LiquidContainerComponent({ version: componentVersion, ...componentProps })
        }
      });

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
      reader.readUnsignedInteger(); // LiquidContainerComponent hash.
      reader.readUnsignedInteger(); // LiquidContainerComponent data length.

      fastForwardedReader = reader;
    });

    afterEach(() => {
      componentProps.isCustom = true;
      componentProps.presetHash = 0;
      componentProps.customData = customData;
    });

    it('returns an instance of the LiquidContainerComponent class', () => {
      const component = LiquidContainerComponent.fromBinary(fastForwardedReader, componentVersion);

      expect(component).toBeInstanceOf(LiquidContainerComponent);
      expect(component.hash).toStrictEqual(componentHash);
      expect(component.name).toStrictEqual(componentName);
      expect(component.version).toStrictEqual(componentVersion);
      expect(component.canAddTo).toStrictEqual(componentProps.canAddTo);
      expect(component.canRemoveFrom).toStrictEqual(componentProps.canRemoveFrom);
      expect(component.contentLevel).toStrictEqual(componentProps.contentLevel);
      expect(component.hasContent).toStrictEqual(componentProps.hasContent);
      expect(component.isCustom).toStrictEqual(componentProps.isCustom);
      expect(component.presetHash).toStrictEqual(componentProps.presetHash);
      expect(component.customData).toStrictEqual(componentProps.customData);
    });
  });

  describe('when effect is null', () => {
    let fastForwardedReader: BinaryReader;

    beforeEach(() => {
      componentProps.customData = {
        ...customData,
        effects: [null, effect]
      };

      const prefab = new Prefab('Grass_Clump', {
        components: {
          LiquidContainer: new LiquidContainerComponent({ version: componentVersion, ...componentProps })
        }
      });

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
      reader.readUnsignedInteger(); // LiquidContainerComponent hash.
      reader.readUnsignedInteger(); // LiquidContainerComponent data length.

      fastForwardedReader = reader;
    });

    afterEach(() => {
      componentProps.customData = customData;
    });

    it('returns an instance of the LiquidContainerComponent class', () => {
      const component = LiquidContainerComponent.fromBinary(fastForwardedReader, componentVersion);

      expect(component).toBeInstanceOf(LiquidContainerComponent);
      expect(component.hash).toStrictEqual(componentHash);
      expect(component.name).toStrictEqual(componentName);
      expect(component.version).toStrictEqual(componentVersion);
      expect(component.canAddTo).toStrictEqual(componentProps.canAddTo);
      expect(component.canRemoveFrom).toStrictEqual(componentProps.canRemoveFrom);
      expect(component.contentLevel).toStrictEqual(componentProps.contentLevel);
      expect(component.hasContent).toStrictEqual(componentProps.hasContent);
      expect(component.isCustom).toStrictEqual(componentProps.isCustom);
      expect(component.presetHash).toStrictEqual(componentProps.presetHash);
      expect(component.customData).toStrictEqual(componentProps.customData);
    });
  });
});

describe('LiquidContainerComponent.toBinary()', () => {
  it('returns a BinaryString representation of the component', () => {
    const component = new LiquidContainerComponent({ version: componentVersion, ...componentProps });

    const data = component.toBinary();

    const expectedData =
      '11100000000000000000000000001010101100000000000000000000000000000000000000000000000000000000000000000010000101101111000000000000000000100001101011110000000000000000001000011000000000000000000000000000000000000000000000010100111001000000000000000000000000000000010000000000000000000000001101001000100001010001010000000000000000000000000000000000000000000000011000000000000000000000101001110010000000000000000000000011010010000000000000000000000000001000101';

    expect(data).toStrictEqual(expectedData);
  });
});

describe('LiquidContainerComponent.write()', () => {
  it('writes a BinaryString representation of the component to the given BinaryWriter, including component hash and data length', () => {
    const component = new LiquidContainerComponent({ version: componentVersion, ...componentProps });

    const writer = new BinaryWriter();
    component.write(writer);

    const data = writer.flush();

    const expectedData =
      '111110010001101011110110001100110000000000000000000000011100011111100000000000000000000000001010101100000000000000000000000000000000000000000000000000000000000000000010000101101111000000000000000000100001101011110000000000000000001000011000000000000000000000000000000000000000000000010100111001000000000000000000000000000000010000000000000000000000001101001000100001010001010000000000000000000000000000000000000000000000011000000000000000000000101001110010000000000000000000000011010010000000000000000000000000001000101';

    expect(data).toStrictEqual(expectedData);

    const reader = new BinaryReader(data);

    const hash = reader.readUnsignedInteger();
    reader.readUnsignedInteger(); // LiquidContainerComponent data length.
    const canAddTo = reader.readBoolean();
    const canRemoveFrom = reader.readBoolean();
    const contentLevel = reader.readSignedInteger();
    const hasContent = reader.readBoolean();
    const isCustom = reader.readBoolean();
    const presetHash = reader.readUnsignedInteger();
    const customDataNullBit = reader.readBoolean();
    const r = reader.readFloat();
    const g = reader.readFloat();
    const b = reader.readFloat();
    const a = reader.readFloat();

    expect(hash).toStrictEqual(componentHash);
    expect(canAddTo).toStrictEqual(componentProps.canAddTo);
    expect(canRemoveFrom).toStrictEqual(componentProps.canRemoveFrom);
    expect(contentLevel).toStrictEqual(componentProps.contentLevel);
    expect(hasContent).toStrictEqual(componentProps.hasContent);
    expect(isCustom).toStrictEqual(componentProps.isCustom);
    expect(presetHash).toStrictEqual(componentProps.presetHash);
    expect(customDataNullBit).toStrictEqual(false);
    expect(r).toStrictEqual(componentProps.customData?.color.r);
    expect(g).toStrictEqual(componentProps.customData?.color.g);
    expect(b).toStrictEqual(componentProps.customData?.color.b);
    expect(a).toStrictEqual(componentProps.customData?.color.a);
  });
});
