# Class: `LogicVector3ReceiverComponent`

- [Types](#types)
  - [`<ComponentProps>`](#componentprops)
  - [`<LogicVector3ReceiverComponentProps>`](#logicvector3receivercomponentprops)
- [Constructors](#constructors)
  - [`new LogicVector3ReceiverComponent(props)`](#new-logicvector3receivercomponentprops)
  - [`LogicVector3ReceiverComponent.fromBinary(reader, version)`](#logicvector3receivercomponentfrombinaryreader-version)
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

### `<LogicVector3ReceiverComponentProps>`

A portion of the configuration object to pass to the `LogicVector3ReceiverComponent` constructor.

```ts
type LogicVector3ReceiverComponentPropsV1 = {
  sender?: number | undefined;
};

type LogicVector3ReceiverComponentProps = LogicVector3ReceiverComponentPropsV1;
```

#### Since v1

- `sender` (optional, default `0`) `<number>`

## Constructors

### `new LogicVector3ReceiverComponent(props)`

Creates a versioned `LogicVector3Receiver` component.

- `props` [`<ComponentProps & LogicVector3ReceiverComponentProps>`](#types) Configuration of the component to create.
- Returns: `<LogicVector3ReceiverComponent>`

```ts
import { LogicVector3ReceiverComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new LogicVector3ReceiverComponent({ version: componentVersion });
```

---

### `LogicVector3ReceiverComponent.fromBinary(reader, version)`

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

The identifier of the `LogicVector3Sender` that is connected to this `LogicVector3Receiver`.

- Since: `v1`
- `<number>`

```ts
import { LogicVector3ReceiverComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new LogicVector3ReceiverComponent({ version: componentVersion });

const sender = component.sender;
// `sender` is `0`
```

## Methods

### `toBinary(version?)`

See [`Component.toBinary(version?)`](./Component.md#tobinaryversion)

---

### `write(writer, version?)`

See [`Component.write(writer, version?)`](./Component.md#writewriter-version)
