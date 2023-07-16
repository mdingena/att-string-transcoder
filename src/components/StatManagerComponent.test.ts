import { BinaryData } from '../BinaryData.js';
import { BinaryReader } from '../BinaryReader.js';
import { BinaryWriter } from '../BinaryWriter.js';
import { Prefab } from '../Prefab.js';
import { ComponentHash } from '../types/ComponentHash.js';

import { StatManagerComponent, type StatManagerComponentProps } from './StatManagerComponent.js';

const componentHash = ComponentHash.StatManager;
const componentName = 'StatManager';
const componentVersion = 2;

const stat = {
  hash: 1337,
  baseFlat: 0.69
};

const timedModifier = {
  hash: 1337,
  value: 0.69,
  isMultiplier: true,
  time: 133742069
};

const indirectModifierSaveData = {
  valueOverDurationHash: 1337,
  baseValue: 0.69,
  duration: 133742069,
  tick: 420
};

const indirectStatModifier = {
  hash: 1337,
  time: 133742069,
  modifiers: [indirectModifierSaveData]
};

const componentProps = {
  stats: [stat],
  modifiers: [timedModifier],
  indirectStatModifiers: [indirectStatModifier]
};

describe('new StatManagerComponent()', () => {
  describe('when given the required props', () => {
    it('returns an instance of the StatManagerComponent class', () => {
      const component = new StatManagerComponent({ version: componentVersion });

      expect(component).toBeInstanceOf(StatManagerComponent);
      expect(component.hash).toStrictEqual(componentHash);
      expect(component.name).toStrictEqual(componentName);
      expect(component.version).toStrictEqual(componentVersion);
    });
  });

  describe('when given additional props', () => {
    it('returns an instance of the StatManagerComponent class', () => {
      const component = new StatManagerComponent({ version: componentVersion, ...componentProps });

      expect(component).toBeInstanceOf(StatManagerComponent);
      expect(component.hash).toStrictEqual(componentHash);
      expect(component.name).toStrictEqual(componentName);
      expect(component.version).toStrictEqual(componentVersion);
      expect(component.stats[0]?.hash).toStrictEqual(componentProps.stats[0]?.hash);
      expect(component.stats[0]?.baseFlat).toBeCloseTo(componentProps.stats[0]?.baseFlat ?? 0, 2);
      expect(component.modifiers[0]?.hash).toStrictEqual(componentProps.modifiers[0]?.hash);
      expect(component.modifiers[0]?.value).toBeCloseTo(componentProps.modifiers[0]?.value ?? 0, 2);
      expect(component.modifiers[0]?.isMultiplier).toStrictEqual(componentProps.modifiers[0]?.isMultiplier);
      expect(component.modifiers[0]?.time).toStrictEqual(componentProps.modifiers[0]?.time);
      expect(component.indirectStatModifiers[0]?.hash).toStrictEqual(componentProps.indirectStatModifiers[0]?.hash);
      expect(component.indirectStatModifiers[0]?.time).toStrictEqual(componentProps.indirectStatModifiers[0]?.time);
      expect(component.indirectStatModifiers[0]?.modifiers[0]?.valueOverDurationHash).toStrictEqual(
        componentProps.indirectStatModifiers[0]?.modifiers[0]?.valueOverDurationHash
      );
      expect(component.indirectStatModifiers[0]?.modifiers[0]?.baseValue).toBeCloseTo(
        componentProps.indirectStatModifiers[0]?.modifiers[0]?.baseValue ?? 0,
        2
      );
      expect(component.indirectStatModifiers[0]?.modifiers[0]?.duration).toStrictEqual(
        componentProps.indirectStatModifiers[0]?.modifiers[0]?.duration
      );
      expect(component.indirectStatModifiers[0]?.modifiers[0]?.tick).toStrictEqual(
        componentProps.indirectStatModifiers[0]?.modifiers[0]?.tick
      );
    });
  });
});

