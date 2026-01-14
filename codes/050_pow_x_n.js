/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }

    let sum = 1;

    while (n > 0) {
        if (n % 2 !== 0) {
            sum *= x;
        }

        x *= x;
        n = Math.floor(n / 2);
    }

    return sum;
};
