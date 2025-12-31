# 1 Two Sum

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Easy](https://img.shields.io/badge/Easy-1cb8b8?style=flat-square)

Given an array of integers `nums` and an integer `target`, return _indices of the two numbers such that they add up to `target`_.

You may assume that each input would have **_exactly_ one solution**, and you may not use the _same_ element twice.

You can return the answer in any order.

**Example:**

```java
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

```java
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

```java
Input: nums = [3,3], target = 6
Output: [0,1]
```

**Constraints:**

- `2 <= nums.length <= 10⁴`
- `-10⁹ <= nums[i] <= 10⁹`
- `-10⁹ <= target <= 10⁹`
- **Only one valid answer exists.**

**Follow-up:** Can you come up with an algorithm that is less than `O(n²)` time complexity?

**Note:**

| Topic       | Time Complexity | Space Complexity |
| ----------- | --------------- | ---------------- |
| Brute Force | O(n²)           | O(1) ✅          |
| Hash Table  | O(n) ✅         | O(n)             |

兩者相比，Hash Table 用空間換時間，相較於 Brute Force 是最優解：

1.  Brute Force

    用雙迴圈遍歷 `nums` 所有 (`i`, `j`) 組合（且 `j > i` 避免重複），找到 `nums[i] + nums[j] === target` 就 return 這兩個元素的 index。

    ```js
    var twoSum = function (nums, target) {
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] === target) {
                    return [i, j];
                }
            }
        }
        // 題目通常保證一定有解；若沒保證，可回傳 [] 或 null
    };
    ```

2.  Hash Table

    遍歷 `nums` 並用 Map 記錄「看過的數值 → index」。對每個 `nums[i]` 計算補數 `complement = target - nums[i]`，如果補數已經在 Map 裡，代表之前出現過能配對的值，直接回傳 `[補數的 index, i]`。

    Solution: 👉 [code](../codes/001_two_sum.js)
