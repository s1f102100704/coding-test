const twoSum = (nums: number[], target: number) => {
  const map = new Map<number, number>();
  let result: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) {
      result = [map.get(diff) ?? 0, i];
    } else {
      map.set(nums[i], i);
    }
  }
  return result;
};
console.log(twoSum([2, 7, 11, 15], 9)); // → [0, 1]  (2 + 7 = 9)
console.log(twoSum([3, 2, 4], 6));
