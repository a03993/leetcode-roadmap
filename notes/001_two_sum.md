# 1 Two Sum

Given an array of integers `nums` and an integer `target`, return _indices of the two numbers such that they add up to `target`_.

You may assume that each input would have **_exactly_ one solution**, and you may not use the _same_ element twice.

You can return the answer in any order.

**Example:**

```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

```
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

```
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

| Topics            | Category       | Key Idea                        | Time Complexity | Space Complexity |
| ----------------- | -------------- | ------------------------------- | --------------- | ---------------- |
| Array, Hash Table | Hash Map Check | Store previous numbers in a map | O(n)            | O(n)             |

- Traverse the array once.

- Steps:
    1. Check if `target - nums[i]` exists in the map,
        - If yes, return `[map.get(complement), i]`.
        - If not, store the current number **with its index** in the map: `map.set(nums[i], i)`.
    2. Repeat until a solution is found (guaranteed exactly one solution by problem constraints).

## Notes

- Use `map.has(key)` instead of `map.get(key)` in the if check **to correctly handle `0` indices**.
- Using a **Hash Map** reduces the time complexity from `O(n²)` to `O(n)` by **trading extra space for faster lookups**.

#### 🚀 Demonstration: `nums = [2, 11, 7, 15], target = 22`

1. **Brute Force (`O(n²)`):** Total of **6** comparisons (`n * (n - 1) / 2`)

    ```
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    ```

    Output:

    ```
    Check pair: [2, 7]
    Check pair: [2, 11]
    Check pair: [2, 15]
    Check pair: [11, 7]
    Check pair: [11, 15]
    Check pair: [7, 15]
    Found: [2, 3]
    ```

2. **Hash Map:** Only **3** operations needed to find the answer — _clearly faster than brute force_.

    Output:

    ```
    Store in map: 2 -> 0
    Store in map: 11 -> 1
    Store in map: 7 -> 2
    Found: [2, 3]
    ```

✅ Although the space complexity increases to `O(n)` because we store all numbers in the map, **the actual runtime is still much more efficient in practice**, especially for large arrays, because we **avoid** repeatedly checking every possible pair.
