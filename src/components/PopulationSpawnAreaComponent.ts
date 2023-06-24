import type { BinaryReader } from '../BinaryReader.js';
import type { BinaryString } from '../types/BinaryString.js';
import { BinaryWriter } from '../BinaryWriter.js';
import { Component, type ComponentProps } from './Component.js';
import { ComponentHash } from '../types/ComponentHash.js';
import { PopulationDefinitionHash } from '../types/PopulationDefinitionHash.js';

type PopulationSaveDataChild = null | {
  index: number;
  pointIndex: number;
};

type PopulationSpawnAreaComponentPropsV2 = {
  definition?: number;
  isPopulationStarted?: boolean;
  children?: PopulationSaveDataChild[];
  maxPopulation?: number;
  currentPopulation?: number;
  checkPopulationTime?: number;
  numberOfSpawnPoints?: number;
  startingPopulation?: number;
  isOneOff?: boolean;
};

export type PopulationSpawnAreaComponentProps = PopulationSpawnAreaComponentPropsV2;

export class PopulationSpawnAreaComponent extends Component {
  definition: number;
  isPopulationStarted: boolean;
  children: PopulationSaveDataChild[];
  maxPopulation: number;
  currentPopulation: number;
  checkPopulationTime: number;
  numberOfSpawnPoints: number;
  startingPopulation: number;
  isOneOff: boolean;

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
