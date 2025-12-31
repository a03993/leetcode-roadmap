# 169 Majority Element

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Easy](https://img.shields.io/badge/Easy-1cb8b8)

Given an array `nums` of size `n`, return _the majority element_.

The majority element is the element that appears more than `⌊n / 2⌋` times. You may assume that the majority element always exists in the array.

**Example:**

```java
Input: nums = [3,2,3]
Output: 3
```

```java
Input: nums = [2,2,1,1,1,2,2]
Output: 2
```

**Constraints:**

- `n == nums.length`
- `1 <= n <= 5 * 10⁴`
- `-10⁹ <= nums[i] <= 10⁹`
- The input is generated such that a majority element will exist in the array.

**Follow-up:** Could you solve the problem in linear time and in `O(1)` space?

**Note**

| Topic       | Time Complexity | Space Complexity |
| ----------- | --------------- | ---------------- |
| Sort        | O(log n)        | O(1)             |
| Boyer-Moore | O(n) ✅         | O(1)             |

1. Sort

佔多數的元素出現次數超過一半，中間位置的元素一定是多數元素，所以可以先將 `nums` 排序後，取中間項直接回傳即可。寫法簡單，但排序會花時間。

```js
var majorityElement = function (nums) {
    nums.sort();

    const i = Math.floor(nums.length / 2);

    return nums[i];
};
```

2. Boyer-Moore

用 `candidate` 當作當前的多數元素，`count` 計算其出現次數。若遇到相同就 +1，不同就 -1，`count` 變 0 時將 `candidate` 更換成當前項目。遍歷完 `nums`，最後的 `candidate` 就是多數元素。

Solution: 👉 [code](../codes/169_majority_element.js)
