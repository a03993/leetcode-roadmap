/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let jumps = 0;
    let reach = 0;
    let nextReach = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        nextReach = Math.max(nextReach, i + nums[i]);

        if (i == reach) {
            jumps++;
            reach = nextReach;
        }
    }

    return jumps;
};
