/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    // loop through original nums array
    for(let index = 0; index < nums.length; index++){
        // loop once more through the nums array, this time one index ahead.
       for(let index2 = index+1; index2 <nums.length; index2++) {
        // checking if two different indexes in the array added together, equal the target number.
        if (nums[index2] + nums[index] === target) {
            // if this is true, return the index of the two numbers that equal the total.
            return [index, index2]
        }
       }
    }
};