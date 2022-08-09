let strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
let strs2 = []
let strs3 = ["a"]


// 같은 조건인것을 찾아서 모아놓고싶을때는 obj로쓰라고


var groupAnagrams = function (strs) {


    // let answer = []
    // let arrayFrom = []


    // if (strs.length === 0) {
    //     answer.push([" "])
    // } else if (strs.length === 1 && strs[0].length === 1) {
    //     answer.push(strs[0])
    // } else {

    //     // // check if they have the same length 
    //     // for (let i = 0; i < strs.lengths - 1; i++) {
    //     // }
    //     // check if they have same alphabet
    //     strs.forEach(element => {
    //         let firstArray = Array.from(element).sort()
    //         arrayFrom.push(firstArray)
    //     });


    //     let indexs = []
    //     let element = []

    //     // console.log(arrayFrom, " checking line 31")
    //     // console.log(arrayFrom.length)

    //     for (let i = 0; i < arrayFrom.length; i++) {

    //         let fromIndex = arrayFrom.indexOf(arrayFrom[i]); // == 0
    //         console.log(fromIndex)

    //         while (fromIndex != -1) {
    //             element.push(fromIndex)
    //             fromIndex = arrayFrom.indexOf(arrayFrom[i], fromIndex + 1);
    //             element.push(fromIndex)
    //             indexs.push(element)

    //         }


    //     }
    //     console.log(indexs)
    let obj = {}
    let answer = []
    for (let i = 0; i < strs.length; i++) {

        // console.log(Array.from(strs[i]).sort())
        let sortedString = Array.from(strs[i]).sort()


        // key로도 찾아지나?
        if (sortedString in obj) {
            obj[sortedString].push(strs[i])
        } else {
            obj[sortedString] = [strs[i]]
        }

    }

    for (const [key, value] of Object.entries(obj)) { answer.push(value); }
    return answer
};





console.log(groupAnagrams(strs))
// console.log(groupAnagrams(strs2))
// console.log(groupAnagrams(strs3))