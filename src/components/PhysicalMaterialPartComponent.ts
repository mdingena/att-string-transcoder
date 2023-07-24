import type { BinaryReader } from '../BinaryReader.js';
import type { BinaryString } from '../types/BinaryString.js';

import { BinaryWriter } from '../BinaryWriter.js';
import { ComponentHash } from '../types/ComponentHash.js';
import { PhysicalMaterialPartHash } from '../types/PhysicalMaterialPartHash.js';

import { Component, type ComponentProps } from './Component.js';

type PhysicalMaterialPartComponentPropsV1 = {
  materialHash?: number | undefined;
};

export type PhysicalMaterialPartComponentProps = PhysicalMaterialPartComponentPropsV1;

/**
 * Controls physical appearance of the `Prefab` it is attached to.
 *
 * @see [Class: `PhysicalMaterialPartComponent`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/PhysicalMaterialPartComponent.md)
 * @since v3.0.0
 * @version 1
 *
 * @example
 * import { PhysicalMaterialPartComponent } from 'att-string-transcoder';
 *
 * const componentVersion = 1;
 * const component = new PhysicalMaterialPartComponent({ version: componentVersion });
 */
export class PhysicalMaterialPartComponent extends Component {
  /**
   * The hash of the physical material of the prefab this component is attached to.
   *
   * @since v1
   *
   * @example
   * import { PhysicalMaterialPartComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new PhysicalMaterialPartComponent({ version: componentVersion });
   *
   * const materialHash = component.materialHash;
   * // `materialHash` is `1`
   */
  materialHash: number;

  /**
   * @see [Class: `PhysicalMaterialPartComponent`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/PhysicalMaterialPartComponent.md)
   * @since v3.0.0
   * @version 1
   *
   * @example
   * import { PhysicalMaterialPartComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new PhysicalMaterialPartComponent({ version: componentVersion });
   */
  constructor({ version, materialHash }: ComponentProps & PhysicalMaterialPartComponentProps) {
    const hash = ComponentHash.PhysicalMaterialPart;
    const name = 'PhysicalMaterialPart';

    super({ hash, name, version });

    this.materialHash = materialHash ?? PhysicalMaterialPartHash.Iron;
  }

  static override fromBinary(reader: BinaryReader, version: number): PhysicalMaterialPartComponent {
    const props: ComponentProps & PhysicalMaterialPartComponentProps = { version };

    /**
     * @property {number} materialHash
     * @since v1
     */
    if (props.version >= 1) {
      props.materialHash = reader.readUnsignedInteger();
    }

    return new PhysicalMaterialPartComponent(props);
  }

  override toBinary(version = this.version): BinaryString {
    const writer = new BinaryWriter();

    /**
     * @property {number} materialHash
     * @since v1
     */
    if (version >= 1) {
      writer.writeUnsignedInteger(this.materialHash);
    }

    return writer.flush();
  }
}
