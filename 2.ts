const mostFrequent = (x: number[]) => {
  const counts = new Map<number, number>();
  let max_count = 0;
  let result = x[0];

  for (const num of x) {
    const count = (counts.get(num) ?? 0) + 1;
    counts.set(num, count);

    if (max_count < count) {
      max_count = count;
      result = num;
    }
  }
  return result;
};
console.log(mostFrequent([1, 3, 1, 3, 2, 1]));
console.log(mostFrequent([4, 4, 2, 2]));
console.log(mostFrequent([4, 4, 2, 2, 5, 5, 5]));
