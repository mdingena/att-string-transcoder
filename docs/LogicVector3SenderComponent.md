# Class: `LogicVector3SenderComponent`

- [Types](#types)
  - [`<ComponentProps>`](#componentprops)
  - [`<LogicVector3SenderComponentProps>`](#logicvector3sendercomponentprops)
- [Constructors](#constructors)
  - [`new LogicVector3SenderComponent(props)`](#new-logicvector3sendercomponentprops)
  - [`LogicVector3SenderComponent.fromBinary(reader, version)`](#logicvector3sendercomponentfrombinaryreader-version)
- [Properties](#properties)
  - [`hash`](#hash)
  - [`name`](#name)
  - [`version`](#version)
  - [`updatedValue`](#updatedvalue)
  - [`changedExternally`](#changedexternally)
  - [`identifier`](#identifier)
  - [`value`](#value)
- [Methods](#methods)
  - [`toBinary(version?)`](#tobinaryversion)
  - [`write(writer, version?)`](#writewriter-version)

## Types

### `<ComponentProps>`

See [`<ComponentProps>`](./Component.md#componentprops)

---

### `<LogicVector3SenderComponentProps>`

A portion of the configuration object to pass to the `LogicVector3SenderComponent` constructor.

```ts
type LogicVector3SenderComponentPropsV1 = {
  updatedValue?: number | undefined;
  changedExternally?: number | undefined;
  identifier?: number | undefined;
  value?: vector3ean | undefined;
};

type LogicVector3SenderComponentProps = LogicVector3SenderComponentPropsV1;
```

#### Since v1

- `updatedValue` (optional, default `3171294583`) `<number>`
- `changedExternally` (optional, default `32`) `<number>`
- `identifier` (optional, default `0`) `<number>`
- `value` (optional, default `{ x: 0, y: 0, z: 0 }`) `<Vector3>`

## Constructors

### `new LogicVector3SenderComponent(props)`

Creates a versioned `LogicVector3Sender` component.

- `props` [`<ComponentProps & LogicVector3SenderComponentProps>`](#types) Configuration of the component to create.
- Returns: `<LogicVector3SenderComponent>`

```ts
import { LogicVector3SenderComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new LogicVector3SenderComponent({ version: componentVersion });
```

---

### `LogicVector3SenderComponent.fromBinary(reader, version)`

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

### `updatedValue`

We're not quite sure what this property does.

- Since: `v1`
- `<number>`

```ts
import { LogicVector3SenderComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new LogicVector3SenderComponent({ version: componentVersion });

const updatedValue = component.updatedValue;
// `updatedValue` is `3171294583`
```

---

### `changedExternally`

We're not quite sure what this property does.

- Since: `v1`
- `<number>`

```ts
import { LogicVector3SenderComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new LogicVector3SenderComponent({ version: componentVersion });

const changedExternally = component.changedExternally;
// `changedExternally` is `32`
```

---

### `identifier`

The identifier of this `LogicVector3Sender` that a `LogicVector3Receiver` connects to.

- Since: `v1`
- `<number>`

```ts
import { LogicVector3SenderComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new LogicVector3SenderComponent({ version: componentVersion });

const identifier = component.identifier;
// `identifier` is `0`
```

---

### `value`

The output value of this `LogicVector3Sender` that a `LogicVector3Receiver` reads as its input.

- Since: `v1`
- `<Vector3>`

```ts
import { LogicVector3SenderComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new LogicVector3SenderComponent({ version: componentVersion });

const value = component.value;
// `value` is `{ x: 0, y: 0, z: 0 }`
```

## Methods

### `toBinary(version?)`

See [`Component.toBinary(version?)`](./Component.md#tobinaryversion)

---

### `write(writer, version?)`

See [`Component.write(writer, version?)`](./Component.md#writewriter-version)
