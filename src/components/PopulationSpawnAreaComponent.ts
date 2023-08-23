import type { BinaryReader } from '../BinaryReader.js';
import type { BinaryString } from '../types/BinaryString.js';

import { BinaryWriter } from '../BinaryWriter.js';
import { ComponentHash } from '../types/ComponentHash.js';
import { PopulationDefinitionHash } from '../types/PopulationDefinitionHash.js';

import { Component, type ComponentProps } from './Component.js';

type PopulationSaveDataChild = null | {
  index: number;
  pointIndex: number;
};

type PopulationSpawnAreaComponentPropsV2 = {
  definition?: number | undefined;
  isPopulationStarted?: boolean | undefined;
  children?: PopulationSaveDataChild[] | undefined;
  maxPopulation?: number | undefined;
  currentPopulation?: number | undefined;
  checkPopulationTime?: number | undefined;
  numberOfSpawnPoints?: number | undefined;
  startingPopulation?: number | undefined;
  isOneOff?: boolean | undefined;
};

export type PopulationSpawnAreaComponentProps = PopulationSpawnAreaComponentPropsV2;

/**
 * @see [Class: `PopulationSpawnAreaComponent`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/PopulationSpawnAreaComponent.md)
 * @since v3.0.0
 * @version 2
 *
 * @example
 * import { PopulationSpawnAreaComponent } from 'att-string-transcoder';
 *
 * const componentVersion = 2;
 * const component = new PopulationSpawnAreaComponent({ version: componentVersion });
 */
export class PopulationSpawnAreaComponent extends Component {
  /**
   * The hash of the population to spawn in the `SpawnArea` component that is attached to the same prefab this component is attached to.
   *
   * @since v2
   *
   * @example
   * import { PopulationSpawnAreaComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 2;
   * const component = new PopulationSpawnAreaComponent({ version: componentVersion });
   *
   * const definition = component.definition;
   * // `definition` is `30040`
   */
  definition: number;

  /**
   * @since v2
   *
   * @example
   * import { PopulationSpawnAreaComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 2;
   * const component = new PopulationSpawnAreaComponent({ version: componentVersion });
   *
   * const isPopulationStarted = component.isPopulationStarted;
   * // `isPopulationStarted` is `true`
   */
  isPopulationStarted: boolean;

  /**
   * @since v2
   *
   * @example
   * import { PopulationSpawnAreaComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 2;
   * const component = new PopulationSpawnAreaComponent({ version: componentVersion });
   *
   * const children = component.children;
   * // `children` is `[]`
   */
  children: PopulationSaveDataChild[];

  /**
   * The maximum amount of spawned prefabs in this population.
   *
   * @since v2
   *
   * @example
   * import { PopulationSpawnAreaComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 2;
   * const component = new PopulationSpawnAreaComponent({ version: componentVersion });
   *
   * const maxPopulation = component.maxPopulation;
   * // `maxPopulation` is `20`
   */
  maxPopulation: number;

  /**
   * The current amount of spawned prefabs in this population.
   *
   * @since v2
   *
   * @example
   * import { PopulationSpawnAreaComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 2;
   * const component = new PopulationSpawnAreaComponent({ version: componentVersion });
   *
   * const currentPopulation = component.currentPopulation;
   * // `currentPopulation` is `5`
   */
  currentPopulation: number;

  /**
   * @since v2
   *
   * @example
   * import { PopulationSpawnAreaComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 2;
   * const component = new PopulationSpawnAreaComponent({ version: componentVersion });
   *
   * const checkPopulationTime = component.checkPopulationTime;
   * // `checkPopulationTime` is `852974979330`
   */
  checkPopulationTime: number;

  /**
   * The amount of spawn locations inside the `SpawnArea` component that is attached to the same prefab this component is attached to.
   *
   * @since v2
   *
   * @example
   * import { PopulationSpawnAreaComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 2;
   * const component = new PopulationSpawnAreaComponent({ version: componentVersion });
   *
   * const numberOfSpawnPoints = component.numberOfSpawnPoints;
   * // `numberOfSpawnPoints` is `40`
   */
  numberOfSpawnPoints: number;

  /**
   * The amount of spawned prefabs that this population begins with.
   *
   * @since v2
   *
   * @example
   * import { PopulationSpawnAreaComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 2;
   * const component = new PopulationSpawnAreaComponent({ version: componentVersion });
   *
   * const startingPopulation = component.startingPopulation;
   * // `startingPopulation` is `5`
   */
  startingPopulation: number;

  /**
   * Whether any removed prefabs from this population shouldn't be replaced after the server's respawn timer has elapsed.
   *
   * @since v2
   *
   * @example
   * import { PopulationSpawnAreaComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 2;
   * const component = new PopulationSpawnAreaComponent({ version: componentVersion });
   *
   * const isOneOff = component.isOneOff;
   * // `isOneOff` is `false`
   */
  isOneOff: boolean;

