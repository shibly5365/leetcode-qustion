/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    let obj = {};

    for (let value of nums) {
        if (obj[value]) {
            return value;
        }

        obj[value] = true;
    }

};