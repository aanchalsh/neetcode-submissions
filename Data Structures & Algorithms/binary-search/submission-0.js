class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        for( let i =0; i<nums.length; i++){
            let mid = Math.floor((right+left)/2);
            if(nums[mid]=== target){
                return mid;
            }
            if(nums[mid]<target){
                left ++ ;
            }
            else{
                right -- ;
            }
        }
        return -1;
    }
}
