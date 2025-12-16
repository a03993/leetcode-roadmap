/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let i = 0;
    let j = height.length - 1;
    let maxArea = 0;

    while (i < j) {
        const area = (j - i) * Math.min(height[i], height[j]);
        maxArea = Math.max(maxArea, area);

        if (height[i] > height[j]) {
            j--;
        } else {
            i++;
        }
    }

    return maxArea;
};
