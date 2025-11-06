/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
   let rev = 0;
    let sign = x < 0 ? -1 : 1;
    x = Math.abs(x);

    while (x > 0) {
        const digit = x % 10;
        x = Math.floor(x / 10);
        if (rev > Math.floor((2**31 - 1) / 10)) return 0;

        rev = rev * 10 + digit;
    }

    return rev * sign;
};