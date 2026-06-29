/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {

    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            let prv_index = map.get(nums[i]);
            if (i - prv_index <= k) {
                return true;
            }
        }
        map.set(nums[i], i);
    }

    return false;
};