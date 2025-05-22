const twoSum = (nums: number[], target: number) => {
  let result: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        result = [nums[i], nums[j]];
      }
    }
  }
  return result;
};
console.log(twoSum([2, 7, 11, 15], 9)); // → [0, 1]  (2 + 7 = 9)
console.log(twoSum([3, 2, 4], 6));
