import { Components } from '../decoders';
import { transcoders, KnownComponent, UnknownComponent, ComponentName } from '../components';
import { createBinaryWriter } from '../utils/createBinaryWriter';

const terminator = '0'.repeat(32);

export const encodeComponents = (components: Components = {}): string => {
  const writer = createBinaryWriter();

  for (const [key, value] of Object.entries(components)) {
    const componentName = key as ComponentName | 'Unknown';

    if (componentName === 'Unknown') {
      const unknownComponents = value as UnknownComponent[];

      for (const { hash, data } of unknownComponents) {
        writer.uInt(hash);
        writer.uInt(data.length);
        writer.binary(data);
      }
    } else {
      try {
        const knownComponent = value as KnownComponent;
        const componentBits = transcoders[componentName].encode(knownComponent);
        writer.binary(componentBits);
      } catch (error) {
        throw Error(`Cannot encode unsupported component '${componentName}'`);
      }
    }
  }

  const binary = writer.flush();

  return `${binary}${terminator}`;
};
