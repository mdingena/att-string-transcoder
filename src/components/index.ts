import * as transcoders from './transcoders';

export type ComponentName = keyof typeof transcoders;

export type BasicDecay = transcoders.BasicDecay.BasicDecay;
export type DurabilityModule = transcoders.DurabilityModule.DurabilityModule;
export type Fire = transcoders.Fire.Fire;
export type Fuse = transcoders.Fuse.Fuse;
export type HeatSourceBase = transcoders.HeatSourceBase.HeatSourceBase;
export type LiquidContainer = transcoders.LiquidContainer.LiquidContainer;
export type NetworkRigidbody = transcoders.NetworkRigidbody.NetworkRigidbody;
export type PhysicalMaterialPart = transcoders.PhysicalMaterialPart.PhysicalMaterialPart;
export type Pickup = transcoders.Pickup.Pickup;
export type PickupDock = transcoders.PickupDock.PickupDock;
export type PopulationSpawnArea = transcoders.PopulationSpawnArea.PopulationSpawnArea;
export type SentGift = transcoders.SentGift.SentGift;
export type SpawnArea = transcoders.SpawnArea.SpawnArea;
export type StatManager = transcoders.StatManager.StatManager;
export type WoodcutTree = transcoders.WoodcutTree.WoodcutTree;

export type KnownComponent =
  | BasicDecay
  | DurabilityModule
  | Fire
  | Fuse
  | HeatSourceBase
  | LiquidContainer
  | NetworkRigidbody
  | PhysicalMaterialPart
  | Pickup
  | PickupDock
  | PopulationSpawnArea
  | SentGift
  | SpawnArea
  | StatManager
  | WoodcutTree;

export type UnknownComponent = { hash: number; data: string };

export type Component = KnownComponent | UnknownComponent[];

export { ComponentVersion } from './ComponentVersion';

export { transcoders };
