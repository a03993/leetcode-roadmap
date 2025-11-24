# 45 Jump Game II

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644)
![Medium](https://img.shields.io/badge/Medium-ffb800)

You are given a **0-indexed** array of integers `nums` of length `n`. You are initially positioned at index 0.

Each element `nums[i]` represents the maximum length of a forward jump from index `i`. In other words, if you are at index `i`, you can jump to any index `(i + j)` where:

- `0 <= j <= nums[i]` and
- `i + j < n`

Return _the minimum number of jumps to reach index `n - 1`_. The test cases are generated such that you can reach index `n - 1`.

**Example:**

```
Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
```

```
Input: nums = [2,3,0,1,4]
Output: 2
```

**Constraints:**

- `1 <= nums.length <= 10⁴`
- `0 <= nums[i] <= 1000`
- It's guaranteed that you can reach `nums[n - 1]`.

## Approach

| Topics                             | Category             | Key Idea                  | Time Complexity | Space Complexity |
| ---------------------------------- | -------------------- | ------------------------- | --------------- | ---------------- |
| Array, Dynamic Programming, Greedy | In-place Calculation | Track reach and nextReach | O(n)            | O(1)             |

- Initialization:
    - `jumps`: Counts the number of jumps made.
    - `currentReach`: The farthest index reachable **with the current jump**.
    - `farthest`: The farthest index reachable **within the current jump range**.

- Traverse the array once.

- Steps:
    1. Update `farthest` using `max(farthest, i + nums[i])` to track the farthest reachable index from the current range.
    2. When `i` reach `currentReach`:
        - Increment `jumps`
        - Update `currentReach` to `farthest`.

#### 🚀 Demonstration: `nums = [2,3,1,1,4]` ✅ result: 2

| Index `i` | `nums[i]` | farthest                | currentReach | jumps |
| --------- | --------- | ----------------------- | ------------ | ----- |
| 0         | 2         | 0 → 2 (`max(0, 0 + 2)`) | 0 → 2        | 0 → 1 |
| 1         | 3         | 2 → 4 (`max(2, 1 + 3)`) | 2            | 1     |
| 2         | 1         | 4 (`max(4, 2 + 1)`)     | 2 → 4        | 1 → 2 |
| 3         | 1         | 4 (`max(4, 3 + 1)`)     | 4            | 2     |

## Notes

- The test cases are guaranteed to be reachable.
- When the index reaches `currentReach`, it means the current jump's range is fully used, so a new jump is required, and `currentReach` must be updated to the farthest reachable index.
