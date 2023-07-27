# Class: `LogicBoolReceiverComponent`

- [Types](#types)
  - [`<ComponentProps>`](#componentprops)
  - [`<LogicBoolReceiverComponentProps>`](#logicboolreceivercomponentprops)
- [Constructors](#constructors)
  - [`new LogicBoolReceiverComponent(props)`](#new-logicboolreceivercomponentprops)
  - [`LogicBoolReceiverComponent.fromBinary(reader, version)`](#logicboolreceivercomponentfrombinaryreader-version)
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

### `<LogicBoolReceiverComponentProps>`

A portion of the configuration object to pass to the `LogicBoolReceiverComponent` constructor.

```ts
type LogicBoolReceiverComponentPropsV1 = {
  sender?: number | undefined;
};

type LogicBoolReceiverComponentProps = LogicBoolReceiverComponentPropsV1;
```

#### Since v1

- `sender` (optional, default `0`) `<number>`

## Constructors

### `new LogicBoolReceiverComponent(props)`

Creates a versioned `LogicBoolReceiver` component.

- `props` [`<ComponentProps & LogicBoolReceiverComponentProps>`](#types) Configuration of the component to create.
- Returns: `<LogicBoolReceiverComponent>`

```ts
import { LogicBoolReceiverComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new LogicBoolReceiverComponent({ version: componentVersion });
```

---

### `LogicBoolReceiverComponent.fromBinary(reader, version)`

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

The identifier of the `LogicBoolSender` that is connected to this `LogicBoolReceiver`.

- Since: `v1`
- `<number>`

```ts
import { LogicBoolReceiverComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new LogicBoolReceiverComponent({ version: componentVersion });

const sender = component.sender;
// `sender` is `1`
```

## Methods

### `toBinary(version?)`

See [`Component.toBinary(version?)`](./Component.md#tobinaryversion)

---

### `write(writer, version?)`

See [`Component.write(writer, version?)`](./Component.md#writewriter-version)
