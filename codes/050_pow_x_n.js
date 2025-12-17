/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    let num = n;

    if (num < 0) {
        x = 1 / x;
        num = -num;
    }

    let result = 1;

    while (num > 0) {
        if (num % 2 != 0) {
            result *= x;
        }

        x *= x;
        num = Math.floor(num / 2);
    }

    return result;
};
