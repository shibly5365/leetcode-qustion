/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
    let result = nums
        .map(String)
        .sort((a, b) => (b + a) - (a + b))
        .join("");

    return result[0] === "0" ? "0" : result;
};