import { transcoders, Component, ComponentName, UnknownComponent, ComponentVersion } from '../components';
import { ComponentHash } from '../ComponentHash';
import { BinaryReader, VersionMap } from '../utils';

export type Components = {
  [key in ComponentName | 'Unknown']?: Component;
};

export const decodeComponents = (reader: BinaryReader, versions: VersionMap): Components => {
  const components: Components = {
    Unknown: []
  };

  /* Continue looping until we find a zero hash. */
  while (true) {
    /* Get the component hash. */
    const hash = reader.uInt();

    /* Break if we reached the end of the components loop. */
    if (hash === 0) break;

    /* Get the component's data length. */
    const size = reader.uInt();

    /* Get the component's name. */
    const componentName = ComponentHash[hash] as ComponentName | undefined;

    /* Save the component's data. */
    if (componentName && transcoders[componentName]) {
      let version = versions[hash];

      if (!version) {
        if (ComponentVersion.has(hash)) {
          version = ComponentVersion.get(hash)!;
          console.warn(
            `String does not contain version info for the '${componentName}' component. Assuming latest supported version (v${version}).`
          );
        } else {
          throw new Error(`Cannot decode unsupported version of '${componentName}' component.`);
        }
      }

      components[componentName] = transcoders[componentName].decode(reader, version);
    } else {
      (components.Unknown as UnknownComponent[]).push({ hash, data: reader.binary(size) });
    }
  }

  return components;
};
