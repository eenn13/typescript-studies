export const digitalRoot = (n: number): number => {
  if (n < 10) {
    return n;
  }
  return n
    .toString()
    .split("")
    .map((v) => +v)
    .reduce((acc, curr) => acc + curr, 0);
};

console.log(digitalRoot(15));