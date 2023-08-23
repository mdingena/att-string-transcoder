import { BinaryData } from '../BinaryData.js';
import { BinaryReader } from '../BinaryReader.js';
import { BinaryWriter } from '../BinaryWriter.js';
import { Prefab } from '../Prefab.js';
import { ComponentHash } from '../types/ComponentHash.js';

import { SentGiftComponent, type SentGiftComponentProps } from './SentGiftComponent.js';

const componentHash = ComponentHash.SentGift;
const componentName = 'SentGift';
const componentVersion = 1;

const gift = {
  data: [1337],
  messageSizeInBytes: 420,
  hash: 69,
  chunkVersioning: [42]
};

const senderTag = {
  from: 1337,
  to: 420
};

const componentProps = {
  receiverName: 'Joel',
  senderName: 'Ethyn Wyrmbane',
  gifts: [gift],
  senderTag: senderTag
};

describe('new SentGiftComponent()', () => {
  describe('when given the required props', () => {
    it('returns an instance of the SentGiftComponent class', () => {
      const component = new SentGiftComponent({ version: componentVersion });

      expect(component).toBeInstanceOf(SentGiftComponent);
      expect(component.hash).toStrictEqual(componentHash);
      expect(component.name).toStrictEqual(componentName);
      expect(component.version).toStrictEqual(componentVersion);
    });
  });

  describe('when given additional props', () => {
    it('returns an instance of the SentGiftComponent class', () => {
      const component = new SentGiftComponent({ version: componentVersion, ...componentProps });

      expect(component).toBeInstanceOf(SentGiftComponent);
      expect(component.hash).toStrictEqual(componentHash);
      expect(component.name).toStrictEqual(componentName);
      expect(component.version).toStrictEqual(componentVersion);
      expect(component.receiverName).toStrictEqual(componentProps.receiverName);
      expect(component.senderName).toStrictEqual(componentProps.senderName);
      expect(component.gifts).toStrictEqual(componentProps.gifts);
      expect(component.senderTag).toStrictEqual(componentProps.senderTag);
    });
  });
});

