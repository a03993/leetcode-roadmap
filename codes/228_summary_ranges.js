/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    const res = [];
    let left = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i + 1 === nums.length || nums[i + 1] !== nums[i] + 1) {
            if (left === i) {
                res.push(`${nums[left]}`);
            } else {
                res.push(`${nums[left]}->${nums[i]}`);
            }

            left = i + 1;
        }
    }

    return res;
};
