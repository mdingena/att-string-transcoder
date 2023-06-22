import type { ATTEntityName } from '../types/ATTEntityName.js';
import { EntityHash } from '../types/EntityHash.js';

export function isATTEntityName(name: string | number | symbol): name is ATTEntityName {
  return name in EntityHash;
}
