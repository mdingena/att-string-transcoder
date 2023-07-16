import { BinaryData } from '../BinaryData.js';
import { BinaryReader } from '../BinaryReader.js';
import { BinaryWriter } from '../BinaryWriter.js';
import { Prefab } from '../Prefab.js';
import { ComponentHash } from '../types/ComponentHash.js';

import { NetworkRigidbodyComponent } from './NetworkRigidbodyComponent.js';

const componentHash = ComponentHash.NetworkRigidbody;
const componentName = 'NetworkRigidbody';
const componentVersion = 1;
const componentProps = {
  position: { x: 1337, y: 420, z: 69 },
  rotation: { x: 1337, y: 420, z: 69, w: 1 },
  isKinematic: true,
  isServerSleeping: false,
  velocity: { x: 1337, y: 420, z: 69 },
  angularVelocity: { x: 1337, y: 420, z: 69 }
};

describe('new NetworkRigidbodyComponent()', () => {
  describe('when given the required props', () => {
    it('returns an instance of the NetworkRigidbodyComponent class', () => {
      const component = new NetworkRigidbodyComponent({ version: componentVersion });

      expect(component).toBeInstanceOf(NetworkRigidbodyComponent);
      expect(component.hash).toStrictEqual(componentHash);
      expect(component.name).toStrictEqual(componentName);
      expect(component.version).toStrictEqual(componentVersion);
    });
  });

  describe('when given additional props', () => {
    it('returns an instance of the NetworkRigidbodyComponent class', () => {
      const component = new NetworkRigidbodyComponent({ version: componentVersion, ...componentProps });

      expect(component).toBeInstanceOf(NetworkRigidbodyComponent);
      expect(component.hash).toStrictEqual(componentHash);
      expect(component.name).toStrictEqual(componentName);
      expect(component.version).toStrictEqual(componentVersion);
      expect(component.position).toStrictEqual(componentProps.position);
      expect(component.rotation).toStrictEqual(componentProps.rotation);
      expect(component.isKinematic).toStrictEqual(componentProps.isKinematic);
      expect(component.isServerSleeping).toStrictEqual(componentProps.isServerSleeping);
      expect(component.velocity).toStrictEqual(componentProps.velocity);
      expect(component.angularVelocity).toStrictEqual(componentProps.angularVelocity);
    });
  });
});

describe('NetworkRigidbodyComponent.fromBinary()', () => {
  let fastForwardedReader: BinaryReader;

  const prefab = new Prefab('Grass_Clump', {
    components: {
      NetworkRigidbody: new NetworkRigidbodyComponent({ version: componentVersion, ...componentProps })
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
    reader.readUnsignedInteger(); // NetworkRigidbodyComponent hash.
    reader.readUnsignedInteger(); // NetworkRigidbodyComponent data length.

    fastForwardedReader = reader;
  });

  it('returns an instance of the NetworkRigidbodyComponent class', () => {
    const component = NetworkRigidbodyComponent.fromBinary(fastForwardedReader, componentVersion);

    expect(component).toBeInstanceOf(NetworkRigidbodyComponent);
    expect(component.hash).toStrictEqual(componentHash);
    expect(component.name).toStrictEqual(componentName);
    expect(component.version).toStrictEqual(componentVersion);
    expect(component.position).toStrictEqual(componentProps.position);
    expect(component.rotation).toStrictEqual(componentProps.rotation);
    expect(component.isKinematic).toStrictEqual(componentProps.isKinematic);
    expect(component.isServerSleeping).toStrictEqual(componentProps.isServerSleeping);
    expect(component.velocity).toStrictEqual(componentProps.velocity);
    expect(component.angularVelocity).toStrictEqual(componentProps.angularVelocity);
  });
});

describe('NetworkRigidbodyComponent.toBinary()', () => {
  it('returns a BinaryString representation of the component', () => {
    const component = new NetworkRigidbodyComponent({ version: componentVersion, ...componentProps });

    const data = component.toBinary();

    const expectedData =
      '0100010010100111001000000000000001000011110100100000000000000000010000101000101000000000000000000100010010100111001000000000000001000011110100100000000000000000010000101000101000000000000000000011111110000000000000000000000010010001001010011100100000000000000100001111010010000000000000000001000010100010100000000000000000010001001010011100100000000000000100001111010010000000000000000001000010100010100000000000000000';

    expect(data).toStrictEqual(expectedData);
  });
});

describe('NetworkRigidbodyComponent.write()', () => {
  it('writes a BinaryString representation of the component to the given BinaryWriter, including component hash and data length', () => {
    const component = new NetworkRigidbodyComponent({ version: componentVersion, ...componentProps });

    const writer = new BinaryWriter();
    component.write(writer);

    const data = writer.flush();

    const expectedData =
      '10001000100011011001000000000111000000000000000000000001101000100100010010100111001000000000000001000011110100100000000000000000010000101000101000000000000000000100010010100111001000000000000001000011110100100000000000000000010000101000101000000000000000000011111110000000000000000000000010010001001010011100100000000000000100001111010010000000000000000001000010100010100000000000000000010001001010011100100000000000000100001111010010000000000000000001000010100010100000000000000000';

    expect(data).toStrictEqual(expectedData);

    const reader = new BinaryReader(data);

    const hash = reader.readUnsignedInteger();
    reader.readUnsignedInteger(); // NetworkRigidbodyComponent data length.
    const position = {
      x: reader.readFloat(),
      y: reader.readFloat(),
      z: reader.readFloat()
    };
    const rotation = {
      x: reader.readFloat(),
      y: reader.readFloat(),
      z: reader.readFloat(),
      w: reader.readFloat()
    };
    const isKinematic = reader.readBoolean();
    const isServerSleeping = reader.readBoolean();
    const velocity = {
      x: reader.readFloat(),
      y: reader.readFloat(),
      z: reader.readFloat()
    };
    const angularVelocity = {
      x: reader.readFloat(),
      y: reader.readFloat(),
      z: reader.readFloat()
    };

    expect(hash).toStrictEqual(componentHash);
    expect(position).toStrictEqual(componentProps.position);
    expect(rotation).toStrictEqual(componentProps.rotation);
    expect(isKinematic).toStrictEqual(componentProps.isKinematic);
    expect(isServerSleeping).toStrictEqual(componentProps.isServerSleeping);
    expect(velocity).toStrictEqual(componentProps.velocity);
    expect(angularVelocity).toStrictEqual(componentProps.angularVelocity);
  });
});
