let s = "anagram"
let t = "nagaram"

let s2 = "ab"
let t2 = "b"

let s3 = "aacc"
let t3 = "ccac"


var isAnagram = function (s, t) {

    let sArray = Array.from(s).sort()
    let tArray = Array.from(t).sort()
    let result = true
    // console.log(sArray, tArray)


    //check the lengths of the two array 
    if (sArray.length !== tArray.length) {
        return result = false
    } else {
        for (let i = 0; i < sArray.length; i++) {

            let tTarget = tArray[i]
            let sTarget = sArray[i]

            if (!(sArray.includes(tTarget))) {
                return result = false
            }
            // if (tArray.includes(sTarget)) {
            //     result = true
            // } else {
            //     return result = false
            // }


            if (sTarget !== tTarget) {
                result = false
                return result
            }
        }
    }
    //check if there is new character 



    return result
};


console.log(isAnagram(s, t))
console.log(isAnagram(s2, t2))
console.log(isAnagram(s3, t3))