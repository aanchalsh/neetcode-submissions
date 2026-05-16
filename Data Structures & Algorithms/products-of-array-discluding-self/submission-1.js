class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const output =  new Array(nums.length).fill(1);
        for (let i =1; i < nums.length; i++){
           output[i]=output[i-1]*nums[i-1];
        }
        let postfix = 1;
        for(let i = nums.length-1;i>=0;i--){
           output[i] *= postfix;
        postfix *= nums[i];
        }
        return output;
    }
}


// nums = [1,2,4,6]

// output 
// output[i] = 
// i = 0= [2*4*6] =48 exclude nums[i] , 1
// i = 1 = [1*4*6] = 24 exclude nums[i] , 2
// i = 2 = [1*2*6] = 12 exclude 4
// i =3 = [4*2*1] = 8 exclude 6