  /**
   * @see [Class: `PopulationSpawnAreaComponent`](https://github.com/mdingena/att-string-transcoder/tree/main/docs/PopulationSpawnAreaComponent.md)
   * @since v3.0.0
   * @version 2
   *
   * @example
   * import { PopulationSpawnAreaComponent } from 'att-string-transcoder';
   *
   * const componentVersion = 2;
   * const component = new PopulationSpawnAreaComponent({ version: componentVersion });
   */
  constructor({
    version,
    definition,
    isPopulationStarted,
    children,
    maxPopulation,
    currentPopulation,
    checkPopulationTime,
    numberOfSpawnPoints,
    startingPopulation,
    isOneOff
  }: ComponentProps & PopulationSpawnAreaComponentProps) {
    const hash = ComponentHash.PopulationSpawnArea;
    const name = 'PopulationSpawnArea';

    super({ hash, name, version });

    this.definition = definition ?? PopulationDefinitionHash.StickPopulation;
    this.isPopulationStarted = isPopulationStarted ?? true;
    this.children = children ?? [];
    this.maxPopulation = maxPopulation ?? 20;
    this.currentPopulation = currentPopulation ?? 5;
    this.checkPopulationTime = checkPopulationTime ?? 852974979330;
    this.numberOfSpawnPoints = numberOfSpawnPoints ?? 40;
    this.startingPopulation = startingPopulation ?? 5;
    this.isOneOff = isOneOff ?? false;
  }

  static override fromBinary(reader: BinaryReader, version: number): PopulationSpawnAreaComponent {
    const props: ComponentProps & PopulationSpawnAreaComponentProps = { version };

    /**
     * @property {number} definition
     * @since v2
     */
    if (props.version >= 2) {
      props.definition = reader.readUnsignedInteger();
    }

    /**
     * @property {boolean} isPopulationStarted
     * @since v2
     */
    if (props.version >= 2) {
      props.isPopulationStarted = reader.readBoolean();
    }

    /**
     * @property {PopulationSaveDataChild[]} children
     * @since v2
     */
    if (props.version >= 2) {
      const childrenLength = reader.readUnsignedInteger();
      props.children = [];

      for (let index = 0; index < childrenLength; ++index) {
        /**
         * @property {boolean} isNull
         * @since v2
         */
        const isNull = reader.readBoolean();

        if (isNull) {
          props.children.push(null);
          continue;
        }

        props.children.push({
          /**
           * @property {number} index
           * @since v2
           */
          index: reader.readSignedInteger(),

          /**
           * @property {number} pointIndex
           * @since v2
           */
          pointIndex: reader.readSignedInteger()
        });
      }
    }

    /**
     * @property {number} maxPopulation
     * @since v2
     */
    if (props.version >= 2) {
      props.maxPopulation = reader.readSignedInteger();
    }

    /**
     * @property {number} currentPopulation
     * @since v2
     */
    if (props.version >= 2) {
      props.currentPopulation = reader.readSignedInteger();
    }

    /**
     * @property {number} checkPopulationTime
     * @since v2
     */
    if (props.version >= 2) {
      props.checkPopulationTime = reader.readUnsignedLong();
    }

    /**
     * @property {number} numberOfSpawnPoints
     * @since v2
     */
    if (props.version >= 2) {
      props.numberOfSpawnPoints = reader.readSignedInteger();
    }

    /**
     * @property {number} startingPopulation
     * @since v2
     */
    if (props.version >= 2) {
      props.startingPopulation = reader.readSignedInteger();
    }

    /**
     * @property {boolean} isOneOff
     * @since v2
     */
    if (props.version >= 2) {
      props.isOneOff = reader.readBoolean();
    }

    return new PopulationSpawnAreaComponent(props);
  }

  override toBinary(version = this.version): BinaryString {
    const writer = new BinaryWriter();

    /**
     * @property {number} definition
     * @since v2
     */
    if (version >= 2) {
      writer.writeUnsignedInteger(this.definition);
    }

    /**
     * @property {boolean} isPopulationStarted
     * @since v2
     */
    if (version >= 2) {
      writer.writeBoolean(this.isPopulationStarted);
    }

    /**
     * @property {PopulationSaveDataChild[]} children
     * @since v2
     */
    if (version >= 2) {
      writer.writeUnsignedInteger(this.children.length);

      for (const populationSaveDataChild of this.children) {
        const isNull = populationSaveDataChild === null;

        /**
         * @property {boolean} isNull
         * @since v2
         */
        writer.writeBoolean(isNull);

        if (!isNull) {
          /**
           * @property {number} index
           * @since v2
           */
          writer.writeSignedInteger(populationSaveDataChild.index);

          /**
           * @property {number} pointIndex
           * @since v2
           */
          writer.writeSignedInteger(populationSaveDataChild.pointIndex);
        }
      }
    }

    /**
     * @property {number} maxPopulation
     * @since v2
     */
    if (version >= 2) {
      writer.writeSignedInteger(this.maxPopulation);
    }

    /**
     * @property {number} currentPopulation
     * @since v2
     */
    if (version >= 2) {
      writer.writeSignedInteger(this.currentPopulation);
    }

    /**
     * @property {number} checkPopulationTime
     * @since v2
     */
    if (version >= 2) {
      writer.writeUnsignedLong(this.checkPopulationTime);
    }

    /**
     * @property {number} numberOfSpawnPoints
     * @since v2
     */
    if (version >= 2) {
      writer.writeSignedInteger(this.numberOfSpawnPoints);
    }

    /**
     * @property {number} startingPopulation
     * @since v2
     */
    if (version >= 2) {
      writer.writeSignedInteger(this.startingPopulation);
    }

    /**
     * @property {boolean} isOneOff
     * @since v2
     */
    if (version >= 2) {
      writer.writeBoolean(this.isOneOff);
    }

    return writer.flush();
  }
}
