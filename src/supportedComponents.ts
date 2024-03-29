import type { SupportedComponent } from './types/SupportedComponent.js';

import { BasicDecayComponent } from './components/BasicDecayComponent.js';
import { DoorComponent } from './components/DoorComponent.js';
import { DurabilityModuleComponent } from './components/DurabilityModuleComponent.js';
import { FireComponent } from './components/FireComponent.js';
import { FuseComponent } from './components/FuseComponent.js';
import { HeatSourceBaseComponent } from './components/HeatSourceBaseComponent.js';
import { LiquidContainerComponent } from './components/LiquidContainerComponent.js';
import { LogicBoolReceiverComponent } from './components/LogicBoolReceiverComponent.js';
import { LogicBoolSenderComponent } from './components/LogicBoolSenderComponent.js';
import { LogicFloatReceiverComponent } from './components/LogicFloatReceiverComponent.js';
import { LogicFloatSenderComponent } from './components/LogicFloatSenderComponent.js';
import { LogicGateReceiverComponent } from './components/LogicGateReceiverComponent.js';
import { LogicIntReceiverComponent } from './components/LogicIntReceiverComponent.js';
import { LogicIntSenderComponent } from './components/LogicIntSenderComponent.js';
import { LogicVector3ReceiverComponent } from './components/LogicVector3ReceiverComponent.js';
import { LogicVector3SenderComponent } from './components/LogicVector3SenderComponent.js';
import { NetworkRigidbodyComponent } from './components/NetworkRigidbodyComponent.js';
import { PhysicalMaterialPartComponent } from './components/PhysicalMaterialPartComponent.js';
import { PickupComponent } from './components/PickupComponent.js';
import { PickupDockComponent } from './components/PickupDockComponent.js';
import { PopulationSpawnAreaComponent } from './components/PopulationSpawnAreaComponent.js';
import { SentGiftComponent } from './components/SentGiftComponent.js';
import { SlidingDoorComponent } from './components/SlidingDoorComponent.js';
import { SpawnAreaComponent } from './components/SpawnAreaComponent.js';
import { StatManagerComponent } from './components/StatManagerComponent.js';
import { WoodcutTreeComponent } from './components/WoodcutTreeComponent.js';

export const supportedComponents: Record<string, SupportedComponent> = {
  BasicDecay: BasicDecayComponent,
  Door: DoorComponent,
  DurabilityModule: DurabilityModuleComponent,
  Fire: FireComponent,
  Fuse: FuseComponent,
  HeatSourceBase: HeatSourceBaseComponent,
  LiquidContainer: LiquidContainerComponent,
  LogicBoolReceiver: LogicBoolReceiverComponent,
  LogicBoolSender: LogicBoolSenderComponent,
  LogicFloatReceiver: LogicFloatReceiverComponent,
  LogicFloatSender: LogicFloatSenderComponent,
  LogicGateReceiver: LogicGateReceiverComponent,
  LogicIntReceiver: LogicIntReceiverComponent,
  LogicIntSender: LogicIntSenderComponent,
  LogicVector3Receiver: LogicVector3ReceiverComponent,
  LogicVector3Sender: LogicVector3SenderComponent,
  NetworkRigidbody: NetworkRigidbodyComponent,
  PhysicalMaterialPart: PhysicalMaterialPartComponent,
  Pickup: PickupComponent,
  PickupDock: PickupDockComponent,
  PopulationSpawnArea: PopulationSpawnAreaComponent,
  SentGift: SentGiftComponent,
  SlidingDoor: SlidingDoorComponent,
  SpawnArea: SpawnAreaComponent,
  StatManager: StatManagerComponent,
  WoodcutTree: WoodcutTreeComponent
};
