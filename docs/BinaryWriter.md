# Class: `BinaryWriter`

- [Constructors](#constructors)
  - [`new BinaryWriter()`](#new-binarywriter)
- [Methods](#methods)
  - [`flush()`](#flush)
  - [`writeBits(data)`](#writebitsdata)
  - [`writeBoolean(boolean)`](#writebooleanboolean)
  - [`writeChar(char)`](#writecharchar)
  - [`writeFloat(float)`](#writefloatfloat)
  - [`writeSignedInteger(signedInteger)`](#writesignedintegersignedinteger)
  - [`writeString(string)`](#writestringstring)
  - [`writeUnsignedInteger(unsignedInteger)`](#writeunsignedintegerunsignedinteger)
  - [`writeUnsignedLong(unsignedLong)`](#writeunsignedlongunsignedlong)
  - [`writeUnsignedShort(unsignedShort)`](#writeunsignedshortunsignedshort)

## Constructors

### `new BinaryWriter()`

Creates a writer to store information using various write methods.

- Returns: `<BinaryWriter>`

```ts
import { BinaryReader } from 'att-string-transcoder';

const reader = new BinaryReader('11110111001100010000');
```

## Methods

### `flush()`

Returns the stored binary string and resets the BinaryWriter's internal memory.

- Returns: [`<BinaryString>`](./BinaryString.md)

```ts
import { BinaryWriter } from 'att-string-transcoder';

const writer = new BinaryWriter();

writer.writeBoolean(true); // internal memory is `'1'`
writer.writeBoolean(true); // internal memory is `'11'`
writer.writeBoolean(true); // internal memory is `'111'`

const output = writer.flush(); // internal memory is `''`
// `output` is `'111'`
```

---

### `writeBits(data)`

Writes raw binary data into BinaryWriter's internal memory.

- `data` `<string>` The binary string data to store in internal memory.
- Returns: `<void>`

```ts
import { BinaryWriter } from 'att-string-transcoder';

const writer = new BinaryWriter();

writer.writeBits('11110111001100010000');
```

---

### `writeBoolean(boolean)`

Writes a boolean into BinaryWriter's internal memory.

- `boolean` `<boolean>` The boolean to store in internal memory.
- Returns: `<void>`

```ts
import { BinaryWriter } from 'att-string-transcoder';

const writer = new BinaryWriter();

writer.writeBoolean(true);
```

---

### `writeChar(char)`

Writes a character into BinaryWriter's internal memory.

- `char` `<string>` The character to store in internal memory.
- Returns: `<void>`

```ts
import { BinaryWriter } from 'att-string-transcoder';

const writer = new BinaryWriter();

writer.writeChar('x');
```

---

### `writeFloat(float)`

Writes a floating point number into BinaryWriter's internal memory.

- `float` `<number>` The floating point number to store in internal memory.
- Returns: `<void>`

```ts
import { BinaryWriter } from 'att-string-transcoder';

const writer = new BinaryWriter();

writer.writeFloat(0.69);
```

---

### `writeSignedInteger(signedInteger)`

Writes a signed integer into BinaryWriter's internal memory.

- `signedInteger` `<number>` The signed integer to store in internal memory.
- Returns: `<void>`

```ts
import { BinaryWriter } from 'att-string-transcoder';

const writer = new BinaryWriter();

writer.writeSignedInteger(-420);
```

---

### `writeString(string)`

Writes a string into BinaryWriter's internal memory.

- `string` `<string>` The string to store in internal memory.
- Returns: `<void>`

```ts
import { BinaryWriter } from 'att-string-transcoder';

const writer = new BinaryWriter();

writer.writeString('Hello, world!');
```

---

### `writeUnsignedInteger(unsignedInteger)`

Writes an unsigned integer into BinaryWriter's internal memory.

- `unsignedInteger` `<number>` The unsigned integer to store in internal memory.
- Returns: `<void>`

```ts
import { BinaryWriter } from 'att-string-transcoder';

const writer = new BinaryWriter();

writer.writeUnsignedInteger(69420);
```

---

### `writeUnsignedLong(unsignedLong)`

Writes an unsigned long integer into BinaryWriter's internal memory.

- `unsignedLong` `<number>` The unsigned long integer to store in internal memory.
- Returns: `<void>`

```ts
import { BinaryWriter } from 'att-string-transcoder';

const writer = new BinaryWriter();

writer.writeUnsignedLong(133742069);
```

---

### `writeUnsignedShort(unsignedShort)`

Writes an unsigned short integer into BinaryWriter's internal memory.

- `unsignedShort` `<number>` The unsigned short integer to store in internal memory.
- Returns: `<void>`

```ts
import { BinaryWriter } from 'att-string-transcoder';

const writer = new BinaryWriter();

writer.writeUnsignedShort(1337);
```
