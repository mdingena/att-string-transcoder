import type { BinaryString } from '../types/BinaryString.js';
import type { PrefabComponents } from '../types/PrefabComponents.js';
import { BinaryWriter } from '../BinaryWriter.js';
import { NetworkRigidbodyComponent } from '../components/NetworkRigidbodyComponent.js';
import { UnsupportedComponent } from '../components/UnsupportedComponent.js';
import { writeComponents } from './writeComponents.js';
import { ComponentHash } from '../types/ComponentHash.js';

const mockedUnknownComponentHash = 1337;
const mockedUnknownComponentVersion = 42;

describe('writeComponents()', () => {
  const firstComponentHash = ComponentHash.NetworkRigidbody;
  const firstComponentVersion = 1;
  const secondComponentHash = ComponentHash.RandomSpawnRectangle;
  const secondComponentName = 'RandomSpawnRectangle';
  const secondComponentVersion = 1;
  const thirdComponentHash = mockedUnknownComponentHash;
  const thirdComponentName = 'Unknown';
  const thirdComponentVersion = mockedUnknownComponentVersion;

  let prefabComponents: PrefabComponents;

  beforeEach(() => {
    prefabComponents = {
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
    };
  });

  it('stores PrefabComponents in the given BinaryWriter', () => {
    const expectedData =
      '1000100010001101100100000000011100000000000000000000000110100010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001111111000000000000000000000001001000100101001110010000000000000010000111101001000000000000000000100001010001010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010111000110111111010100011110001000000000000000000000000000101000000000100110111111100000000000000000000010100111001000000000000000000000000000101001111011100110001000000000000000000000000000000000000';

    const writer = new BinaryWriter();

    writeComponents(
      writer,
      prefabComponents,
      new Map([
        [firstComponentHash, firstComponentVersion],
        [secondComponentHash, secondComponentVersion],
        [thirdComponentHash, thirdComponentVersion]
      ])
    );

    const data = writer.flush();

    expect(data).toStrictEqual(expectedData);
  });
});
