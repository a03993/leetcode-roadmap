/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let start = 0;
    let end = 0;

    let sum = 0;
    let minLen = Infinity;

    while (end < nums.length) {
        if (sum < target) {
            sum += nums[end];
            end++;
        }

        while (sum >= target) {
            minLen = Math.min(minLen, end - start);
            sum -= nums[start];
            start++;
        }
    }

    if (minLen === Infinity) {
        return 0;
    }

    return minLen;
};
