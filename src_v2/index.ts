/**
 * PREFABS
 */
export { Prefab } from './Prefab';

/**
 * COMPONENTS
 */
export type {
  BasicDecay,
  DurabilityModule,
  HeatSourceBase,
  LiquidContainer,
  NetworkRigidbody,
  PhysicalMaterialPart,
  Pickup,
  PickupDock,
  PopulationSpawnArea,
  SpawnArea,
  StatManager,
  WoodcutTree
} from './components';

/**
 * EMBEDDED ENTITIES
 */
export * from './embeddedEntities';

/**
 * OBJECT SHAPES
 */
export type { DecodedString } from './decodeString';
export type {
  PrefabData,
  PrefabObject,
  Components,
  EmbeddedEntities,
  KnownEmbeddedEntity,
  UnknownEmbeddedEntity,
  ChildPrefab
} from './decoders';
export type { Component, KnownComponent, UnknownComponent } from './components';

/**
 * HASHES
 */
export { ComponentHash } from './ComponentHash';
export { EmbeddedEntityHash } from './EmbeddedEntityHash';
export { PhysicalMaterialPartHash } from './PhysicalMaterialPartHash';
export { PopulationDefinitionHash } from './PopulationDefinitionHash';
export { PresetHash } from './PresetHash';
export { SpeciesHash } from './SpeciesHash';

/**
 * UTILITIES
 */
export * from './utils';

/**
 * ATT STRING TRANSCODER
 */
export { createPrefab } from './createPrefab';
export { createString } from './createString';
export { decodeString } from './decodeString';