describe('StatManagerComponent.fromBinary()', () => {
  describe('when all component props are given', () => {
    let fastForwardedReader: BinaryReader;

    const prefab = new Prefab('Grass_Clump', {
      components: {
        StatManager: new StatManagerComponent({ version: componentVersion, ...componentProps })
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
      reader.readUnsignedInteger(); // StatManagerComponent hash.
      reader.readUnsignedInteger(); // StatManagerComponent data length.

      fastForwardedReader = reader;
    });

    it('returns an instance of the StatManagerComponent class', () => {
      const component = StatManagerComponent.fromBinary(fastForwardedReader, componentVersion);

      expect(component).toBeInstanceOf(StatManagerComponent);
      expect(component.hash).toStrictEqual(componentHash);
      expect(component.name).toStrictEqual(componentName);
      expect(component.version).toStrictEqual(componentVersion);
      expect(component.stats[0]?.hash).toStrictEqual(componentProps.stats[0]?.hash);
      expect(component.stats[0]?.baseFlat).toBeCloseTo(componentProps.stats[0]?.baseFlat ?? 0, 2);
      expect(component.modifiers[0]?.hash).toStrictEqual(componentProps.modifiers[0]?.hash);
      expect(component.modifiers[0]?.value).toBeCloseTo(componentProps.modifiers[0]?.value ?? 0, 2);
      expect(component.modifiers[0]?.isMultiplier).toStrictEqual(componentProps.modifiers[0]?.isMultiplier);
      expect(component.modifiers[0]?.time).toStrictEqual(componentProps.modifiers[0]?.time);
      expect(component.indirectStatModifiers[0]?.hash).toStrictEqual(componentProps.indirectStatModifiers[0]?.hash);
      expect(component.indirectStatModifiers[0]?.time).toStrictEqual(componentProps.indirectStatModifiers[0]?.time);
      expect(component.indirectStatModifiers[0]?.modifiers[0]?.valueOverDurationHash).toStrictEqual(
        componentProps.indirectStatModifiers[0]?.modifiers[0]?.valueOverDurationHash
      );
      expect(component.indirectStatModifiers[0]?.modifiers[0]?.baseValue).toBeCloseTo(
        componentProps.indirectStatModifiers[0]?.modifiers[0]?.baseValue ?? 0,
        2
      );
      expect(component.indirectStatModifiers[0]?.modifiers[0]?.duration).toStrictEqual(
        componentProps.indirectStatModifiers[0]?.modifiers[0]?.duration
      );
      expect(component.indirectStatModifiers[0]?.modifiers[0]?.tick).toStrictEqual(
        componentProps.indirectStatModifiers[0]?.modifiers[0]?.tick
      );
    });
  });

  describe('when stat is null', () => {
    let fastForwardedReader: BinaryReader;

    beforeEach(() => {
      (componentProps as StatManagerComponentProps).stats = [null];

      const prefab = new Prefab('Grass_Clump', {
        components: {
          StatManager: new StatManagerComponent({ version: componentVersion, ...componentProps })
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
      reader.readUnsignedInteger(); // StatManagerComponent hash.
      reader.readUnsignedInteger(); // StatManagerComponent data length.

      fastForwardedReader = reader;
    });

    afterEach(() => {
      componentProps.stats = [stat];
    });

    it('returns an instance of the StatManagerComponent class', () => {
      const component = StatManagerComponent.fromBinary(fastForwardedReader, componentVersion);

      expect(component).toBeInstanceOf(StatManagerComponent);
      expect(component.hash).toStrictEqual(componentHash);
      expect(component.name).toStrictEqual(componentName);
      expect(component.version).toStrictEqual(componentVersion);
      expect(component.stats[0]).toStrictEqual(null);
      expect(component.modifiers[0]?.hash).toStrictEqual(componentProps.modifiers[0]?.hash);
      expect(component.modifiers[0]?.value).toBeCloseTo(componentProps.modifiers[0]?.value ?? 0, 2);
      expect(component.modifiers[0]?.isMultiplier).toStrictEqual(componentProps.modifiers[0]?.isMultiplier);
      expect(component.modifiers[0]?.time).toStrictEqual(componentProps.modifiers[0]?.time);
      expect(component.indirectStatModifiers[0]?.hash).toStrictEqual(componentProps.indirectStatModifiers[0]?.hash);
      expect(component.indirectStatModifiers[0]?.time).toStrictEqual(componentProps.indirectStatModifiers[0]?.time);
      expect(component.indirectStatModifiers[0]?.modifiers[0]?.valueOverDurationHash).toStrictEqual(
        componentProps.indirectStatModifiers[0]?.modifiers[0]?.valueOverDurationHash
      );
      expect(component.indirectStatModifiers[0]?.modifiers[0]?.baseValue).toBeCloseTo(
        componentProps.indirectStatModifiers[0]?.modifiers[0]?.baseValue ?? 0,
        2
      );
      expect(component.indirectStatModifiers[0]?.modifiers[0]?.duration).toStrictEqual(
        componentProps.indirectStatModifiers[0]?.modifiers[0]?.duration
      );
      expect(component.indirectStatModifiers[0]?.modifiers[0]?.tick).toStrictEqual(
        componentProps.indirectStatModifiers[0]?.modifiers[0]?.tick
      );
    });
  });

  describe('when timedModifier is null', () => {
    let fastForwardedReader: BinaryReader;

    beforeEach(() => {
      (componentProps as StatManagerComponentProps).modifiers = [null];

      const prefab = new Prefab('Grass_Clump', {
        components: {
          StatManager: new StatManagerComponent({ version: componentVersion, ...componentProps })
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
      reader.readUnsignedInteger(); // StatManagerComponent hash.
      reader.readUnsignedInteger(); // StatManagerComponent data length.

      fastForwardedReader = reader;
    });

    afterEach(() => {
      componentProps.modifiers = [timedModifier];
    });

    it('returns an instance of the StatManagerComponent class', () => {
      const component = StatManagerComponent.fromBinary(fastForwardedReader, componentVersion);

      expect(component).toBeInstanceOf(StatManagerComponent);
      expect(component.hash).toStrictEqual(componentHash);
      expect(component.name).toStrictEqual(componentName);
      expect(component.version).toStrictEqual(componentVersion);
      expect(component.stats[0]?.hash).toStrictEqual(componentProps.stats[0]?.hash);
      expect(component.stats[0]?.baseFlat).toBeCloseTo(componentProps.stats[0]?.baseFlat ?? 0, 2);
      expect(component.modifiers[0]).toStrictEqual(null);
      expect(component.indirectStatModifiers[0]?.hash).toStrictEqual(componentProps.indirectStatModifiers[0]?.hash);
      expect(component.indirectStatModifiers[0]?.time).toStrictEqual(componentProps.indirectStatModifiers[0]?.time);
      expect(component.indirectStatModifiers[0]?.modifiers[0]?.valueOverDurationHash).toStrictEqual(
        componentProps.indirectStatModifiers[0]?.modifiers[0]?.valueOverDurationHash
      );
      expect(component.indirectStatModifiers[0]?.modifiers[0]?.baseValue).toBeCloseTo(
        componentProps.indirectStatModifiers[0]?.modifiers[0]?.baseValue ?? 0,
        2
      );
      expect(component.indirectStatModifiers[0]?.modifiers[0]?.duration).toStrictEqual(
        componentProps.indirectStatModifiers[0]?.modifiers[0]?.duration
      );
      expect(component.indirectStatModifiers[0]?.modifiers[0]?.tick).toStrictEqual(
        componentProps.indirectStatModifiers[0]?.modifiers[0]?.tick
      );
    });
  });

  describe('when indirectStatModifier is null', () => {
    let fastForwardedReader: BinaryReader;

    beforeEach(() => {
      (componentProps as StatManagerComponentProps).indirectStatModifiers = [null];

      const prefab = new Prefab('Grass_Clump', {
        components: {
          StatManager: new StatManagerComponent({ version: componentVersion, ...componentProps })
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
      reader.readUnsignedInteger(); // StatManagerComponent hash.
      reader.readUnsignedInteger(); // StatManagerComponent data length.

      fastForwardedReader = reader;
    });

    afterEach(() => {
      componentProps.indirectStatModifiers = [indirectStatModifier];
    });

    it('returns an instance of the StatManagerComponent class', () => {
      const component = StatManagerComponent.fromBinary(fastForwardedReader, componentVersion);

      expect(component).toBeInstanceOf(StatManagerComponent);
      expect(component.hash).toStrictEqual(componentHash);
      expect(component.name).toStrictEqual(componentName);
      expect(component.version).toStrictEqual(componentVersion);
      expect(component.stats[0]?.hash).toStrictEqual(componentProps.stats[0]?.hash);
      expect(component.stats[0]?.baseFlat).toBeCloseTo(componentProps.stats[0]?.baseFlat ?? 0, 2);
      expect(component.modifiers[0]?.hash).toStrictEqual(componentProps.modifiers[0]?.hash);
      expect(component.modifiers[0]?.value).toBeCloseTo(componentProps.modifiers[0]?.value ?? 0, 2);
      expect(component.modifiers[0]?.isMultiplier).toStrictEqual(componentProps.modifiers[0]?.isMultiplier);
      expect(component.modifiers[0]?.time).toStrictEqual(componentProps.modifiers[0]?.time);
      expect(component.indirectStatModifiers[0]).toStrictEqual(null);
    });
  });
});

describe('StatManagerComponent.toBinary()', () => {
  it('returns a BinaryString representation of the component', () => {
    const component = new StatManagerComponent({ version: componentVersion, ...componentProps });

    const data = component.toBinary();

    const expectedData =
      '00000000000000000000000000000001000000000000000000000010100111001001111110011000010100011110101110000000000000000000000000000000100000000000000000000001010011100100111111001100001010001111010111100000111111110001011110111110101000000000000000000000000000000000000000000000000000000000000000100000000000000000000001010011100100000111111110001011110111110101000000000000000000000000000000000000000000000000000000000000000100000000000000000000010100111001001111110011000010100011110101110000011111111000101111011111010100000000000000000000000110100100';

    expect(data).toStrictEqual(expectedData);
  });
});

describe('StatManagerComponent.write()', () => {
  it('writes a BinaryString representation of the component to the given BinaryWriter, including component hash and data length', () => {
    const component = new StatManagerComponent({ version: componentVersion, ...componentProps });

    const writer = new BinaryWriter();
    component.write(writer);

    const data = writer.flush();

    const expectedData =
      '100110001100110011101110000000010000000000000000000000100010010000000000000000000000000000000001000000000000000000000010100111001001111110011000010100011110101110000000000000000000000000000000100000000000000000000001010011100100111111001100001010001111010111100000111111110001011110111110101000000000000000000000000000000000000000000000000000000000000000100000000000000000000001010011100100000111111110001011110111110101000000000000000000000000000000000000000000000000000000000000000100000000000000000000010100111001001111110011000010100011110101110000011111111000101111011111010100000000000000000000000110100100';

    expect(data).toStrictEqual(expectedData);

    const reader = new BinaryReader(data);

    const hash = reader.readUnsignedInteger();
    reader.readUnsignedInteger(); // StatManagerComponent data length.
    reader.readUnsignedInteger(); // Stat array length.
    const isStatNullBit = reader.readBoolean();
    const statHash = reader.readUnsignedInteger();
    const statBaseFlat = reader.readFloat();
    reader.readUnsignedInteger(); // Modifier array length.
    const isModifierNullBit = reader.readBoolean();
    const modifierHash = reader.readUnsignedInteger();
    const modifierValue = reader.readFloat();
    const modifierIsMultiplier = reader.readBoolean();
    const modifierTime = reader.readUnsignedLong();
    reader.readUnsignedInteger(); // IndirectStatModifiers array length.
    const isIndirectStatModifiersNullBit = reader.readBoolean();
    const indirectHash = reader.readUnsignedInteger();
    const indirectTime = reader.readUnsignedLong();
    reader.readUnsignedInteger(); // IndirectModifierSaveData array length.
    const saveHash = reader.readUnsignedInteger();
    const saveBaseValue = reader.readFloat();
    const saveDuration = reader.readUnsignedInteger();
    const saveTick = reader.readUnsignedInteger();

    expect(hash).toStrictEqual(componentHash);
    expect(isStatNullBit).toStrictEqual(false);
    expect(statHash).toStrictEqual(componentProps.stats[0]?.hash);
    expect(statBaseFlat).toBeCloseTo(componentProps.stats[0]?.baseFlat ?? 0, 2);
    expect(isModifierNullBit).toStrictEqual(false);
    expect(modifierHash).toStrictEqual(componentProps.modifiers[0]?.hash);
    expect(modifierValue).toBeCloseTo(componentProps.modifiers[0]?.value ?? 0, 2);
    expect(modifierIsMultiplier).toStrictEqual(componentProps.modifiers[0]?.isMultiplier);
    expect(modifierTime).toStrictEqual(componentProps.modifiers[0]?.time);
    expect(isIndirectStatModifiersNullBit).toStrictEqual(false);
    expect(indirectHash).toStrictEqual(componentProps.indirectStatModifiers[0]?.hash);
    expect(indirectTime).toStrictEqual(componentProps.indirectStatModifiers[0]?.time);
    expect(saveHash).toStrictEqual(componentProps.indirectStatModifiers[0]?.modifiers[0]?.valueOverDurationHash);
    expect(saveBaseValue).toBeCloseTo(componentProps.indirectStatModifiers[0]?.modifiers[0]?.baseValue ?? 0, 2);
    expect(saveDuration).toStrictEqual(componentProps.indirectStatModifiers[0]?.modifiers[0]?.duration);
    expect(saveTick).toStrictEqual(componentProps.indirectStatModifiers[0]?.modifiers[0]?.tick);
  });
});
