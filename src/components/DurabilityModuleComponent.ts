import type { BinaryReader } from '../BinaryReader.js';
import type { BinaryString } from '../types/BinaryString.js';

import { BinaryWriter } from '../BinaryWriter.js';
import { ComponentHash } from '../types/ComponentHash.js';

import { Component, type ComponentProps } from './Component.js';

type DurabilityModuleComponentPropsV1 = {
  integrity?: number | undefined;
};

export type DurabilityModuleComponentProps = DurabilityModuleComponentPropsV1;

/**
 * @see [Class: `DurabilityModuleComponent`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/DurabilityModuleComponent.md)
 * @since v3.0.0
 * @version 1
 *
 * @example
 * import { DurabilityModuleComponent } from 'att-string-transcoder';
 *
 * const componentVersion = 1;
 * const component = new DurabilityModuleComponent({ version: componentVersion });
 */
export class DurabilityModuleComponent extends Component {
  /**
   * @since v1
   *
   * @example
   * import { DurabilityModuleComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new DurabilityModuleComponent({ version: componentVersion });
   *
   * const integrity = component.integrity;
   * // `integrity` is `1`
   */
  integrity: number;

  /**
   * @see [Class: `DurabilityModuleComponent`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/DurabilityModuleComponent.md)
   * @since v3.0.0
   * @version 1
   *
   * @example
   * import { DurabilityModuleComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new DurabilityModuleComponent({ version: componentVersion });
   */
  constructor({ version, integrity }: ComponentProps & DurabilityModuleComponentProps) {
    const hash = ComponentHash.DurabilityModule;
    const name = 'DurabilityModule';

    super({ hash, name, version });

    this.integrity = integrity ?? 1;
  }

  static override fromBinary(reader: BinaryReader, version: number): DurabilityModuleComponent {
    const props: ComponentProps & DurabilityModuleComponentProps = { version };

    /**
     * @property {float} integrity
     * @since v1
     */
    if (props.version >= 1) {
      props.integrity = reader.readFloat();
    }

    return new DurabilityModuleComponent(props);
  }

  override toBinary(version = this.version): BinaryString {
    const writer = new BinaryWriter();

    /**
     * @property {float} integrity
     * @since v1
     */
    if (version >= 1) {
      writer.writeFloat(this.integrity);
    }

    return writer.flush();
  }
}
