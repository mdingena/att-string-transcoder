export const binaryToInt = (binary: string): number => {
  const isPositive = Boolean(Number(binary.slice(0, 1)));
  const integer = Number(`0b0${binary.slice(1)}`);

  return isPositive ? integer : integer - 2147483648;
};
