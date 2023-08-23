import type { BinaryWriter } from '../BinaryWriter.js';
import type { PrefabComponents } from '../types/PrefabComponents.js';

import { terminatorHash } from '../constants.js';

/**
 * Writes given components to the given `BinaryWriter`.
 *
 * @example
 * import { BinaryWriter, writeComponents } from 'att-string-transcoder';
 *
 * const writer = new BinaryWriter();
 *
 * const components = {
 *   NetworkRigidbody: new NetworkRigidbody({ version: 1 }),
 *   Unknown: []
 * };
 *
 * const versions = new Map<number, number>([
 *   [ComponentHash.NetworkRigidbody, 1],
 *   [ComponentHash.PhysicalMaterialPart, 1],
 *   [ComponentHash.Pickup, 2]
 *   // etc...
 * ]);
 *
 * writeComponents(writer, components, versions);
 */
export function writeComponents(
  writer: BinaryWriter,
  components: PrefabComponents,
  versions: Map<number, number>
): void {
  for (const component of Object.values(components)) {
    if (Array.isArray(component)) {
      for (const unknownComponent of component) {
        /**
         * @property {Component} unknownComponent
         */
        unknownComponent.write(writer, versions.get(unknownComponent.hash));
      }
    } else {
      /**
       * @property {Component} unknownComponent
       */
      component.write(writer, versions.get(component.hash));
    }
  }

  /**
   * @property {number} terminatorHash
   */
  writer.writeUnsignedInteger(terminatorHash);
}
