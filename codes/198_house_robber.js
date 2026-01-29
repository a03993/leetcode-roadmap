/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let curr = 0;
    let prevPrev = 0;

    for (let num of nums) {
        let prev = curr;
        curr = Math.max(prev, num + prevPrev);
        prevPrev = prev;
    }

    return curr;
};
