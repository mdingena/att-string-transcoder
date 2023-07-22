# Class: `BinaryReader`

- [Constructors](#constructors)
  - [`new BinaryReader(data)`](#new-binaryreaderdata)
- [Methods](#methods)
  - [`readBits(bitCount)`](#readbitsbitcount)

## Constructors

### `new BinaryReader(data)`

Creates a reader to extract information from `data` using various read methods.

- `data` `<string>` The binary data to read information from. May only contain `"0"` and `"1"`.

```ts
import { BinaryReader } from 'att-string-transcoder';

const reader = new BinaryReader('11110111001100010000');
```

## Methods

### `readBits(bitCount)`

Reads the next `bitCount` bits from the binary string.

- `bitCount` `<number>` The amount of bits to read from the current position of the binary data pointer.

```ts
import { BinaryReader } from 'att-string-transcoder';

const reader = new BinaryReader('11110111001100010000');

const firstByte = reader.readBits(8);
// `firstByte` is `'11110111'`
```

---

### `readBoolean(options?)`

Reads the next bit from the binary string and returns `true` for `"1"` and `false` for `"0"`.

- `options` (optional) [`<BinaryDataOptions>`](./BinaryData.md#binarydataoptions) Configuration options for `BinaryData`.

```ts
import { BinaryReader } from 'att-string-transcoder';

const reader = new BinaryReader('10');

const boolean1 = reader.readBoolean();
// `boolean1` is `true`
const boolean2 = reader.readBoolean();
// `boolean2` is `false`
```

---

### `readChar(options?)`

Reads the next 8 bits from the binary string and returns the reconstructed string character.

- `options` (optional) [`<BinaryDataOptions>`](./BinaryData.md#binarydataoptions) Configuration options for `BinaryData`.

```ts
import { BinaryReader } from 'att-string-transcoder';

const reader = new BinaryReader('01000001011000100110001101000100');

const char1 = reader.readChar();
// `char1` is `'A'`
const char2 = reader.readChar();
// `char2` is `'b'`
const char3 = reader.readChar();
// `char3` is `'c'`
const char4 = reader.readChar();
// `char4` is `'D'`
```

---

### `readFloat(options?)`

Reads the next 32 bits from the binary string and returns the reconstructed floating point number.

- `options` (optional) [`<BinaryDataOptions>`](./BinaryData.md#binarydataoptions) Configuration options for `BinaryData`.

```ts
import { BinaryReader } from 'att-string-transcoder';

const reader = new BinaryReader('01000100101001110010110101110110');

const float = reader.readFloat();
// `float` is approximately `1337.42069`
```

---

### `readSignedInteger(options?)`

Reads the next 32 bits from the binary string and returns the reconstructed signed integer.

- `options` (optional) [`<BinaryDataOptions>`](./BinaryData.md#binarydataoptions) Configuration options for `BinaryData`.

```ts
import { BinaryReader } from 'att-string-transcoder';

const reader = new BinaryReader('01010110100111110101010000000111');

const signedInteger = reader.readSignedInteger();
// `signedInteger` is `-694201337`
```

---

### `readString(options?)`

Reads the next 16 bits from the binary string, then reads the number of bits as instructed and returns the reconstructed string text.

- `options` (optional) [`<BinaryDataOptions>`](./BinaryData.md#binarydataoptions) Configuration options for `BinaryData`.

```ts
import { BinaryReader } from 'att-string-transcoder';

const reader = new BinaryReader(
  '000000000000110101001000011001010010110001101111011011000110110001110010011011110111011100100000011011000110010000100001'
);

const string = reader.readString();
// `string` is `'Hello, world!'`
```

---

### `readUnsignedInteger(options?)`

Reads the next 32 bits from the binary string and returns the reconstructed unsigned integer.

- `options` (optional) [`<BinaryDataOptions>`](./BinaryData.md#binarydataoptions) Configuration options for `BinaryData`.

```ts
import { BinaryReader } from 'att-string-transcoder';

const reader = new BinaryReader('00000111111110001011110111110101');

const unsignedInteger = reader.readUnsignedInteger();
// `unsignedInteger` is `133742069`
```

---

### `readUnsignedLong(options?)`

Reads the next 64 bits from the binary string and returns the reconstructed unsigned long integer.

- `options` (optional) [`<BinaryDataOptions>`](./BinaryData.md#binarydataoptions) Configuration options for `BinaryData`.

```ts
import { BinaryReader } from 'att-string-transcoder';

const reader = new BinaryReader('0000011111111000101111011111010100000000000000000000000000000000');

const unsignedLongInteger = reader.readUnsignedLong();
// `unsignedLongInteger` is `133742069`
```

---

### `readUnsignedShort(options?)`

Reads the next 16 bits from the binary string and returns the reconstructed unsigned short integer.

- `options` (optional) [`<BinaryDataOptions>`](./BinaryData.md#binarydataoptions) Configuration options for `BinaryData`.

```ts
import { BinaryReader } from 'att-string-transcoder';

const reader = new BinaryReader('0000010100111001');

const unsignedShortInteger = reader.readUnsignedShort();
// `unsignedShortInteger` is `1337`
```
