export type VersionMap = { [hash: number]: number };

export const parseVersionString = (versionString: string): VersionMap => {
  if (versionString.substr(-1) !== ',') {
    throw new Error('String contains invalid versioning. Check string format. Did you copy-paste the whole string?');
  }

  const versionArray = versionString.split(',').slice(0, -1);
  const expectedCount = Number(versionArray.shift());

  if (expectedCount !== versionArray.length / 2) {
    throw new Error(
      `String contains invalid versioning. Expected ${expectedCount} versions but parsed ${versionArray.length / 2}.`
    );
  }

  const versions: VersionMap = {};
  let lastKey = 0;

  versionArray.map(Number).forEach((element, index) => {
    const isHash = index % 2 === 0;
    const key = isHash ? element : lastKey;
    const value = isHash ? 0 : element;

    versions[key] = value;
    lastKey = key;
  });

  return versions;
};
