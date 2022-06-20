nums = [2,2,1]
function xor(nums) {
  return nums.reduce((result, current) => result ^ current);
}
console.log(xor(nums));
