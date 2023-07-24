import type { BinaryReader } from '../BinaryReader.js';
import type { BinaryString } from '../types/BinaryString.js';

import { BinaryWriter } from '../BinaryWriter.js';
import { ComponentHash } from '../types/ComponentHash.js';

import { Component, type ComponentProps } from './Component.js';

type FireComponentPropsV1 = {
  fuelConsumptionProgress?: number | undefined;
};

export type FireComponentProps = FireComponentPropsV1;

/**
 * @see [Class: `FireComponent`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/FireComponent.md)
 * @since v3.0.0
 * @version 1
 *
 * @example
 * import { FireComponent } from 'att-string-transcoder';
 *
 * const componentVersion = 1;
 * const component = new FireComponent({ version: componentVersion });
 */
export class FireComponent extends Component {
  /**
   * The progress of the consumption of fuel attached to this component's prefab.
   *
   * @since v1
   *
   * @example
   * import { FireComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new FireComponent({ version: componentVersion });
   *
   * const fuelConsumptionProgress = component.fuelConsumptionProgress;
   * // `fuelConsumptionProgress` is `1`
   */
  fuelConsumptionProgress: number;

  /**
   * @see [Class: `FireComponent`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/FireComponent.md)
   * @since v3.0.0
   * @version 1
   *
   * @example
   * import { FireComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 1;
   * const component = new FireComponent({ version: componentVersion });
   */
  constructor({ version, fuelConsumptionProgress }: ComponentProps & FireComponentProps) {
    const hash = ComponentHash.Fire;
    const name = 'Fire';

    super({ hash, name, version });

    this.fuelConsumptionProgress = fuelConsumptionProgress ?? 1;
  }

  static override fromBinary(reader: BinaryReader, version: number): FireComponent {
    const props: ComponentProps & FireComponentProps = { version };

    /**
     * @property {float} fuelConsumptionProgress
     * @since v1
     */
    if (props.version >= 1) {
      props.fuelConsumptionProgress = reader.readFloat();
    }

    return new FireComponent(props);
  }

  override toBinary(version = this.version): BinaryString {
    const writer = new BinaryWriter();

    /**
     * @property {float} fuelConsumptionProgress
     * @since v1
     */
    if (version >= 1) {
      writer.writeFloat(this.fuelConsumptionProgress);
    }

    return writer.flush();
  }
}
