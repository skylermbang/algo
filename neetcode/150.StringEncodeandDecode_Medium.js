class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        //adding items in array into single string
        let single=""
        for(let i=0; i< strs.length ; i++){
            single=single+strs[i]+"/"
        }
        return single
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        //decode the string back to array.
        let decode=[]
        decode=str.split("/")
        //for the extra empty item at the last 
        decode.pop()
        return decode
    }
}

//if you just using array.join()
//the empry array.join => result in  ['']
//more edgecases in the test.
//better with looping each array and add the item