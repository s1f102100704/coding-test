const twoSum = (nums: number[], target: number) => {
  const map = new Map<number, number>();
  let result: number[] = [];
  for (const num of nums) {
    const diff = target - num;
    if (map.has(diff)) {
      result = [num, diff];
    } else {
      map.set(num, num);
    }
  }
  return result;
};
console.log(twoSum([2, 7, 11, 15], 9)); // → [0, 1]  (2 + 7 = 9)
console.log(twoSum([3, 2, 4], 6));
