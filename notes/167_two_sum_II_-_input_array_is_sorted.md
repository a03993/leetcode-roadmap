# 167 Two Sum II - Input Array Is Sorted

<span style="background-color: #6CC644; color: white; padding: 0.2em 0.6em; border-radius: 12px; font-size: 0.9em">Top Interview 150</span>

Given a **1-indexed** array of integers `numbers` that is already **_sorted in non-decreasing order_**, find two numbers such that they add up to a specific `target` number. Let these two numbers be `numbers[index₁]` and `numbers[index₂]` where `1 <= index₁ < index₂ <= numbers.length`.

Return _the indices of the two numbers, `index₁` and `index₂`, **added by one** as an integer array `[index₁, index₂]` of length 2_.

The tests are generated such that there is **exactly one solution**. You **may not** use the same element twice.

Your solution must use only constant extra space.

**Example:**

```
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
```

```
Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
```

```
Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
```

**Constraints:**

- `2 <= numbers.length <= 3 * 10⁴`
- `-1000 <= numbers[i] <= 1000`
- `numbers` is sorted in **non-decreasing order**.
- `-1000 <= target <= 1000`
- The tests are generated such that there is **exactly one solution**.

## Approach

| Topics                             | Category | Key Idea                    | Time Complexity | Space Complexity |
| ---------------------------------- | -------- | --------------------------- | --------------- | ---------------- |
| Array, Two Pointers, Binary Search |          | Two Pointers (Left & Right) | O(n)            | O(1)             |

- Pointers:
    - `left`: Starts at index 0, moves rightward to increase total sum.
    - `right`: Starts at `numbers.length - 1`, moves leftward to decrease total sum.

- Loop Condition: while `left < right` — _Search until the two pointers converge_.

- Steps:
    1. Calculate the current sum.
    2. If the sum equals target, return `[left + 1, right + 1]` (1-indexed requirement).
    3. If the sum is less than target, move `left` to increase the sum.
    4. If the sum is greater than target, move `right` to reduce the sum.

## Notes

- Array is already **sorted** → Two Pointers is the optimal pattern.
- Using a Map becomes unnecessary overhead.
- Problem requires using only **constant extra space**.
