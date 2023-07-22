# Class: `BinaryData`

- [Types](#types)
  - [`<BinaryDataOptions>`](#binarydataoptions)
  - [`<UnpackFloatOptions>`](#unpackfloatoptions)
- [Constructors](#constructors)
  - [`new BinaryData(binary, options?)`](#new-binarydatabinary-options)
  - [`BinaryData.fromBoolean(boolean, options?)`](#binarydatafrombooleanboolean-options)
  - [`BinaryData.fromChar(char, options?)`](#binarydatafromcharchar-options)
  - [`BinaryData.fromFloat(float, options?)`](#binarydatafromfloatfloat-options)
  - [`BinaryData.fromNumber(number, options?)`](#binarydatafromnumbernumber-options)
  - [`BinaryData.fromSignedInteger(signedInteger, options?)`](#binarydatafromsignedintegersignedinteger-options)
  - [`BinaryData.fromUnsignedInteger(unsignedInteger, options?)`](#binarydatafromunsignedintegerunsignedinteger-options)
  - [`BinaryData.fromUnsignedIntegerArray(unsignedIntegerArray, options?)`](#binarydatafromunsignedintegerarrayunsignedintegerarray-options)
  - [`BinaryData.fromUnsignedLong(unsignedLong, options?)`](#binarydatafromunsignedlongunsignedlong-options)
  - [`BinaryData.fromUnsignedShort(unsignedShort, options?)`](#binarydatafromunsignedshortunsignedshort-options)
- [Methods](#methods)
  - [`BinaryData.isBinaryString(data)`](#binarydataisbinarystringdata)
  - [`BinaryData.isSaveString(data)`](#binarydataissavestringdata)
  - [`BinaryData.packFloat(number)`](#binarydatapackfloatnumber)
  - [`BinaryData.unpackFloat(unsignedInteger, options?)`](#binarydataunpackfloatunsignedinteger)
  - [`toBinaryString()`](#tobinarystring)
  - [`toBoolean()`](#toboolean)
  - [`toChar()`](#tochar)
  - [`toFloat()`](#tofloat)
  - [`toNumber()`](#tonumber)
  - [`toSignedInteger()`](#tosignedinteger)
  - [`toUnsignedInteger()`](#tounsignedinteger)
  - [`toUnsignedIntegerArray()`](#tounsignedintegerarray)
  - [`toUnsignedLong()`](#tounsignedlong)
  - [`toUnsignedShort()`](#tounsignedshort)

## Types

### `<BinaryDataOptions>`

A configuration object to optionally pass to the `BinaryData` constructor. Any properties that you do not pass will be created with a default value.

```ts
type BinaryDataOptions = {
  signedIntegerOffset?: number;
};
```

- `signedIntegerOffset` (optional, default `2147483648`) `<number>` The numeric offset used to (de)serialise signed integers.

## Constructors

### `new BinaryData(binary, options?)`

Creates a data structure from the given binary `data` and lets you express it as other data types. You may optionally provide additional options in the second argument.

- `binary` `<string>` The string containing binary data.
- `options` (optional) [`<BinaryDataOptions>`](#binarydataoptions) Additional configuration options.
- Returns: `<BinaryData>`

```ts
import { BinaryData } from 'att-string-transcoder';

const data = new BinaryData('11110111001100010000', {
  signedIntegerOffset: 2147483648
});
```

---

### `BinaryData.fromBoolean(boolean, options?)`

Creates a BinaryData instance from the given boolean.

- `boolean` `<boolean>` The boolean from which to create the BinaryData instance.
- `options` (optional) [`<BinaryDataOptions>`](#binarydataoptions) Additional configuration options.
- Returns: `<BinaryData>`

```ts
import { BinaryData } from 'att-string-transcoder';

const data = BinaryData.fromBoolean(true);
```

---

### `BinaryData.fromChar(char, options?)`

Creates a BinaryData instance from the given character.

- `char` `<string>` The single string character from which to create the BinaryData instance.
- `options` (optional) [`<BinaryDataOptions>`](#binarydataoptions) Additional configuration options.
- Returns: `<BinaryData>`

```ts
import { BinaryData } from 'att-string-transcoder';

const data = BinaryData.fromChar('x');
```

---

### `BinaryData.fromFloat(float, options?)`

Creates a BinaryData instance from the given floating point number.

- `float` `<number>` The floating point number from which to create the BinaryData instance.
- `options` (optional) [`<BinaryDataOptions>`](#binarydataoptions) Additional configuration options.
- Returns: `<BinaryData>`

```ts
import { BinaryData } from 'att-string-transcoder';

const data = BinaryData.fromFloat(0.69);
```

---

### `BinaryData.fromNumber(number, options?)`

Creates a BinaryData instance from the given number.

- `number` `<number>` The number from which to create the BinaryData instance.
- `options` (optional) [`<BinaryDataOptions>`](#binarydataoptions) Additional configuration options.
- Returns: `<BinaryData>`

```ts
import { BinaryData } from 'att-string-transcoder';

const data = BinaryData.fromNumber(1337);
```

---

### `BinaryData.fromSignedInteger(signedInteger, options?)`

Creates a BinaryData instance from the given signed integer.

- `signedInteger` `<number>` The signed integer from which to create the BinaryData instance.
- `options` (optional) [`<BinaryDataOptions>`](#binarydataoptions) Additional configuration options.
- Returns: `<BinaryData>`

```ts
import { BinaryData } from 'att-string-transcoder';

const data = BinaryData.fromSignedInteger(-420);
```

---

### `BinaryData.fromUnsignedInteger(unsignedInteger, options?)`

Creates a BinaryData instance from the given unsigned integer.

- `unsignedInteger` `<number>` The unsigned integer from which to create the BinaryData instance.
- `options` (optional) [`<BinaryDataOptions>`](#binarydataoptions) Additional configuration options.
- Returns: `<BinaryData>`

```ts
import { BinaryData } from 'att-string-transcoder';

const data = BinaryData.fromUnsignedInteger(69420);
```

---

### `BinaryData.fromUnsignedIntegerArray(unsignedIntegerArray, options?)`

Creates a BinaryData instance from the given comma-separated array of unsigned integers.

- `unsignedIntegerArray` `<number[]>` The array of unsigned integers from which to create the BinaryData instance.
- `options` (optional) [`<BinaryDataOptions>`](#binarydataoptions) Additional configuration options.
- Returns: `<BinaryData>`

```ts
import { BinaryData } from 'att-string-transcoder';

const data = BinaryData.fromUnsignedIntegerArray([69420, 133769]);
```

---

### `BinaryData.fromUnsignedLong(unsignedLong, options?)`

Creates a BinaryData instance from the given unsigned long integer.

- `unsignedLong` `<number>` The unsigned long integer from which to create the BinaryData instance.
- `options` (optional) [`<BinaryDataOptions>`](#binarydataoptions) Additional configuration options.
- Returns: `<BinaryData>`

```ts
import { BinaryData } from 'att-string-transcoder';

const data = BinaryData.fromUnsignedLong(133742069);
```

---

### `BinaryData.fromUnsignedShort(unsignedShort, options?)`

Creates a BinaryData instance from the given unsigned short integer.

- `unsignedShort` `<number>` The unsigned short integer from which to create the BinaryData instance.
- `options` (optional) [`<BinaryDataOptions>`](#binarydataoptions) Additional configuration options.
- Returns: `<BinaryData>`

```ts
import { BinaryData } from 'att-string-transcoder';

const data = BinaryData.fromUnsignedShort(420);
```

## Methods

### `BinaryData.isBinaryString(data)`

Confirms whether `data` is a string of binary data, i.e. a string of zeroes and ones.

- `data` `<string>` The string data to confirm is a [`<BinaryString>`](./BinaryString.md).
- Returns: `<boolean>`

```ts
import { BinaryData } from 'att-string-transcoder';

const isBinaryString = BinaryData.isBinaryString('010101abcdef');
// `isBinaryString` is `false`
```

---

### `BinaryData.isSaveString(data)`

Confirms whether `data` is a string of unsigned integers and chunk versioning pairs.

- `data` `<string>` The string data to confirm is a [`<SaveString>`](./SaveString.md).
- Returns: `<boolean>`

```ts
import { BinaryData } from 'att-string-transcoder';

const isSaveString = BinaryData.isSaveString('...');
```

---

### `BinaryData.packFloat(number)`

Converts a JavaScript floating point number into an IEEE754 integer.

- `number` `<number>` The number to pack as an IEEE754 integer.
- Returns: `<number>`

```ts
import { BinaryData } from 'att-string-transcoder';

const packedFloat = BinaryData.packFloat(1337.42069);
// `packedFloat` is `1151806838`
```

---

### `BinaryData.unpackFloat(unsignedInteger)`

Converts an IEEE754 integer into a JavaScript floating point number.

- `unsignedInteger` `<number>` The IEEE754 integer to unpack as a floating point number.
- Returns: `<number>`

```ts
import { BinaryData } from 'att-string-transcoder';

const unpackedFloat = BinaryData.unpackFloat(1151806838);
// `unpackedFloat` is approximately `1337.42069`
```

---

### `toBinaryString()`

Returns the binary data as a `BinaryString`.

- Returns: [`<BinaryString>`](./BinaryString.md)

```ts
import { BinaryData } from 'att-string-transcoder';

const data = new BinaryData('1111011100110001000');

const binary = data.toBinaryString();
// `binary` is `'1111011100110001000'`
```

---

### `toBoolean()`

Returns the boolean represenation of the binary data.

- Returns: `<boolean>`

```ts
import { BinaryData } from 'att-string-transcoder';

const data = new BinaryData('1');

const boolean = data.toBoolean();
// `boolean` is `true`
```

---

### `toChar()`

Returns the character represenation of the binary data.

- Returns: `<string>`

```ts
import { BinaryData } from 'att-string-transcoder';

const data = new BinaryData('01000001');

const char = data.toChar();
// `char` is `'A'`
```

---

### `toFloat()`

Returns the floating point number represenation of the binary data.

- Returns: `<number>`

```ts
import { BinaryData } from 'att-string-transcoder';

const data = new BinaryData('01000100101001110010110101110110');

const float = data.toFloat();
// `float` is approximately `1337.42069`
```

---

### `toNumber()`

Returns the numeric represenation of the binary data.

- Returns: `<number>`

```ts
import { BinaryData } from 'att-string-transcoder';

const data = new BinaryData('10100111001');

const number = data.toNumber();
// `number` is `1337`
```

---

### `toSignedInteger()`

Returns the signed integer representation of the binary data.

- Returns: `<number>`

```ts
import { BinaryData } from 'att-string-transcoder';

const data = new BinaryData('01010110100111110101010000000111');

const signedInteger = data.toSignedInteger();
// `signedInteger` is `-694201337`
```

---

### `toUnsignedInteger()`

Returns the unsigned integer representation of the binary data.

- Returns: `<number>`

```ts
import { BinaryData } from 'att-string-transcoder';

const data = new BinaryData('00000111111110001011110111110101');

const unsignedInteger = data.toUnsignedInteger();
// `unsignedInteger` is `133742069`
```

---

### `toUnsignedIntegerArray()`

Returns the binary data as a comma-separated array of unsigned integers.

- Returns: `<Array<number>>`

```ts
import { BinaryData } from 'att-string-transcoder';

const data = new BinaryData(
  '000000000000000000000101001110010000000000000000000000011010010000000000000000000000000001000101'
);

const unsignedIntegers = data.toUnsignedIntegerArray();
// `unsignedIntegers` is `[1337, 420, 69]`
```

---

### `toUnsignedLong()`

Returns the unsigned long integer representation of the binary data.

- Returns: `<number>`

```ts
import { BinaryData } from 'att-string-transcoder';

const data = new BinaryData('0000011111111000101111011111010100000000000000000000000000000000');

const unsignedLongInteger = data.toUnsignedLong();
// `unsignedLongInteger` is `133742069`
```

---

### `toUnsignedShort()`

Returns the unsigned short integer representation of the binary data.

- Returns: `<number>`

```ts
import { BinaryData } from 'att-string-transcoder';

const data = new BinaryData('0000010100111001');

const unsignedShortInteger = data.toUnsignedShort();
// `unsignedShortInteger` is `1337`
```
