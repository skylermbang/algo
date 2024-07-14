
// Example usage
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let k = 3;


function maxSumSubarray(arr, k) {

    let n = arr.length
    let windowSum=0
    let maxSum=0

    //first window 
    for(let i =0 ; i <k; i++){

        windowSum+= arr[i];
    }
    maxSum = Math.max(maxSum, windowSum);
    

    for (let j=k; j<n ; j++){
        //sliding window , you remove the thing you dont need and add in 
        //slide out and slinde in
        windowSum = windowSum - arr[j-k] + arr[j]
        maxSum = Math.max(windowSum,maxSum)
    }
    return maxSum
}

console.log(maxSumSubarray(arr, k)); // Output: 24 (subarray [7, 8, 9])


//using hash map + sliding window
/*Problem Statement
Given a string s and an integer k, find the length of the longest substring that contains at most k distinct characters.

Example
Input: s = "eceba", k = 2
*/
function lengthOfLongestSubstringKDistinct(s, k) {
    
    let left=0, right=0;
    let maxLength=0;
    let charMap=new Map() //initilziing hash map to sroe charcter count


    while( right < s.length){


        //currenct charcter in the map
        if(charMap.has(s[right])){
            charMap.set(s[right],charMap.get(s[right]+1))
        } else {
            charMap.set(s[right], 1);
        }

        while (charMap.size > k) {
            charMap.set(s[left], charMap.get(s[left]) - 1);
            if (charMap.get(s[left]) === 0) {
                charMap.delete(s[left]);
            }
            left++; // Shrink the window from the left
        }

        // Update the maximum length of the substring
        maxLength = Math.max(maxLength, right - left + 1);
        right++; // Expand the window to the right
    }
    return maxLength
    
}

console.log(lengthOfLongestSubstringKDistinct("eceba", 2)); // Output: 3
