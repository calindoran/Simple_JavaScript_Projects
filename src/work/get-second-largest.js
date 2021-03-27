/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getSecondLargest(nums) {
  // Complete the function
  let largest = 0;
  let secondLargest = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
      secondLargest = largest;
      largest = nums[i];
    }
    if (nums[i] > secondLargest && nums[i] < largest) {
      secondLargest = nums[i];
    }
  }

  return secondLargest;
}

getSecondLargest(nums);
//console.log(nums);
