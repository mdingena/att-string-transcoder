import type { BinaryWriter } from '../BinaryWriter.js';
import type { PrefabComponents } from '../types/PrefabComponents.js';
import { terminatorHash } from '../constants.js';

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
