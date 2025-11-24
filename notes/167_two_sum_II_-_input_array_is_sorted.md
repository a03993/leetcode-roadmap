# 167 Two Sum II - Input Array Is Sorted

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644)
![Medium](https://img.shields.io/badge/Medium-ffb800)

Given a **1-indexed** array of integers `numbers` that is already **_sorted in non-decreasing order_**, find two numbers such that they add up to a specific `target` number. Let these two numbers be `numbers[index₁]` and `numbers[index₂]` where `1 <= index₁ < index₂ <= numbers.length`.

Return _the indices of the two numbers, `index₁` and `index₂`, **added by one** as an integer array `[index₁, index₂]` of length 2_.

The tests are generated such that there is **exactly one solution**. You **may not** use the same element twice.

Your solution must use only constant extra space.

**Example:**

```
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The `sum` of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
```

```
Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The `sum` of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
```

```
Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The `sum` of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
```

**Constraints:**

- `2 <= numbers.length <= 3 * 10⁴`
- `-1000 <= numbers[i] <= 1000`
- `numbers` is sorted in **non-decreasing order**.
- `-1000 <= target <= 1000`
- The tests are generated such that there is **exactly one solution**.

## Approach

| Topics                             | Category | Key Idea                                                                       | Time Complexity | Space Complexity |
| ---------------------------------- | -------- | ------------------------------------------------------------------------------ | --------------- | ---------------- |
| Array, Two Pointers, Binary Search | In-place | Use left/right pointers to find a pair that sums to `target` in a sorted array | O(n)            | O(1)             |

- Pointers:
    - `i` (left pointer): Starts at index 0, moves rightward to increase total `sum`.
    - `j` (right pointer): Starts at `numbers.length - 1`, moves leftward to decrease total `sum`.

- Loop Condition: while `i < j` — _Search until the two pointers converge_.

- Steps:
    1. Calculate the current `sum`.
    2. If the `sum` equals `target`, return `[i + 1, j + 1]` (1-indexed requirement).
    3. If the `sum` is less than `target`, move `i` to increase the `sum`.
    4. If the `sum` is greater than `target`, move `j` to reduce the `sum`.

## Notes

- Array is **sorted**, using Two Pointers is the optimal approach.
- Only **constant extra space** is allowed, so Map is **unnecessary**.
