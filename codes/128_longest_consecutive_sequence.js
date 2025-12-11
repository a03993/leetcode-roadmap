/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length == 0) {
        return 0;
    }

    const set = new Set(nums);
    let maxLength = 0;

    for (let num of set) {
        if (!set.has(num - 1)) {
            let currNum = num;
            let currLength = 1;

            while (set.has(currNum + 1)) {
                currNum += 1;
                currLength += 1;
            }

            maxLength = Math.max(maxLength, currLength);
        }
    }

    return maxLength;
};
