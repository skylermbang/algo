/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    //base cases
    //in recursive function we always need it to stop it calling itself 
    if (nums.length <= 1) return nums;
    //divide 
    let middleIndex= Math.floor(nums.length/2);
    let left = nums.slice(0,middleIndex);
    let right = nums.slice(middleIndex);
    //conquere and merge 
    let leftArray = sortArray(left);
    let rightArray = sortArray(right);
    //merge
    //without this return the recursion chain not working
    return merge(leftArray, rightArray)
 };
 
 
 
 function merge(left,right){
         let finalArray=[]
         let i=0;
         let j=0;
     while(i<left.length && j<right.length){
         if(left[i]<right[j]){
             finalArray.push(left[i])
             i++
         }else{
             left[i]>right[j]
              finalArray.push(right[j])
             j++
         }
 }
     //adding left over *important
 return finalArray.concat(left.slice(i)).concat(right.slice(j));
 }
 

 //key point is the recursive function
 // always need return to make it back to recursive chain and 
 // base cases to stop the recursive 