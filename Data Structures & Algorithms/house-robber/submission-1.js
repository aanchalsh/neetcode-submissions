//Array , DP Pattern
class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let prev = 0;
        let last = 0;
        for(let num of nums){
            let current = Math.max(prev , last+num);
            last = prev;
            prev = current; 
        }
       return prev;
    }
    
}

0 