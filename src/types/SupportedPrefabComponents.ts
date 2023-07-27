import type { BasicDecayComponent } from '../components/BasicDecayComponent.js';
import type { DoorComponent } from '../components/DoorComponent.js';
import type { DurabilityModuleComponent } from '../components/DurabilityModuleComponent.js';
import type { FireComponent } from '../components/FireComponent.js';
import type { FuseComponent } from '../components/FuseComponent.js';
import type { HeatSourceBaseComponent } from '../components/HeatSourceBaseComponent.js';
import type { LiquidContainerComponent } from '../components/LiquidContainerComponent.js';
import type { LogicBoolReceiverComponent } from '../components/LogicBoolReceiverComponent.js';
import type { LogicBoolSenderComponent } from '../components/LogicBoolSenderComponent.js';
import type { LogicFloatReceiverComponent } from '../components/LogicFloatReceiverComponent.js';
import type { LogicFloatSenderComponent } from '../components/LogicFloatSenderComponent.js';
import type { LogicGateReceiverComponent } from '../components/LogicGateReceiverComponent.js';
import type { LogicIntReceiverComponent } from '../components/LogicIntReceiverComponent.js';
import type { LogicIntSenderComponent } from '../components/LogicIntSenderComponent.js';
import type { LogicVector3ReceiverComponent } from '../components/LogicVector3ReceiverComponent.js';
import type { NetworkRigidbodyComponent } from '../components/NetworkRigidbodyComponent.js';
import type { PhysicalMaterialPartComponent } from '../components/PhysicalMaterialPartComponent.js';
import type { PickupComponent } from '../components/PickupComponent.js';
import type { PickupDockComponent } from '../components/PickupDockComponent.js';
import type { PopulationSpawnAreaComponent } from '../components/PopulationSpawnAreaComponent.js';
import type { SentGiftComponent } from '../components/SentGiftComponent.js';
import type { SlidingDoorComponent } from '../components/SlidingDoorComponent.js';
import type { SpawnAreaComponent } from '../components/SpawnAreaComponent.js';
import type { StatManagerComponent } from '../components/StatManagerComponent.js';
import type { WoodcutTreeComponent } from '../components/WoodcutTreeComponent.js';

export type SupportedPrefabComponents = {
  BasicDecay?: BasicDecayComponent;
  Door?: DoorComponent;
  DurabilityModule?: DurabilityModuleComponent;
  Fire?: FireComponent;
  Fuse?: FuseComponent;
  HeatSourceBase?: HeatSourceBaseComponent;
  LiquidContainer?: LiquidContainerComponent;
  LogicBoolReceiver?: LogicBoolReceiverComponent;
  LogicBoolSender?: LogicBoolSenderComponent;
  LogicFloatReceiver?: LogicFloatReceiverComponent;
  LogicFloatSender?: LogicFloatSenderComponent;
  LogicGateReceiver?: LogicGateReceiverComponent;
  LogicIntReceiver?: LogicIntReceiverComponent;
  LogicIntSender?: LogicIntSenderComponent;
  LogicVector3Receiver?: LogicVector3ReceiverComponent;
  NetworkRigidbody?: NetworkRigidbodyComponent;
  PhysicalMaterialPart?: PhysicalMaterialPartComponent;
  Pickup?: PickupComponent;
  PickupDock?: PickupDockComponent;
  PopulationSpawnArea?: PopulationSpawnAreaComponent;
  SentGift?: SentGiftComponent;
  SlidingDoor?: SlidingDoorComponent;
  SpawnArea?: SpawnAreaComponent;
  StatManager?: StatManagerComponent;
  WoodcutTree?: WoodcutTreeComponent;
};
