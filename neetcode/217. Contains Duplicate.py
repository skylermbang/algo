from collections import Counter
class Solution(object):
    def containsDuplicate(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        checker = True
        counts = Counter(nums)
        result = counts == len(nums)
        
        for x in counts.values(): 
            if x > 1:
                return True``
        return False

        # for i in range(length - 1):
        #     if i == length:
        #         if nums[i] == nums[-1]:
        #             chekcer = False
        #             return checker
        #     else:
        #         if nums[i]==nums[i+1]:
        #                 chekcer = False
        #                 return checker

        # There should be way to loop and check each elements
        # counts function in python will give you key : value    
        # if  [1 1 2 2 2 ] =>  [1:2 , 2:3]
        #  counts.keys : 1 ,2    counts.values: 2,3 
            
        
        