describe('SentGiftComponent.fromBinary()', () => {
  let fastForwardedReader: BinaryReader;

  describe('when all component props are given', () => {
    const prefab = new Prefab('Grass_Clump', {
      components: {
        SentGift: new SentGiftComponent({ version: componentVersion, ...componentProps })
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
      reader.readUnsignedInteger(); // SentGiftComponent hash.
      reader.readUnsignedInteger(); // SentGiftComponent data length.

      fastForwardedReader = reader;
    });

    it('returns an instance of the SentGiftComponent class', () => {
      const component = SentGiftComponent.fromBinary(fastForwardedReader, componentVersion);

      expect(component).toBeInstanceOf(SentGiftComponent);
      expect(component.hash).toStrictEqual(componentHash);
      expect(component.name).toStrictEqual(componentName);
      expect(component.version).toStrictEqual(componentVersion);
      expect(component.receiverName).toStrictEqual(componentProps.receiverName);
      expect(component.senderName).toStrictEqual(componentProps.senderName);
      expect(component.gifts).toStrictEqual(componentProps.gifts);
      expect(component.senderTag).toStrictEqual(componentProps.senderTag);
    });
  });

  describe('when gift is null', () => {
    beforeEach(() => {
      (componentProps as SentGiftComponentProps).gifts = [null];

      const prefab = new Prefab('Grass_Clump', {
        components: {
          SentGift: new SentGiftComponent({ version: componentVersion, ...componentProps })
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
      reader.readUnsignedInteger(); // SentGiftComponent hash.
      reader.readUnsignedInteger(); // SentGiftComponent data length.

      fastForwardedReader = reader;
    });

    afterEach(() => {
      componentProps.gifts = [gift];
    });

    it('returns an instance of the SentGiftComponent class', () => {
      const component = SentGiftComponent.fromBinary(fastForwardedReader, componentVersion);

      expect(component).toBeInstanceOf(SentGiftComponent);
      expect(component.hash).toStrictEqual(componentHash);
      expect(component.name).toStrictEqual(componentName);
      expect(component.version).toStrictEqual(componentVersion);
      expect(component.receiverName).toStrictEqual(componentProps.receiverName);
      expect(component.senderName).toStrictEqual(componentProps.senderName);
      expect(component.gifts).toStrictEqual(componentProps.gifts);
      expect(component.senderTag).toStrictEqual(componentProps.senderTag);
    });
  });

  describe('when senderTag is null', () => {
    beforeEach(() => {
      (componentProps as SentGiftComponentProps).senderTag = null;

      const prefab = new Prefab('Grass_Clump', {
        components: {
          SentGift: new SentGiftComponent({ version: componentVersion, ...componentProps })
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
      reader.readUnsignedInteger(); // SentGiftComponent hash.
      reader.readUnsignedInteger(); // SentGiftComponent data length.

      fastForwardedReader = reader;
    });

    afterEach(() => {
      componentProps.senderTag = senderTag;
    });

    it('returns an instance of the SentGiftComponent class', () => {
      const component = SentGiftComponent.fromBinary(fastForwardedReader, componentVersion);

      expect(component).toBeInstanceOf(SentGiftComponent);
      expect(component.hash).toStrictEqual(componentHash);
      expect(component.name).toStrictEqual(componentName);
      expect(component.version).toStrictEqual(componentVersion);
      expect(component.receiverName).toStrictEqual(componentProps.receiverName);
      expect(component.senderName).toStrictEqual(componentProps.senderName);
      expect(component.gifts).toStrictEqual(componentProps.gifts);
      expect(component.senderTag).toStrictEqual(componentProps.senderTag);
    });
  });
});

describe('SentGiftComponent.toBinary()', () => {
  it('returns a BinaryString representation of the component', () => {
    const component = new SentGiftComponent({ version: componentVersion, ...componentProps });

    const data = component.toBinary();

    const expectedData =
      '0000000000000100010010100110111101100101011011000000000000001110010001010111010001101000011110010111100101010111001000000110111001100001011000100110110101110010011011100110010100000000000000000000000000000001000000000000000000000000000000001000000000000000000000101001110010000000000000000000000011010010000000000000000000000000001000101000000000000000000000000000000010000000000000000000000000010101001000000000000000000001010011100110000000000000000000000110100100';

    expect(data).toStrictEqual(expectedData);
  });
});

describe('SentGiftComponent.write()', () => {
  it('writes a BinaryString representation of the component to the given BinaryWriter, including component hash and data length', () => {
    const component = new SentGiftComponent({ version: componentVersion, ...componentProps });

    const writer = new BinaryWriter();
    component.write(writer);

    const data = writer.flush();

    const expectedData =
      '00100111011011011010011100100110000000000000000000000001110100100000000000000100010010100110111101100101011011000000000000001110010001010111010001101000011110010111100101010111001000000110111001100001011000100110110101110010011011100110010100000000000000000000000000000001000000000000000000000000000000001000000000000000000000101001110010000000000000000000000011010010000000000000000000000000001000101000000000000000000000000000000010000000000000000000000000010101001000000000000000000001010011100110000000000000000000000110100100';

    expect(data).toStrictEqual(expectedData);

    const reader = new BinaryReader(data);

    const hash = reader.readUnsignedInteger();
    reader.readUnsignedInteger(); // SentGiftComponent data length.
    const receiverName = reader.readString();
    const senderName = reader.readString();
    reader.readUnsignedInteger(); // Gifts array length.
    const isDataNullBit = reader.readBoolean();
    reader.readUnsignedInteger(); // Gift data array length.
    const dataUInt = reader.readUnsignedInteger();
    const dataBytes = reader.readUnsignedInteger();
    const dataHash = reader.readUnsignedInteger();
    reader.readUnsignedInteger(); // Gift data chunk versioning array length.
    const chunkVersioning = reader.readUnsignedInteger();
    const isSenderTagNullBit = reader.readBoolean();
    const tagFrom = reader.readSignedInteger();
    const tagTo = reader.readSignedInteger();

    expect(hash).toStrictEqual(componentHash);
    expect(receiverName).toStrictEqual(componentProps.receiverName);
    expect(senderName).toStrictEqual(componentProps.senderName);
    expect(isDataNullBit).toStrictEqual(false);
    expect(dataUInt).toStrictEqual(componentProps.gifts[0]?.data[0]);
    expect(dataBytes).toStrictEqual(componentProps.gifts[0]?.messageSizeInBytes);
    expect(dataHash).toStrictEqual(componentProps.gifts[0]?.hash);
    expect(chunkVersioning).toStrictEqual(componentProps.gifts[0]?.chunkVersioning[0]);
    expect(isSenderTagNullBit).toStrictEqual(false);
    expect(tagFrom).toStrictEqual(componentProps.senderTag.from);
    expect(tagTo).toStrictEqual(componentProps.senderTag.to);
  });
});
