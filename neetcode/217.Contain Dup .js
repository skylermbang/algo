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

        //
        
    }
}


/* Note 

Can add descriptiove comment
user early return 

this solution :complexity of O(n log n) due to the sorting operation



Better answer 
 time complexity of O(n) because it only iterates through the array once.

          const seen = {}; // Object to store seen elements
    for (const num of nums) {
        if (seen[num]) {
            return true;
        }
        seen[num] = true;
    }
    return false;

    }

*/