# Class: `LogicIntReceiverComponent`

- [Types](#types)
  - [`<ComponentProps>`](#componentprops)
  - [`<LogicIntReceiverComponentProps>`](#logicintreceivercomponentprops)
- [Constructors](#constructors)
  - [`new LogicIntReceiverComponent(props)`](#new-logicintreceivercomponentprops)
  - [`LogicIntReceiverComponent.fromBinary(reader, version)`](#logicintreceivercomponentfrombinaryreader-version)
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

### `<LogicIntReceiverComponentProps>`

A portion of the configuration object to pass to the `LogicIntReceiverComponent` constructor.

```ts
type LogicIntReceiverComponentPropsV1 = {
  sender?: number | undefined;
};

type LogicIntReceiverComponentProps = LogicIntReceiverComponentPropsV1;
```

#### Since v1

- `sender` (optional, default `0`) `<number>`

## Constructors

### `new LogicIntReceiverComponent(props)`

Creates a versioned `LogicIntReceiver` component.

- `props` [`<ComponentProps & LogicIntReceiverComponentProps>`](#types) Configuration of the component to create.
- Returns: `<LogicIntReceiverComponent>`

```ts
import { LogicIntReceiverComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new LogicIntReceiverComponent({ version: componentVersion });
```

---

### `LogicIntReceiverComponent.fromBinary(reader, version)`

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

The identifier of the `LogicIntSender` that is connected to this `LogicIntReceiver`.

- Since: `v1`
- `<number>`

```ts
import { LogicIntReceiverComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new LogicIntReceiverComponent({ version: componentVersion });

const sender = component.sender;
// `sender` is `0`
```

## Methods

### `toBinary(version?)`

See [`Component.toBinary(version?)`](./Component.md#tobinaryversion)

---

### `write(writer, version?)`

See [`Component.write(writer, version?)`](./Component.md#writewriter-version)
