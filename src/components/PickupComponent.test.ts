import { PickupComponent, type PickupComponentProps } from './PickupComponent.js';
import { BinaryData } from '../BinaryData.js';
import { BinaryReader } from '../BinaryReader.js';
import { BinaryWriter } from '../BinaryWriter.js';
import { Prefab } from '../Prefab.js';
import { ComponentHash } from '../types/ComponentHash.js';

const componentHash = ComponentHash.Pickup;
const componentName = 'Pickup';

const grabPointParameters = {
  grabPointIndex: -420,
  lastLinearPosition: 0.69,
  lastPosition: {
    x: 1337,
    y: 420,
    z: 69
  },
  lastRotation: {
    x: 1337,
    y: 420,
    z: 69,
    w: 1
  }
};

const componentPropsV1 = {
  lastInteractorPlayerId: 1337
};

const componentPropsV2 = {
  lastInteractorPlayerId: 1337,
  dockedMemory: [grabPointParameters]
};

describe('new PickupComponent()', () => {
  describe('when given the required props', () => {
    it('returns an instance of the PickupComponent class', () => {
      const componentVersion = 2;
      const component = new PickupComponent({ version: componentVersion });

      expect(component).toBeInstanceOf(PickupComponent);
      expect(component.hash).toStrictEqual(componentHash);
      expect(component.name).toStrictEqual(componentName);
      expect(component.version).toStrictEqual(componentVersion);
    });
  });

  describe('when given additional props', () => {
    describe('for version 1', () => {
      const componentVersion = 1;
      const componentProps = componentPropsV1;

      it('returns an instance of the PickupComponent class', () => {
        const component = new PickupComponent({ version: componentVersion, ...componentProps });

        expect(component).toBeInstanceOf(PickupComponent);
        expect(component.hash).toStrictEqual(componentHash);
        expect(component.name).toStrictEqual(componentName);
        expect(component.version).toStrictEqual(componentVersion);
        expect(component.lastInteractorPlayerId).toStrictEqual(componentProps.lastInteractorPlayerId);
      });
    });

    describe('for version 2', () => {
      const componentVersion = 2;
      const componentProps = componentPropsV2;

      it('returns an instance of the PickupComponent class', () => {
        const component = new PickupComponent({ version: componentVersion, ...componentProps });

        expect(component).toBeInstanceOf(PickupComponent);
        expect(component.hash).toStrictEqual(componentHash);
        expect(component.name).toStrictEqual(componentName);
        expect(component.version).toStrictEqual(componentVersion);
        expect(component.lastInteractorPlayerId).toStrictEqual(componentProps.lastInteractorPlayerId);
        expect(component.dockedMemory).toStrictEqual(componentProps.dockedMemory);
      });
    });
  });
});

