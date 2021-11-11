import { decodeString } from '../src';
import { encodedEmptyFlask } from './data/encodedStrings';
import { decodedEmptyFlask } from './data/decodedStrings';

describe('decodeString', () => {
  it('decodes a string of UInts', () => {
    const decodedString = decodeString(encodedEmptyFlask);

    expect(decodedString).toStrictEqual(decodedEmptyFlask);
  });
});
