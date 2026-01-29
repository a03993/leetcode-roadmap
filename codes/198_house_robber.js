/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let prevPrev = 0; // 上上間房子的累積最大值
    let prev = 0; // 上一間房子的累積最大值

    for (let num of nums) {
        const curr = Math.max(prev, prevPrev + num);

        prevPrev = prev;
        prev = curr;
    }

    return prev;
};
