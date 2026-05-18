class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        const n = nums.length; 
        let actualSum = 0;
        let sum = (n * (n+1))/2 ; //formula for sum all numbers [0,n]
        for(let num of nums){
             actualSum = actualSum + num; 
        }
        return sum - actualSum; 
    }
}

// 1, 2, 3 
// min  max

// total = 3 

// n 1 2 3
// i 0 1 2