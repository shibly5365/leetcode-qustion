/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const sign = x < 0 ? -1 : 1;
    const str = Math.abs(x).toString();
    const ans = str.split('').reverse().join('');
    const num = sign * parseInt(ans);

    if (num < -(2 ** 31) || num > (2 ** 31 - 1)) {
        return 0;
    }

    return num;
};