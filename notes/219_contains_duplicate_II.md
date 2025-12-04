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

## Approach

| Topics                            | Category    | Key Idea                                                                           | Time Complexity | Space Complexity |
| --------------------------------- | ----------- | ---------------------------------------------------------------------------------- | --------------- | ---------------- |
| Array, Hash Table, Sliding Window | Calculation | Track last seen index of each number to detect nearby duplicates within k distance | O(n)            | O(n)             |

![TODO](https://img.shields.io/badge/TODO-Sliding_Window_+_Set-orange?style=flat-square)

1. Create a map to store the latest index of each number.
2. Loop through each number in the array:
    - If the number exists in the map and the difference between current index and stored index ≤ k, return true.
    - Otherwise, update the map with the current index for this number.
3. After the loop, return false — _no nearby duplicates found_.

### Complexity

n = `nums.length`

1. **Time Complexity:** O(n)
    - Traverse array `nums`: O(n)
    - Map operations (`get`, `set`, `has`): O(1) each

2. **Space Complexity:** O(n)
    - Store the last index of each number in a Map
