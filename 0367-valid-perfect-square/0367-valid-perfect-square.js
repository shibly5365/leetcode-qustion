/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
     if (num < 2) return true; // 1 is perfect square

    let left = 1, right = num;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let sq = mid * mid;

        if (sq === num) return true;
        if (sq < num) left = mid + 1;
        else right = mid - 1;
    }

    return false;
};