# Class: `NetworkRigidbodyComponent`

- [Types](#types)
  - [`<ComponentProps>`](#componentprops)
  - [`<NetworkRigidbodyComponentProps>`](#networkrigidbodycomponentprops)
- [Constructors](#constructors)
  - [`new NetworkRigidbodyComponent(props)`](#new-networkrigidbodycomponentprops)
  - [`NetworkRigidbodyComponent.fromBinary(reader, version)`](#networkrigidbodycomponentfrombinaryreader-version)
- [Properties](#properties)
  - [`hash`](#hash)
  - [`name`](#name)
  - [`version`](#version)
  - [`isDisabled`](#isdisabled)
  - [`timelineEntry`](#timelineentry)
- [Methods](#methods)
  - [`toBinary(version?)`](#tobinaryversion)
  - [`write(writer, version?)`](#writewriter-version)

## Types

### `<ComponentProps>`

See [`<ComponentProps>`](./Component.md#componentprops)

---

### `<NetworkRigidbodyComponentProps>`

A portion of the configuration object to pass to the `NetworkRigidbodyComponent` constructor.

```ts
type NetworkRigidbodyComponentPropsV1 = {
  position?: Position | undefined;
  rotation?: Rotation | undefined;
  isKinematic?: boolean | undefined;
  isServerSleeping?: boolean | undefined;
  velocity?: Velocity | undefined;
  angularVelocity?: AngularVelocity | undefined;
};

type NetworkRigidbodyComponentProps = NetworkRigidbodyComponentPropsV1;
```

#### Since v1

- `position` (optional, default `{ x: 0, y: 0, z: 0 }`) [`<Position>`](../src/types/Position.ts)
- `rotation` (optional, default `{ x: 0, y: 0, z: 0, w: 1 }`) [`<Rotation>`](../src/types/Rotation.ts)
- `isKinematic` (optional, default `false`) `<boolean>`
- `isServerSleeping` (optional, default `false`) `<boolean>`
- `velocity` (optional, default `{ x: 0, y: 0, z: 0 }`) [`<Velocity>`](../src/types/Velocity.ts)
- `angularVelocity` (optional, default `{ x: 0, y: 0, z: 0 }`) [`<AngularVelocity>`](../src/types/AngularVelocity.ts)

## Constructors

### `new NetworkRigidbodyComponent(props)`

Creates a versioned `NetworkRigidbody` component.

- `props` [`<ComponentProps & NetworkRigidbodyComponentProps>`](#types) Configuration of the component to create.
- Returns: `<NetworkRigidbodyComponent>`

```ts
import { NetworkRigidbodyComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new NetworkRigidbodyComponent({ version: componentVersion });
```

---

### `NetworkRigidbodyComponent.fromBinary(reader, version)`

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

### `position`

Position of the prefab this component is attached to.

- Since: `v1`
- [`<Position>`](../src/types/Position.ts)

```ts
import { NetworkRigidbodyComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new NetworkRigidbodyComponent({ version: componentVersion });

const position = component.position;
// `position` is `{ x: 0, y: 0, z: 0 }`
```

---

### `rotation`

Rotation of the prefab this component is attached to.

- Since: `v1`
- [`<Rotation>`](../src/types/Rotation.ts)

```ts
import { NetworkRigidbodyComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new NetworkRigidbodyComponent({ version: componentVersion });

const rotation = component.rotation;
// `rotation` is `{ x: 0, y: 0, z: 0, w: 1 }`
```

---

### `isKinematic`

Whether the prefab this component is attached to is [kinematic](https://docs.unity3d.com/ScriptReference/Rigidbody-isKinematic.html) or not.

- Since: `v1`
- `<boolean>`

```ts
import { NetworkRigidbodyComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new NetworkRigidbodyComponent({ version: componentVersion });

const isKinematic = component.isKinematic;
// `isKinematic` is `false`
```

---

### `isServerSleeping`

Whether the prefab this component is attached to is [sleeping](https://docs.unity3d.com/Manual/RigidbodiesOverview.html) or not.

- Since: `v1`
- `<boolean>`

```ts
import { NetworkRigidbodyComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new NetworkRigidbodyComponent({ version: componentVersion });

const isServerSleeping = component.isServerSleeping;
// `isServerSleeping` is `false`
```

---

### `velocity`

Velocity of the prefab this component is attached to.

- Since: `v1`
- [`<Velocity>`](../src/types/Velocity.ts)

```ts
import { NetworkRigidbodyComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new NetworkRigidbodyComponent({ version: componentVersion });

const velocity = component.velocity;
// `velocity` is `{ x: 0, y: 0, z: 0 }`
```

---

### `angularVelocity`

Angular velocity of the prefab this component is attached to.

- Since: `v1`
- [`<AngularVelocity>`](../src/types/AngularVelocity.ts)

```ts
import { NetworkRigidbodyComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new NetworkRigidbodyComponent({ version: componentVersion });

const angularVelocity = component.angularVelocity;
// `angularVelocity` is `{ x: 0, y: 0, z: 0 }`
```

## Methods

### `toBinary(version?)`

See [`Component.toBinary(version?)`](./Component.md#tobinaryversion)

---

### `write(writer, version?)`

See [`Component.write(writer, version?)`](./Component.md#writewriter-version)
