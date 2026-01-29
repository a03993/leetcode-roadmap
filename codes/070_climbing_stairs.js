/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n <= 2) {
        return n;
    }

    let prevPrev = 1;
    let prev = 2;

    for (let i = 3; i <= n; i++) {
        const curr = prevPrev + prev;

        prevPrev = prev;
        prev = curr;
    }

    return prev;
};
