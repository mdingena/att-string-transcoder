# Class: `LogicFloatReceiverComponent`

- [Types](#types)
  - [`<ComponentProps>`](#componentprops)
  - [`<LogicFloatReceiverComponentProps>`](#logicfloatreceivercomponentprops)
- [Constructors](#constructors)
  - [`new LogicFloatReceiverComponent(props)`](#new-logicfloatreceivercomponentprops)
  - [`LogicFloatReceiverComponent.fromBinary(reader, version)`](#logicfloatreceivercomponentfrombinaryreader-version)
- [Properties](#properties)
  - [`hash`](#hash)
  - [`name`](#name)
  - [`version`](#version)
  - [`sender`](#sender)
- [Methods](#methods)
  - [`toBinary(version?)`](#tobinaryversion)
  - [`write(writer, version?)`](#writewriter-version)

## Types

### `<ComponentProps>`

See [`<ComponentProps>`](./Component.md#componentprops)

---

### `<LogicFloatReceiverComponentProps>`

A portion of the configuration object to pass to the `LogicFloatReceiverComponent` constructor.

```ts
type LogicFloatReceiverComponentPropsV1 = {
  sender?: number | undefined;
};

type LogicFloatReceiverComponentProps = LogicFloatReceiverComponentPropsV1;
```

#### Since v1

- `sender` (optional, default `0`) `<number>`

## Constructors

### `new LogicFloatReceiverComponent(props)`

Creates a versioned `LogicFloatReceiver` component.

- `props` [`<ComponentProps & LogicFloatReceiverComponentProps>`](#types) Configuration of the component to create.
- Returns: `<LogicFloatReceiverComponent>`

```ts
import { LogicFloatReceiverComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new LogicFloatReceiverComponent({ version: componentVersion });
```

---

### `LogicFloatReceiverComponent.fromBinary(reader, version)`

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

### `sender`

The identifier of the `LogicFloatSender` that is connected to this `LogicFloatReceiver`.

- Since: `v1`
- `<number>`

```ts
import { LogicFloatReceiverComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new LogicFloatReceiverComponent({ version: componentVersion });

const sender = component.sender;
// `sender` is `1`
```

## Methods

### `toBinary(version?)`

See [`Component.toBinary(version?)`](./Component.md#tobinaryversion)

---

### `write(writer, version?)`

See [`Component.write(writer, version?)`](./Component.md#writewriter-version)
