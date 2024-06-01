class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // sorting
        nums.sort((a, b) => a - b);
        // if found the duplicate return
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] === nums[i + 1]) {
                return true;
            }
        }
        return false;


    }
}
