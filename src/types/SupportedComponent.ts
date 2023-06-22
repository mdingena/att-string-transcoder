import { BasicDecayComponent } from '../components/BasicDecayComponent.js';
import { DurabilityModuleComponent } from '../components/DurabilityModuleComponent.js';
import { FireComponent } from '../components/FireComponent.js';
import { FuseComponent } from '../components/FuseComponent.js';
import { HeatSourceBaseComponent } from '../components/HeatSourceBaseComponent.js';
import { LiquidContainerComponent } from '../components/LiquidContainerComponent.js';
import { NetworkRigidbodyComponent } from '../components/NetworkRigidbodyComponent.js';
import { PhysicalMaterialPartComponent } from '../components/PhysicalMaterialPartComponent.js';
import { PickupComponent } from '../components/PickupComponent.js';
import { PickupDockComponent } from '../components/PickupDockComponent.js';
import { PopulationSpawnAreaComponent } from '../components/PopulationSpawnAreaComponent.js';
import { SentGiftComponent } from '../components/SentGiftComponent.js';
import { SpawnAreaComponent } from '../components/SpawnAreaComponent.js';
import { StatManagerComponent } from '../components/StatManagerComponent.js';
import { WoodcutTreeComponent } from '../components/WoodcutTreeComponent.js';

export type SupportedComponent =
  | typeof BasicDecayComponent
  | typeof DurabilityModuleComponent
  | typeof FireComponent
  | typeof FuseComponent
  | typeof HeatSourceBaseComponent
  | typeof LiquidContainerComponent
  | typeof NetworkRigidbodyComponent
  | typeof PhysicalMaterialPartComponent
  | typeof PickupComponent
  | typeof PickupDockComponent
  | typeof PopulationSpawnAreaComponent
  | typeof SentGiftComponent
  | typeof SpawnAreaComponent
  | typeof StatManagerComponent
  | typeof WoodcutTreeComponent;
