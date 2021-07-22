export const binaryToULong = (binary: string): number => Number(`0b${binary.slice(32)}${binary.slice(0, 32)}`);
