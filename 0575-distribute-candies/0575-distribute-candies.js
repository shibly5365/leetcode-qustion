/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    const uniqe = new Set()
    for(let candy of candyType){
        uniqe.add(candy)
    }
    return Math.min(uniqe.size,candyType.length/2)
};