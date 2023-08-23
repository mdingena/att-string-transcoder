import type { LogicIntSenderComponent } from '../components/LogicIntSenderComponent.js';

import { BasicDecayComponent } from '../components/BasicDecayComponent.js';
import { DoorComponent } from '../components/DoorComponent.js';
import { DurabilityModuleComponent } from '../components/DurabilityModuleComponent.js';
import { FireComponent } from '../components/FireComponent.js';
import { FuseComponent } from '../components/FuseComponent.js';
import { HeatSourceBaseComponent } from '../components/HeatSourceBaseComponent.js';
import { LiquidContainerComponent } from '../components/LiquidContainerComponent.js';
import { LogicBoolReceiverComponent } from '../components/LogicBoolReceiverComponent.js';
import { LogicBoolSenderComponent } from '../components/LogicBoolSenderComponent.js';
import { LogicFloatReceiverComponent } from '../components/LogicFloatReceiverComponent.js';
import { LogicFloatSenderComponent } from '../components/LogicFloatSenderComponent.js';
import { LogicGateReceiverComponent } from '../components/LogicGateReceiverComponent.js';
import { LogicIntReceiverComponent } from '../components/LogicIntReceiverComponent.js';
import { LogicVector3ReceiverComponent } from '../components/LogicVector3ReceiverComponent.js';
import { LogicVector3SenderComponent } from '../components/LogicVector3SenderComponent.js';
import { NetworkRigidbodyComponent } from '../components/NetworkRigidbodyComponent.js';
import { PhysicalMaterialPartComponent } from '../components/PhysicalMaterialPartComponent.js';
import { PickupComponent } from '../components/PickupComponent.js';
import { PickupDockComponent } from '../components/PickupDockComponent.js';
import { PopulationSpawnAreaComponent } from '../components/PopulationSpawnAreaComponent.js';
import { SentGiftComponent } from '../components/SentGiftComponent.js';
import { SlidingDoorComponent } from '../components/SlidingDoorComponent.js';
import { SpawnAreaComponent } from '../components/SpawnAreaComponent.js';
import { StatManagerComponent } from '../components/StatManagerComponent.js';
import { WoodcutTreeComponent } from '../components/WoodcutTreeComponent.js';

export type SupportedComponent =
  | typeof BasicDecayComponent
  | typeof DoorComponent
  | typeof DurabilityModuleComponent
  | typeof FireComponent
  | typeof FuseComponent
  | typeof HeatSourceBaseComponent
  | typeof LiquidContainerComponent
  | typeof LogicBoolReceiverComponent
  | typeof LogicBoolSenderComponent
  | typeof LogicFloatReceiverComponent
  | typeof LogicFloatSenderComponent
  | typeof LogicGateReceiverComponent
  | typeof LogicIntReceiverComponent
  | typeof LogicIntSenderComponent
  | typeof LogicVector3ReceiverComponent
  | typeof LogicVector3SenderComponent
  | typeof NetworkRigidbodyComponent
  | typeof PhysicalMaterialPartComponent
  | typeof PickupComponent
  | typeof PickupDockComponent
  | typeof PopulationSpawnAreaComponent
  | typeof SentGiftComponent
  | typeof SlidingDoorComponent
  | typeof SpawnAreaComponent
  | typeof StatManagerComponent
  | typeof WoodcutTreeComponent;
