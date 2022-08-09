// let nums = [3, 5, -4, 8, 11, 1, -1, 6]
// let target = 10

let nums =
    [3, 2, 3]
let target = 6
// def twoNumberSum(numbers, targetSum):

//     x = len(numbers)
//     # print(x)
//     # for let i = 0 , i < x , i ++ 

//     for i in range (0, x):
//         for ii in range (i+1, x):
//             sum = numbers[i] + numbers[ii]
//             if sum == targetSum:
//                 # print(numbers[i],numbers[ii])
//                 answer = [i,ii]
//                 return answer

// print(twoNumberSum(numbers, targetSum))


// find other way if there is way to solve without two looping
var twoSum = function (nums, target) {
    let result = []
    let answer
    for (let i = 0; i < nums.length; i++) {
        answer = target - nums[i]
        for (let j = i + 1; j < nums.length; j++) {

            if (nums[j] === answer) {
                result.push(i)
                result.push(j)
                break
            }

        }
        // // console.log(`  answer is ${answer},   nums[i] is ${nums[i]}`)
        // let chckcker = nums.includes(answer)


        // if (chckcker != -1 && nums.indexOf(answer) != i) {
        //     result.push(i)
        //     result.push(nums.indexOf(answer))
        //     break
        // }







        // if (nums.includes(answer)) {
        //     result.push(i)
        //     result.push(nums.indexOf(answer, i + 1))
        //     break
        // }

    }


    return result

};


console.log(twoSum(nums, target))