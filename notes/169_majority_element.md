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

對陣列排序後，因為多數元素出現次數超過一半，所以中間位置的元素一定是多數元素，直接回傳即可。

```js
var majorityElement = function (nums) {
    nums.sort();

    const i = Math.floor(nums.length / 2);

    return nums[i];
};
```

2. Boyer-Moore

遍歷陣列，使用計數器抵消非候選元素，當計數為 0 時更新候選，最後留下的候選元素就是多數元素（出現次數超過一半）。

Solution: 👉 [code](../codes/169_majority_element.js)
