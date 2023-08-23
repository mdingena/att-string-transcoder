# Class: `PopulationSpawnAreaComponent`

- [Types](#types)
  - [`<ComponentProps>`](#componentprops)
  - [`<PopulationSpawnAreaComponentProps>`](#populationspawnareacomponentprops)
- [Constructors](#constructors)
  - [`new PopulationSpawnAreaComponent(props)`](#new-populationspawnareacomponentprops)
  - [`PopulationSpawnAreaComponent.fromBinary(reader, version)`](#populationspawnareacomponentfrombinaryreader-version)
- [Properties](#properties)
  - [`hash`](#hash)
  - [`name`](#name)
  - [`version`](#version)
  - [`definition`](#definition)
  - [`isPopulationStarted`](#ispopulationstarted)
  - [`children`](#children)
  - [`maxPopulation`](#maxpopulation)
  - [`currentPopulation`](#currentpopulation)
  - [`checkPopulationTime`](#checkpopulationtime)
  - [`numberOfSpawnPoints`](#numberofspawnpoints)
  - [`startingPopulation`](#startingpopulation)
  - [`isOneOff`](#isoneoff)
- [Methods](#methods)
  - [`toBinary(version?)`](#tobinaryversion)
  - [`write(writer, version?)`](#writewriter-version)

## Types

### `<ComponentProps>`

See [`<ComponentProps>`](./Component.md#componentprops)

---

### `<PopulationSpawnAreaComponentProps>`

A portion of the configuration object to pass to the `PopulationSpawnAreaComponent` constructor.

```ts
type PopulationSaveDataChild = null | {
  index: number;
  pointIndex: number;
};

type PopulationSpawnAreaComponentPropsV2 = {
  definition?: number | undefined;
  isPopulationStarted?: boolean | undefined;
  children?: PopulationSaveDataChild[] | undefined;
  maxPopulation?: number | undefined;
  currentPopulation?: number | undefined;
  checkPopulationTime?: number | undefined;
  numberOfSpawnPoints?: number | undefined;
  startingPopulation?: number | undefined;
  isOneOff?: boolean | undefined;
};

type PopulationSpawnAreaComponentProps = PopulationSpawnAreaComponentPropsV2;
```

#### Since v2

- `definition` (optional, default `30040`) [`<PopulationDefinitionHash>`](../src/types/PopulationDefinitionHash.ts)
- `isPopulationStarted` (optional, default `true`) `<boolean>`
- `children` (optional, default `[]`) `<Array<PopulationSaveDataChild>>`
- `maxPopulation` (optional, default `20`) `<number>`
- `currentPopulation` (optional, default `5`) `<number>`
- `checkPopulationTime` (optional, default `852974979330`) `<number>`
- `numberOfSpawnPoints` (optional, default `40`) `<number>`
- `startingPopulation` (optional, default `5`) `<number>`
- `isOneOff` (optional, default `false`) `<boolean>`

## Constructors

### `new PopulationSpawnAreaComponent(props)`

Creates a versioned `PopulationSpawnArea` component.

- `props` [`<ComponentProps & PopulationSpawnAreaComponentProps>`](#types) Configuration of the component to create.
- Returns: `<PopulationSpawnAreaComponent>`

```ts
import { PopulationSpawnAreaComponent } from 'att-string-transcoder';

const componentVersion = 2;
const component = new PopulationSpawnAreaComponent({ version: componentVersion });
```

---

### `PopulationSpawnAreaComponent.fromBinary(reader, version)`

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

### `definition`

The hash of the population to spawn in the `SpawnArea` component that is attached to the same prefab this component is attached to.

- Since: `v2`
- [`<PopulationDefinitionHash>`](../src/types/PopulationDefinitionHash.ts)

```ts
import { PopulationSpawnAreaComponent } from 'att-string-transcoder';

const componentVersion = 2;
const component = new PopulationSpawnAreaComponent({ version: componentVersion });

const definition = component.definition;
// `definition` is `30040`
```

---

### `isPopulationStarted`

- Since: `v2`
- `<boolean>`

```ts
import { PopulationSpawnAreaComponent } from 'att-string-transcoder';

const componentVersion = 2;
const component = new PopulationSpawnAreaComponent({ version: componentVersion });

const isPopulationStarted = component.isPopulationStarted;
// `isPopulationStarted` is `true`
```

---

### `children`

- Since: `v2`
- `<Array<PopulationSaveDataChild>>`

```ts
import { PopulationSpawnAreaComponent } from 'att-string-transcoder';

const componentVersion = 2;
const component = new PopulationSpawnAreaComponent({ version: componentVersion });

const children = component.children;
// `children` is `[]`
```

---

### `maxPopulation`

The maximum amount of spawned prefabs in this population.

- Since: `v2`
- `<number>`

```ts
import { PopulationSpawnAreaComponent } from 'att-string-transcoder';

const componentVersion = 2;
const component = new PopulationSpawnAreaComponent({ version: componentVersion });

const maxPopulation = component.maxPopulation;
// `maxPopulation` is `20`
```

---

### `currentPopulation`

The current amount of spawned prefabs in this population.

- Since: `v2`
- `<number>`

```ts
import { PopulationSpawnAreaComponent } from 'att-string-transcoder';

const componentVersion = 2;
const component = new PopulationSpawnAreaComponent({ version: componentVersion });

const currentPopulation = component.currentPopulation;
// `currentPopulation` is `5`
```

---

### `checkPopulationTime`

- Since: `v2`
- `<number>`

```ts
import { PopulationSpawnAreaComponent } from 'att-string-transcoder';

const componentVersion = 2;
const component = new PopulationSpawnAreaComponent({ version: componentVersion });

const checkPopulationTime = component.checkPopulationTime;
// `checkPopulationTime` is `852974979330`
```

---

### `numberOfSpawnPoints`

The amount of spawn locations inside the `SpawnArea` component that is attached to the same prefab this component is attached to.

- Since: `v2`
- `<number>`

```ts
import { PopulationSpawnAreaComponent } from 'att-string-transcoder';

const componentVersion = 2;
const component = new PopulationSpawnAreaComponent({ version: componentVersion });

const numberOfSpawnPoints = component.numberOfSpawnPoints;
// `numberOfSpawnPoints` is `40`
```

---

### `startingPopulation`

The amount of spawned prefabs that this population begins with.

- Since: `v2`
- `<number>`

```ts
import { PopulationSpawnAreaComponent } from 'att-string-transcoder';

const componentVersion = 2;
const component = new PopulationSpawnAreaComponent({ version: componentVersion });

const startingPopulation = component.startingPopulation;
// `startingPopulation` is `5`
```

---

### `isOneOff`

Whether any removed prefabs from this population shouldn't be replaced after the server's respawn timer has elapsed.

- Since: `v2`
- `<number>`

```ts
import { PopulationSpawnAreaComponent } from 'att-string-transcoder';

const componentVersion = 2;
const component = new PopulationSpawnAreaComponent({ version: componentVersion });

const isOneOff = component.isOneOff;
// `isOneOff` is `false`
```

## Methods

### `toBinary(version?)`

See [`Component.toBinary(version?)`](./Component.md#tobinaryversion)

---

### `write(writer, version?)`

See [`Component.write(writer, version?)`](./Component.md#writewriter-version)
