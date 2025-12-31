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

| Topic    | Time Complexity | Space Complexity |
| -------- | --------------- | ---------------- |
| Hash Map | O(n)            | O(n)             |

![TODO](https://img.shields.io/badge/TODO-Sliding_Window_+_Set-orange?style=flat-square)

用 hash table 記錄每個數字最近出現的位置，遇到相同數字且索引差 ≤ k 就回傳 true，否則遍歷完成回傳 false。
