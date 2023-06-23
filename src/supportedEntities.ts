import type { SupportedEntity } from './types/SupportedEntity.js';
import { FireEntity } from './entities/FireEntity.js';

export const supportedEntities: Record<string, SupportedEntity> = {
  Fire: FireEntity
};
