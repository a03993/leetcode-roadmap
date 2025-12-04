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

## Approach

| Topics            | Category | Key Idea                                                                | Time Complexity | Space Complexity |
| ----------------- | -------- | ----------------------------------------------------------------------- | --------------- | ---------------- |
| Array, Hash Table | Hash Map | Use a map to find complement while iterating, return indices when found | O(n)            | O(n)             |

1. Create map to store the index of each number.
2. Loop through each number in the array.
3. For each number, calculate its complement with the target.
4. If the complement is exists in the map, return the indices of the complement and current number.
5. Otherwise, store the current number and its index in the map.

⭐ _It's important to use `Map.prototype.has()` for the check to correctly handle cases where a value's index might be `0`._

### Complexity

n = `nums.length`

1. **Time Complexity:** O(n)
    - Traverse array `nums`: O(n)
    - Map operations (`get`, `set`, `has`): O(1) each

2. **Space Complexity:** O(n)
    - Store indices from `nums` in a Map: O(n)

## Follow-up: Comparing O(n²) vs O(n) Approaches

| Approach    | Time Complexity | Space Complexity |
| ----------- | --------------- | ---------------- |
| Brute Force | O(n²)           | O(1) ✅          |
| Hash Map    | O(n) ✅         | O(n)             |

![Demo](https://img.shields.io/badge/Demo-nums_=_[2,_7,_11,_15],_target_=_9-white?style=flat-square)

1. **Brute Force:** Total of **6** comparisons (`n * (n - 1) / 2`)

    Solution:

    ```js
    var twoSum = function (nums, target) {
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] == target) {
                    return [i, j];
                }
            }
        }
    };
    ```

    Output:

    ```java
    Check pair: [2, 7]
    Check pair: [2, 11]
    Check pair: [2, 15]
    Check pair: [11, 7]
    Check pair: [11, 15]
    Check pair: [7, 15]
    Found: [2, 3]
    ```

2. **Hash Map:** Only **3** operations needed — _clearly faster than brute force!_

    Solution: 👉 [code](../codes/001_two_sum.js)

    Output:

    ```java
    Store in map: 2 → 0
    Store in map: 11 → 1
    Store in map: 7 → 2
    Found: [2, 3]
    ```

### Why Hash Map is the better approach?

The Hash Map approach reduces time complexity from `O(n²)` to `O(n)` by storing and looking up values efficiently. Brute force uses less space, but Hash Map trades a small amount of extra memory for a significant speedup, making it the preferred choice for larger inputs.
