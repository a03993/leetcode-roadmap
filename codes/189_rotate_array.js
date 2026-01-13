/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    k = k % nums.length;

    function reverse(arr, start, end) {
        while (end > start) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }

    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
};
