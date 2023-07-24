# Class: `LiquidContainerComponent`

- [Types](#types)
  - [`<ComponentProps>`](#componentprops)
  - [`<LiquidContainerComponentProps>`](#liquidcontainercomponentprops)
- [Constructors](#constructors)
  - [`new LiquidContainerComponent(props)`](#new-liquidcontainercomponentprops)
  - [`LiquidContainerComponent.fromBinary(reader, version)`](#liquidcontainercomponentfrombinaryreader-version)
- [Properties](#properties)
  - [`hash`](#hash)
  - [`name`](#name)
  - [`version`](#version)
  - [`canAddTo`](#canaddto)
  - [`canRemoveFrom`](#canremovefrom)
  - [`contentLevel`](#contentlevel)
  - [`hasContent`](#hascontent)
  - [`isCustom`](#iscustom)
  - [`presetHash`](#presethash)
  - [`customData`](#customdata)
- [Methods](#methods)
  - [`toBinary(version?)`](#tobinaryversion)
  - [`write(writer, version?)`](#writewriter-version)

## Types

### `<ComponentProps>`

See [`<ComponentProps>`](./Component.md#componentprops)

---

### `<LiquidContainerComponentProps>`

A portion of the configuration object to pass to the `LiquidContainerComponent` constructor.

```ts
type Color = {
  r: number;
  g: number;
  b: number;
  a: number;
};

type Effect = null | {
  hash: number;
  strengthMultiplier: number;
};

type FoodChunk = number;

type CustomData = {
  color: Color;
  isConsumableThroughSkin: boolean;
  visualDataHash: number;
  effects: Effect[];
  foodChunks: FoodChunk[];
};

type LiquidContainerComponentPropsV1 = {
  canAddTo?: boolean | undefined;
  canRemoveFrom?: boolean | undefined;
  contentLevel?: number | undefined;
  hasContent?: boolean | undefined;
  isCustom?: boolean | undefined;
  presetHash?: number | undefined;
  customData?: null | CustomData | undefined;
};

export type LiquidContainerComponentProps = LiquidContainerComponentPropsV1;
```

#### Since v1

- `canAddTo` (optional, default `false`) `<boolean>`
- `canRemoveFrom` (optional, default `false`) `<boolean>`
- `contentLevel` (optional, default `0`) `<number>`
- `hasContent` (optional, default `false`) `<boolean>`
- `isCustom` (optional, default `false`) `<boolean>`
- `presetHash` (optional, default `0`) [`<PresetHash | 0>`](../src/types/PresetHash.ts)
- `customData` (optional, default `null`) `<CustomData | null>`

## Constructors

### `new LiquidContainerComponent(props)`

Creates a versioned `LiquidContainer` component.

- `props` [`<ComponentProps & LiquidContainerComponentProps>`](#types) Configuration of the component to create.
- Returns: `<LiquidContainerComponent>`

```ts
import { LiquidContainerComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new LiquidContainerComponent({ version: componentVersion });
```

---

### `LiquidContainerComponent.fromBinary(reader, version)`

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

### `canAddTo`

Whether any content can be added to the liquid container or not.

- Since: `v1`
- `<boolean>`

```ts
import { LiquidContainerComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new LiquidContainerComponent({ version: componentVersion });

const canAddTo = component.canAddTo;
// `canAddTo` is `false`
```

---

### `canRemoveFrom`

Whether any content can be removed from the liquid container or not.

- Since: `v1`
- `<boolean>`

```ts
import { LiquidContainerComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new LiquidContainerComponent({ version: componentVersion });

const canRemoveFrom = component.canRemoveFrom;
// `canRemoveFrom` is `false`
```

---

### `contentLevel`

The amount of content stored inside the liquid container.

- Since: `v1`
- `<number>` Any integer greater than or equal to `0`.

```ts
import { LiquidContainerComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new LiquidContainerComponent({ version: componentVersion });

const contentLevel = component.contentLevel;
// `contentLevel` is `0`
```

---

### `hasContent`

Whether any content is stored in the liquid container or not.

- Since: `v1`
- `<boolean>`

```ts
import { LiquidContainerComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new LiquidContainerComponent({ version: componentVersion });

const hasContent = component.hasContent;
// `hasContent` is `false`
```

---

### `isCustom`

Whether the content stored in the liquid container is custom or a preset.

- Since: `v1`
- `<boolean>`

```ts
import { LiquidContainerComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new LiquidContainerComponent({ version: componentVersion });

const isCustom = component.isCustom;
// `isCustom` is `false`
```

---

### `presetHash`

The hash of the preset of the contents stored in the liquid container. Is `0` when no preset is used (uses `CustomData` instead).

- Since: `v1`
- [`<PresetHash | 0>`](../src/types/PresetHash.ts)

```ts
import { LiquidContainerComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new LiquidContainerComponent({ version: componentVersion });

const presetHash = component.presetHash;
// `presetHash` is `0`
```

---

### `customData`

The data to use as the customised contents of the liquid container.

- Since: `v1`
- `<CustomData | null>`

```ts
import { LiquidContainerComponent } from 'att-string-transcoder';

const componentVersion = 1;
const component = new LiquidContainerComponent({ version: componentVersion });

const customData = component.customData;
// `customData` is `null`
```

## Methods

### `toBinary(version?)`

See [`Component.toBinary(version?)`](./Component.md#tobinaryversion)

---

### `write(writer, version?)`

See [`Component.write(writer, version?)`](./Component.md#writewriter-version)
