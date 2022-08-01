let nums = [1, 2, 3, 1]
let nums2 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
let nums3 = [1, 2, 3, 4]


// function solution(array){

//     let result = false
//     //console.log(array)

//     let sorted = array.sort()
//     //console.log(sorted)

//     for(let i =0; i < array.length ; i++){
//         for(let j= i+1; j< array.length ; j++){

//             if(array[i]=== array[j]){
//                 result = true
//             }

//         }
//     }

//     return result
// }

function containsDuplicate(array) {
    let checked = new Set(array)

    let result = false
    if (checked.size === array.length) {
        result = false
    } else {
        result = true
    }
    return result

}

console.log(containsDuplicate(nums))
console.log(containsDuplicate(nums2))
console.log(containsDuplicate(nums3))
