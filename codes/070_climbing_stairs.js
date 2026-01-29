/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let prevPrev = 0;
    let prev = 1;

    for (let i = 0; i < n; i++) {
        let curr = prevPrev + prev;
        prevPrev = prev;
        prev = curr;
    }

    return prev;
};
