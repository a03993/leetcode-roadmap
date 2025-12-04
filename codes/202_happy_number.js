/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    const set = new Set();

    while (n != 1 && !set.has(n)) {
        set.add(n);
        let sum = 0;

        while (n > 0) {
            const digit = n % 10;

            sum += digit * digit;
            n = Math.floor(n / 10);
        }

        n = sum;
    }

    return n == 1;
};
