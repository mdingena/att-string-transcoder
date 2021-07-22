import { decodeString } from '../build';
import { encodedEmptyFlask } from './data/encodedStrings';
import { decodedEmptyFlask } from './data/decodedStrings';

describe('decodeString', () => {
  it('should decode a string of UInts', () => {
    const decodedString = decodeString(encodedEmptyFlask);

    expect(decodedString).toStrictEqual(decodedEmptyFlask);
  });
});
