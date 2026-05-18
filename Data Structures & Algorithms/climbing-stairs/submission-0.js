class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let first = 1;
        let second = 2; 
        if(n <= 2){
            return n;
        }
        for(let i =3 ; i<=n; i++){
            let current = first + second;
            first = second;
            second = current; 
        }     
    return second; 
    }
}
