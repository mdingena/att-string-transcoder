# Class: `PickupComponent`

- [Types](#types)
  - [`<ComponentProps>`](#componentprops)
  - [`<PickupComponentProps>`](#pickupcomponentprops)
- [Constructors](#constructors)
  - [`new PickupComponent(props)`](#new-pickupcomponentprops)
  - [`PickupComponent.fromBinary(reader, version)`](#pickupcomponentfrombinaryreader-version)
- [Properties](#properties)
  - [`hash`](#hash)
  - [`name`](#name)
  - [`version`](#version)
  - [`lastInteractorPlayerId`](#lastinteractorplayerid)
  - [`dockedMemory`](#dockedmemory)
- [Methods](#methods)
  - [`toBinary(version?)`](#tobinaryversion)
  - [`write(writer, version?)`](#writewriter-version)

## Types

### `<ComponentProps>`

See [`<ComponentProps>`](./Component.md#componentprops)

---

### `<PickupComponentProps>`

A portion of the configuration object to pass to the `PickupComponent` constructor.

```ts
type GrabPointParameters = null | {
  grabPointIndex: number;
  lastLinearPosition: number;
  lastPosition: Position;
  lastRotation: Rotation;
};

type PickupComponentPropsV1 = {
  lastInteractorPlayerId?: number | undefined;
  dockedMemory?: never;
};

type PickupComponentPropsV2 = {
  lastInteractorPlayerId?: number | undefined;
  dockedMemory?: GrabPointParameters[] | undefined;
};

type PickupComponentProps = PickupComponentPropsV1 | PickupComponentPropsV2;
```

#### Since v1

- `lastInteractorPlayerId` (optional, default `0`) `<number>`

#### Since v2

- `lastInteractorPlayerId` (optional, default `0`) `<number>`
- `dockedMemory` (optional, default `[]`) `<Array<GrabPointParameters>>`

## Constructors

### `new PickupComponent(props)`

Creates a versioned `Pickup` component.

- `props` [`<ComponentProps & PickupComponentProps>`](#types) Configuration of the component to create.
- Returns: `<PickupComponent>`

```ts
import { PickupComponent } from 'att-string-transcoder';

const componentVersion = 2;
const component = new PickupComponent({ version: componentVersion });
```

---

### `PickupComponent.fromBinary(reader, version)`

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

### `lastInteractorPlayerId`

The ID of the player that last interacted with the prefab that this component is attached to.

- Since: `v1`
- `<number>`

```ts
import { PickupComponent } from 'att-string-transcoder';

const componentVersion = 2;
const component = new PickupComponent({ version: componentVersion });

const lastInteractorPlayerId = component.lastInteractorPlayerId;
// `lastInteractorPlayerId` is `0`
```

---

### `dockedMemory`

An array of `<GrabPointParameters>` that describes the orientation of prefabs when they were docked. Used to control in which orientation pickups should be held when grabbed from the dock attached to the same prefab this component is attached to.

- Since: `v2`
- `<number>`

```ts
import { PickupComponent } from 'att-string-transcoder';

const componentVersion = 2;
const component = new PickupComponent({ version: componentVersion });

const dockedMemory = component.dockedMemory;
// `dockedMemory` is `[]`
```

## Methods

### `toBinary(version?)`

See [`Component.toBinary(version?)`](./Component.md#tobinaryversion)

---

### `write(writer, version?)`

See [`Component.write(writer, version?)`](./Component.md#writewriter-version)
