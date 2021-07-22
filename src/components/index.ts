import * as transcoders from './transcoders';

export { ComponentVersion } from './ComponentVersion';

export type ComponentName = keyof typeof transcoders;

export type KnownComponent =
  | transcoders.BasicDecay.Component
  | transcoders.DurabilityModule.Component
  | transcoders.HeatSourceBase.Component
  | transcoders.LiquidContainer.Component
  | transcoders.NetworkRigidbody.Component
  | transcoders.PhysicalMaterialPart.Component
  | transcoders.Pickup.Component
  | transcoders.PickupDock.Component
  | transcoders.PopulationSpawnArea.Component
  | transcoders.SpawnArea.Component
  | transcoders.StatManager.Component
  | transcoders.WoodcutTree.Component;

export type UnknownComponent = { hash: number; data: string };

export type Component = KnownComponent | UnknownComponent[];

export { transcoders };
