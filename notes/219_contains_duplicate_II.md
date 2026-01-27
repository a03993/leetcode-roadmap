# 219 Contains Duplicate II

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Easy](https://img.shields.io/badge/Easy-1cb8b8?style=flat-square)

Given an integer array `nums` and an integer `k`, return `true` _if there are two **distinct indices** `i` and `j` in the array such that `nums[i] == nums[j]` and `abs(i - j) <= k`_.

**Example:**

```java
Input: nums = [1,2,3,1], k = 3
Output: true
```

```java
Input: nums = [1,0,1,1], k = 1
Output: true
```

```java
Input: nums = [1,2,3,1,2,3], k = 2
Output: false
```

**Constraints:**

- `1 <= nums.length <= 10⁵`
- `-10⁹ <= nums[i] <= 10⁹`
- `0 <= k <= 10⁵`

**Note:**

| Algorithm            | Time Complexity | Space Complexity |
| -------------------- | --------------- | ---------------- |
| Hash Map             | O(n)            | O(n)             |
| Sliding Window + Set | ...             | ...              |

建立一個 map，存每個數字最後一次出現的索引，遍歷陣列 `nums`，若當前數字已經存在於 map，並且當前索引與 map 中的索引差值 ≤ `k`，就直接回傳 true；否則更新 map 中該數字的索引為當前位置。遍歷完代表都沒有符合條件，則回傳 false。

<!-- TODO: Sliding Window + Set -->
