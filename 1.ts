const sumArray = (x: number[]) => {
  let number = 0;
  for (let i = 0; i < x.length; i++) {
    number += x[i];
  }
  return number;
};
console.log(sumArray([1, 2, 3, 4]));
