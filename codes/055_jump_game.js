/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let reachMax = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i > reachMax) {
            return false;
        }

        reachMax = Math.max(reachMax, nums[i] + i);
    }

    return true;
};
