# 55 Jump Game

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644)
![Medium](https://img.shields.io/badge/Medium-ffb800)

You are given an integer array `nums`. You are initially positioned at the array's **first index**, and each element in the array represents your maximum jump length at that position.

Return `true` _if you can reach the last index, or `false` otherwise._

**Example:**

```
Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
```

```
Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
```

**Constraints:**

- `1 <= nums.length <= 10⁴`
- `0 <= nums[i] <= 10⁵`

## Approach

| Topics                             | Category             | Key Idea             | Time Complexity | Space Complexity |
| ---------------------------------- | -------------------- | -------------------- | --------------- | ---------------- |
| Array, Dynamic Programming, Greedy | In-place Calculation | Accumulate Max Reach | O(n)            | O(1)             |

- Initialization:
    1. `farthest`: The farthest index that can be reached so far.

- Traverse the array once.

- Steps:
    1. If `i > farthest`, return `false` — **we cannot reach this position**.
    2. Update `farthest` by `Math.max(farthest, i + nums[i])`.

#### 🚀 Demonstration: `nums = [2,3,1,1,4]` ✅ result: true (The loop completes)

| Index `i` | `nums[i]` | `farthest`              |
| --------- | --------- | ----------------------- |
| 0         | 2         | 0 → 2 (`max(0, 0 + 2)`) |
| 1         | 3         | 2 → 4 (`max(2, 1 + 3)`) |
| 2         | 1         | 4 (`max(4, 2 + 1)`)     |
| 3         | 1         | 4 (`max(4, 3 + 1)`)     |
| 4         | 4         | 4 → 8 (`max(4, 4 + 4)`) |

#### 🚀 Demonstration: `nums = [3,2,1,0,4]` ❌ result: false (Index `i` exceeds `reach`)

| Index `i` | `nums[i]` | `farthest`                            |
| --------- | --------- | ------------------------------------- |
| 0         | 3         | 0 → 3 (`max(0, 0 + 3)`)               |
| 1         | 2         | 3 (`max(3, 1 + 2)`)                   |
| 2         | 1         | 3 (`max(3, 2 + 1)`)                   |
| 3         | 0         | 3 (`max(3, 3 + 0)`)                   |
| 4         | 4         | 3 (`i > farthest` return immediately) |

## Notes

- When the array length is 1, the last index is trivially reachable, regardless of the value (e.g., `[0]`).
- Some elements may be 0 (e.g., `nums = [0,2,3]` or `nums = [1,0,1,0]`), so we must check `i > farthest` and return `false` if true.
- Same logic as [122 Best Time to Buy and Sell Stock II](./122_best_time_to_buy_and_sell_stock_II.md), **greedily** accumulate the farthest reachable index instead of simulating each jump.
