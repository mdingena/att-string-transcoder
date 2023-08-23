# Class: `SentGiftComponent`

- [Types](#types)
  - [`<ComponentProps>`](#componentprops)
  - [`<SentGiftComponentProps>`](#sentgiftcomponentprops)
- [Constructors](#constructors)
  - [`new SentGiftComponent(props)`](#new-sentgiftcomponentprops)
  - [`SentGiftComponent.fromBinary(reader, version)`](#sentgiftcomponentfrombinaryreader-version)
- [Properties](#properties)
  - [`hash`](#hash)
  - [`name`](#name)
  - [`version`](#version)
  - [`receiverName`](#receivername)
  - [`senderName`](#sendername)
  - [`gifts`](#gifts)
  - [`senderTag`](#sendertag)
- [Methods](#methods)
  - [`toBinary(version?)`](#tobinaryversion)
  - [`write(writer, version?)`](#writewriter-version)

## Types

### `<ComponentProps>`

See [`<ComponentProps>`](./Component.md#componentprops)

---

### `<SentGiftComponentProps>`

A portion of the configuration object to pass to the `SentGiftComponent` constructor.

```ts
type Gift = null | {
  data: number[];
  messageSizeInBytes: number;
  hash: number;
  chunkVersioning: number[];
};

type SentGiftTag = null | {
  from: number;
  to: number;
};

type SentGiftComponentPropsV1 = {
  receiverName?: string | undefined;
  senderName?: string | undefined;
  gifts?: Gift[] | undefined;
  senderTag?: SentGiftTag | undefined;
};

type SentGiftComponentProps = SentGiftComponentPropsV1;
```

#### Since v1

- `receiverName` (optional, default `''`) `<string>`
- `senderName` (optional, default `''`) `<string>`
- `gifts` (optional, default `[]`) `<Array<Gift>>`
- `senderTag` (optional, default `null`) `<SentGiftTag>`

## Constructors

### `new SentGiftComponent(props)`

Creates a versioned `SentGift` component.

- `props` [`<ComponentProps & SentGiftComponentProps>`](#types) Configuration of the component to create.
- Returns: `<SentGiftComponent>`

```ts
import { SentGiftComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new SentGiftComponent({ version: componentVersion });
```

---

### `SentGiftComponent.fromBinary(reader, version)`

See [`Component.fromBinary(reader, version)`](./Component.md#componentfrombinaryreader-version)

## Properties

Note that the following properties are sorted in order of appearance when decoding component binary data.

### `hash`

See [`Component.hash`](./Component.md#hash)

---

### `name`

See [`Component.name`](./Component.md#name)

---

### `version`

See [`Component.version`](./Component.md#version)

---

### `receiverName`

Name of the player intended as the receiver of the prefab this component is attached to.

- Since: `v1`
- `<string>`

```ts
import { SentGiftComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new SentGiftComponent({ version: componentVersion });

const receiverName = component.receiverName;
// `receiverName` is `''`
```

---

### `senderName`

Name of the player intended as the sender of the prefab this component is attached to. This name will be displayed as a label on a gift box prefab.

- Since: `v1`
- `<string>`

```ts
import { SentGiftComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new SentGiftComponent({ version: componentVersion });

const senderName = component.senderName;
// `senderName` is `''`
```

---

### `gifts`

Array of gifts, which are prefab save strings.

- Since: `v1`
- `<Array<Gift>>`

```ts
import { SentGiftComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new SentGiftComponent({ version: componentVersion });

const gifts = component.gifts;
// `gifts` is `[]`
```

---

### `senderTag`

- Since: `v3`
- `<SentGiftTag>`

```ts
import { SentGiftComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new SentGiftComponent({ version: componentVersion });

const senderTag = component.senderTag;
// `senderTag` is `null`
```

## Methods

### `toBinary(version?)`

See [`Component.toBinary(version?)`](./Component.md#tobinaryversion)

---

### `write(writer, version?)`

See [`Component.write(writer, version?)`](./Component.md#writewriter-version)