describe('PickupComponent.fromBinary()', () => {
  let fastForwardedReader: BinaryReader;

  describe('for version 1', () => {
    const componentVersion = 1;
    const componentProps = componentPropsV1;

    const prefab = new Prefab('Grass_Clump', {
      components: {
        Pickup: new PickupComponent({ version: componentVersion, ...componentProps })
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
      reader.readUnsignedInteger(); // PickupComponent hash.
      reader.readUnsignedInteger(); // PickupComponent data length.

      fastForwardedReader = reader;
    });

    it('returns an instance of the PickupComponent class', () => {
      const component = PickupComponent.fromBinary(fastForwardedReader, componentVersion);

      expect(component).toBeInstanceOf(PickupComponent);
      expect(component.hash).toStrictEqual(componentHash);
      expect(component.name).toStrictEqual(componentName);
      expect(component.version).toStrictEqual(componentVersion);
      expect(component.lastInteractorPlayerId).toStrictEqual(componentProps.lastInteractorPlayerId);
    });
  });

  describe('for version 2', () => {
    describe('when all component props are given', () => {
      const componentVersion = 2;
      const componentProps = componentPropsV2;

      const prefab = new Prefab('Grass_Clump', {
        components: {
          Pickup: new PickupComponent({ version: componentVersion, ...componentProps })
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
        reader.readUnsignedInteger(); // PickupComponent hash.
        reader.readUnsignedInteger(); // PickupComponent data length.

        fastForwardedReader = reader;
      });

      it('returns an instance of the PickupComponent class', () => {
        const component = PickupComponent.fromBinary(fastForwardedReader, componentVersion);

        expect(component).toBeInstanceOf(PickupComponent);
        expect(component.hash).toStrictEqual(componentHash);
        expect(component.name).toStrictEqual(componentName);
        expect(component.version).toStrictEqual(componentVersion);
        expect(component.lastInteractorPlayerId).toStrictEqual(componentProps.lastInteractorPlayerId);
        expect(component.dockedMemory[0]?.grabPointIndex).toStrictEqual(componentProps.dockedMemory[0]?.grabPointIndex);
        expect(component.dockedMemory[0]?.lastLinearPosition).toBeCloseTo(
          componentProps.dockedMemory[0]?.lastLinearPosition ?? 0,
          2
        );
        expect(component.dockedMemory[0]?.lastPosition).toStrictEqual(componentProps.dockedMemory[0]?.lastPosition);
        expect(component.dockedMemory[0]?.lastRotation).toStrictEqual(componentProps.dockedMemory[0]?.lastRotation);
      });
    });

    describe('when GrabPointParameters is null', () => {
      const componentVersion = 2;
      let componentProps: PickupComponentProps;

      beforeEach(() => {
        componentProps = componentPropsV2;
        componentProps.dockedMemory = [null];

        const prefab = new Prefab('Grass_Clump', {
          components: {
            Pickup: new PickupComponent({ version: componentVersion, ...componentProps })
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
        reader.readUnsignedInteger(); // PickupComponent hash.
        reader.readUnsignedInteger(); // PickupComponent data length.

        fastForwardedReader = reader;
      });

      afterEach(() => {
        componentProps.dockedMemory = [grabPointParameters];
      });

      it('returns an instance of the PickupComponent class', () => {
        const component = PickupComponent.fromBinary(fastForwardedReader, componentVersion);

        expect(component).toBeInstanceOf(PickupComponent);
        expect(component.hash).toStrictEqual(componentHash);
        expect(component.name).toStrictEqual(componentName);
        expect(component.version).toStrictEqual(componentVersion);
        expect(component.lastInteractorPlayerId).toStrictEqual(componentProps.lastInteractorPlayerId);
        expect(component.dockedMemory).toStrictEqual([null]);
      });
    });
  });
});

describe('PickupComponent.toBinary()', () => {
  describe('for version 1', () => {
    const componentVersion = 1;
    const componentProps = componentPropsV1;

    it('returns a BinaryString representation of the component', () => {
      const component = new PickupComponent({ version: componentVersion, ...componentProps });

      const data = component.toBinary();

      const expectedData = '10000000000000000000010100111001';

      expect(data).toStrictEqual(expectedData);
    });
  });

  describe('for version 2', () => {
    const componentVersion = 2;
    const componentProps = componentPropsV2;

    it('returns a BinaryString representation of the component', () => {
      const component = new PickupComponent({ version: componentVersion, ...componentProps });

      const data = component.toBinary();

      const expectedData =
        '10000000000000000000010100111001000000000000000000000000000000010011111111111111111111110010111000011111100110000101000111101011101000100101001110010000000000000010000111101001000000000000000000100001010001010000000000000000001000100101001110010000000000000010000111101001000000000000000000100001010001010000000000000000000111111100000000000000000000000';

      expect(data).toStrictEqual(expectedData);
    });
  });
});

describe('PickupComponent.write()', () => {
  describe('for version 1', () => {
    const componentVersion = 1;
    const componentProps = componentPropsV1;

    it('writes a BinaryString representation of the component to the given BinaryWriter, including component hash and data length', () => {
      const component = new PickupComponent({ version: componentVersion, ...componentProps });

      const writer = new BinaryWriter();
      component.write(writer);

      const data = writer.flush();

      const expectedData =
        '010101101011000100000011101101100000000000000000000000000010000010000000000000000000010100111001';

      expect(data).toStrictEqual(expectedData);

      const reader = new BinaryReader(data);

      const hash = reader.readUnsignedInteger();
      reader.readUnsignedInteger(); // PickupComponent data length.
      const lastInteractorPlayerId = reader.readSignedInteger();

      expect(hash).toStrictEqual(componentHash);
      expect(lastInteractorPlayerId).toStrictEqual(componentProps.lastInteractorPlayerId);
    });
  });

  describe('for version 2', () => {
    const componentVersion = 2;
    const componentProps = componentPropsV2;

    it('writes a BinaryString representation of the component to the given BinaryWriter, including component hash and data length', () => {
      const component = new PickupComponent({ version: componentVersion, ...componentProps });

      const writer = new BinaryWriter();
      component.write(writer);

      const data = writer.flush();

      const expectedData =
        '010101101011000100000011101101100000000000000000000000010110000110000000000000000000010100111001000000000000000000000000000000010011111111111111111111110010111000011111100110000101000111101011101000100101001110010000000000000010000111101001000000000000000000100001010001010000000000000000001000100101001110010000000000000010000111101001000000000000000000100001010001010000000000000000000111111100000000000000000000000';

      expect(data).toStrictEqual(expectedData);

      const reader = new BinaryReader(data);

      const hash = reader.readUnsignedInteger();
      reader.readUnsignedInteger(); // PickupComponent data length.
      const lastInteractorPlayerId = reader.readSignedInteger();
      reader.readUnsignedInteger(); // GrabPointParameters array length.
      const isNullBit = reader.readBoolean();
      const grabPointIndex = reader.readSignedInteger();
      const lastLinearPosition = reader.readFloat();
      const lastPosition = {
        x: reader.readFloat(),
        y: reader.readFloat(),
        z: reader.readFloat()
      };
      const lastRotation = {
        x: reader.readFloat(),
        y: reader.readFloat(),
        z: reader.readFloat(),
        w: reader.readFloat()
      };

      expect(hash).toStrictEqual(componentHash);
      expect(lastInteractorPlayerId).toStrictEqual(componentProps.lastInteractorPlayerId);
      expect(isNullBit).toStrictEqual(false);
      expect(grabPointIndex).toStrictEqual(componentProps.dockedMemory[0]?.grabPointIndex);
      expect(lastLinearPosition).toBeCloseTo(componentProps.dockedMemory[0]?.lastLinearPosition ?? 0, 2);
      expect(lastPosition).toStrictEqual(componentProps.dockedMemory[0]?.lastPosition);
      expect(lastRotation).toStrictEqual(componentProps.dockedMemory[0]?.lastRotation);
    });
  });
});
