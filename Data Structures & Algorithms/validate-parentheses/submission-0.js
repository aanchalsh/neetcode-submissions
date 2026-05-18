class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        //defined the parenthesis
       const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };
        for( let char of s){

            if(char === '(' || char === '{' ||char === '['){
                stack.push(char)
            }
            else{
                    let top = stack.pop();
                    if(top != map[char]){
                        return false;
                    }
            }
        }
    return stack.length === 0;
    }
    
}

