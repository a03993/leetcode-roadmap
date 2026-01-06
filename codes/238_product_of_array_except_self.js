/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const arr = [];

    let leftProd = 1;

    for (let i = 0; i < nums.length; i++) {
        arr[i] = leftProd;
        leftProd *= nums[i];
    }

    let rightProd = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        arr[i] *= rightProd;
        rightProd *= nums[i];
    }

    return arr;
};
