class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    

    isValid(s) {

        let arr =[];
        arr = [...s]
        let stack = []


        
        for(let i=0; i <arr.length ; i++){
            
            console.log(stack)
            // if (stack.length === 0){
            //     stack.push( arr[i])
            // }else{
                if(arr[i]===']'){
                    //console.log(stack[stack.length-1])
                    if (stack[stack.length-1] === '['){
                        stack.pop()
                        //console.log(stack)
                    }else {stack.push( arr[i])}
                    
                    
                }else if(arr[i]==='}'){
                    if (stack[stack.length-1] === '{'){
                        stack.pop()
                    }else {stack.push( arr[i])}
                   
                }
                else if(arr[i]===')'){
                    if (stack[stack.length-1] === '('){
                        stack.pop()
                    }else {stack.push( arr[i])}
                   
                //}
                }else{
                    stack.push( arr[i])
                }
            //}
            

            
            console.log(stack.length, stack)
                    }
        return stack.length === 0
    }
}

// using stacks.
