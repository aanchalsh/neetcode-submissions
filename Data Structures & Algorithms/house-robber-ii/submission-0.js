class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 1) {
            return nums[0];
        }

        const robRange = (start, end) => {
            let prev = 0;
            let last = 0;

            for (let i = start; i <= end; i++) {
                let current = Math.max(prev, last + nums[i]);

                last = prev;
                prev = current;
            }

            return prev;
        };

        return Math.max(
            robRange(0, nums.length - 2),
            robRange(1, nums.length - 1)
        );
    }
}