import type { BinaryReader } from '../BinaryReader.js';
import type { BinaryString } from '../types/BinaryString.js';
import type { PresetHash } from '../types/PresetHash.js';

import { BinaryWriter } from '../BinaryWriter.js';
import { ComponentHash } from '../types/ComponentHash.js';
import { SpeciesHash } from '../types/SpeciesHash.js';

import { Component, type ComponentProps } from './Component.js';

type WoodcutTreeComponentPropsV3 = {
  presetHash?: 0 | PresetHash | undefined;
  speciesHash?: SpeciesHash | undefined;
};

export type WoodcutTreeComponentProps = WoodcutTreeComponentPropsV3;

/**
 * @see [Class: `WoodcutTreeComponent`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/WoodcutTreeComponent.md)
 * @since v3.0.0
 * @version 3
 *
 * @example
 * import { WoodcutTreeComponent } from 'att-string-transcoder';
 *
 * const componentVersion = 3;
 * const component = new WoodcutTreeComponent({ version: componentVersion });
 */
export class WoodcutTreeComponent extends Component {
  /**
   * @since v3
   *
   * @example
   * import { WoodcutTreeComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 3;
   * const component = new WoodcutTreeComponent({ version: componentVersion });
   *
   * const presetHash = component.presetHash;
   * // `presetHash` is `0`
   */
  presetHash: 0 | PresetHash;

  /**
   * The hash of the species of the tree prefab this component is attached to.
   *
   * @since v3
   *
   * @example
   * import { WoodcutTreeComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 3;
   * const component = new WoodcutTreeComponent({ version: componentVersion });
   *
   * const speciesHash = component.speciesHash;
   * // `speciesHash` is `11232`
   */
  speciesHash: SpeciesHash;

  /**
   * @see [Class: `WoodcutTreeComponent`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/WoodcutTreeComponent.md)
   * @since v3.0.0
   * @version 3
   *
   * @example
   * import { WoodcutTreeComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 3;
   * const component = new WoodcutTreeComponent({ version: componentVersion });
   */
  constructor({ version, presetHash, speciesHash }: ComponentProps & WoodcutTreeComponentProps) {
    const hash = ComponentHash.WoodcutTree;
    const name = 'WoodcutTree';

    super({ hash, name, version });

    this.presetHash = presetHash ?? 0;
    this.speciesHash = speciesHash ?? SpeciesHash.Oak;
  }

  static override fromBinary(reader: BinaryReader, version: number): WoodcutTreeComponent {
    const props: ComponentProps & WoodcutTreeComponentProps = { version };

    /**
     * @property {number} presetHash
     * @since v3
     */
    if (props.version >= 3) {
      props.presetHash = reader.readUnsignedInteger();
    }

    /**
     * @property {number} speciesHash
     * @since v3
     */
    if (props.version >= 3) {
      props.speciesHash = reader.readUnsignedInteger();
    }

    return new WoodcutTreeComponent(props);
  }

  override toBinary(version = this.version): BinaryString {
    const writer = new BinaryWriter();

    /**
     * @property {number} presetHash
     * @since v3
     */

    /**
     * @property {number} presetHash
     * @since v3
     */
    if (version >= 3) {
      writer.writeUnsignedInteger(this.presetHash);
    }

    /**
     * @property {number} speciesHash
     * @since v3
     */
    if (version >= 3) {
      writer.writeUnsignedInteger(this.speciesHash);
    }

    return writer.flush();
  }
}
