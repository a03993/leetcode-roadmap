# 219 Contains Duplicate II

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644)
![Easy](https://img.shields.io/badge/Easy-1cb8b8)

Given an integer array `nums` and an integer `k`, return `true` _if there are two **distinct indices** `i` and `j` in the array such that `nums[i] == nums[j]` and `abs(i - j) <= k`_.

**Example:**

```
Input: nums = [1,2,3,1], k = 3
Output: true
```

```
Input: nums = [1,0,1,1], k = 1
Output: true
```

```
Input: nums = [1,2,3,1,2,3], k = 2
Output: false
```

**Constraints:**

- `1 <= nums.length <= 10⁵`
- `-10⁹ <= nums[i] <= 10⁹`
- `0 <= k <= 10⁵`

## Approach

| Topics                            | Category    | Key Idea                        | Time Complexity | Space Complexity |
| --------------------------------- | ----------- | ------------------------------- | --------------- | ---------------- |
| Array, Hash Table, Sliding Window | Calculation | Track last index of each number | O(n)            | O(n)             |

![TODO](https://img.shields.io/badge/TODO-Sliding_Window_+_Set-orange)

- Initialize: create a new Map to store the last seen index of each number.

- Traverse the array once.

- Steps:
    1. Return `true` if `nums[i]` exists in the Map and distance <= `k`.
    2. Otherwise, update Map with current index.

## Notes

- Brute-force `O(n²)` → TLE for large arrays.
