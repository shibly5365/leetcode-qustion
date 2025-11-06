/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let add = 2, result = 3
    if(n<=3){
        return n
    }else{
        for(let i=3; i<n; i++){
            result +=add
            add = result - add
            

        }
    }

    return result

};