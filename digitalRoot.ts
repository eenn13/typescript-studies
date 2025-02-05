export const digitalRoot = (n: number): number => {
  if (n < 10) {
    return n;
  }

  const sumWithInitial = n
    .toString()
    .split("")
    .reduce((accumulator, currentValue) => accumulator + +currentValue, 0);
    
  return digitalRoot(sumWithInitial);
};

console.log(digitalRoot(273));
