import { readComponents } from './readComponents.js';
import { NetworkRigidbodyComponent } from '../components/NetworkRigidbodyComponent.js';
import { UnsupportedComponent } from '../components/UnsupportedComponent.js';
import { BinaryData } from '../BinaryData.js';
import { BinaryReader } from '../BinaryReader.js';
import { Prefab } from '../Prefab.js';
import { BinaryString } from '../types/BinaryString.js';
import { ComponentHash } from '../types/ComponentHash.js';
import { latestSupportedComponentVersions } from '../constants.js';

const mockedUnknownComponentHash = 1337;
const mockedUnknownComponentVersion = 42;

describe('readComponents()', () => {
  describe('when reading components', () => {
    let fastForwardedReader: BinaryReader;
    const firstComponentHash = ComponentHash.NetworkRigidbody;
    const firstComponentName = 'NetworkRigidbody';
    const firstComponentVersion = 1;
    const secondComponentHash = ComponentHash.RandomSpawnRectangle;
    const secondComponentName = 'RandomSpawnRectangle';
    const secondComponentVersion = 1;
    const thirdComponentHash = mockedUnknownComponentHash;
    const thirdComponentName = 'Unknown';
    const thirdComponentVersion = mockedUnknownComponentVersion;
    const prefab = new Prefab('Handle_Short', {
      components: {
        NetworkRigidbody: new NetworkRigidbodyComponent({
          version: firstComponentVersion,
          isKinematic: true,
          velocity: { x: 1337, y: 420, z: 69 }
        }),
        RandomSpawnRectangle: new UnsupportedComponent({
          hash: secondComponentHash,
          name: secondComponentName,
          version: secondComponentVersion,
          rawData: '00000001001101111111' as BinaryString
        }),
        Unknown: [
          new UnsupportedComponent({
            hash: thirdComponentHash,
            name: thirdComponentName,
            version: thirdComponentVersion,
            rawData: '11110111001100010000' as BinaryString
          })
        ]
      }
    });

    beforeEach(() => {
      latestSupportedComponentVersions.set(mockedUnknownComponentHash, mockedUnknownComponentVersion);

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

      fastForwardedReader = reader;
    });

    afterEach(() => {
      latestSupportedComponentVersions.delete(mockedUnknownComponentHash);
    });

    it('returns PrefabComponents', () => {
      const components = readComponents(fastForwardedReader);

      expect(components.NetworkRigidbody).toBeInstanceOf(NetworkRigidbodyComponent);
      expect(components.NetworkRigidbody?.hash).toStrictEqual(firstComponentHash);
      expect(components.NetworkRigidbody?.name).toStrictEqual(firstComponentName);
      expect(components.NetworkRigidbody?.version).toStrictEqual(firstComponentVersion);
      expect(components.NetworkRigidbody?.isKinematic).toBe(true);
      expect(components.NetworkRigidbody?.velocity).toStrictEqual({ x: 1337, y: 420, z: 69 });

      expect(components.RandomSpawnRectangle).toBeInstanceOf(UnsupportedComponent);
      expect(components.RandomSpawnRectangle?.hash).toStrictEqual(secondComponentHash);
      expect(components.RandomSpawnRectangle?.name).toStrictEqual(secondComponentName);
      expect(components.RandomSpawnRectangle?.version).toStrictEqual(secondComponentVersion);
      expect(components.RandomSpawnRectangle?.rawData).toStrictEqual('00000001001101111111' as BinaryString);

      expect(components.Unknown[0]).toBeInstanceOf(UnsupportedComponent);
      expect(components.Unknown[0]?.hash).toStrictEqual(thirdComponentHash);
      expect(components.Unknown[0]?.name).toStrictEqual(thirdComponentName);
      expect(components.Unknown[0]?.version).toStrictEqual(thirdComponentVersion);
      expect(components.Unknown[0]?.rawData).toStrictEqual('11110111001100010000' as BinaryString);
    });

    describe('when given componentVersions and the requested version is not supported', () => {
      beforeEach(() => {
        /* This doesn't really happen but we need to tweak this a little for testing purposes. */
        (latestSupportedComponentVersions as Map<number, number | undefined>).set(
          mockedUnknownComponentHash,
          undefined
        );
      });

      afterEach(() => {
        latestSupportedComponentVersions.delete(mockedUnknownComponentHash);
      });

      it('throws an error', () => {
        const expectedToThrow = () =>
          readComponents(fastForwardedReader, latestSupportedComponentVersions as Map<number, number>);
        const expectedError = new Error(
          `Could not determine version of "Unknown" (${mockedUnknownComponentHash}) component. A SaveString with chunk versioning pairs is required to read this data.`
        );

        expect(expectedToThrow).toThrowError(expectedError);
      });
    });
  });
});
