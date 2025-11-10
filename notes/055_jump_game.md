# 55 Jump Game

<span style="background-color: #6CC644; color: white; padding: 0.2em 0.6em; border-radius: 12px; font-size: 0.9em">Top Interview 150</span>

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

| Topics                              | Category             | Key Idea             | Time Complexity | Space Complexity |
| ----------------------------------- | -------------------- | -------------------- | --------------- | ---------------- |
| Array, Dynamic Programming, Greedy | In-place Calculation | Accumulate Max Reach | O(n)            | O(1)             |

- Initialization `reach = 0` to track the farthest reachable index.

- Traverse the array once.

- Steps:
    1. **Stop iteration** and return `false` if `i > reach` (current index is unreachable).
    2. Update `reach` by `Math.max(reach, i + nums[i])`.
    3. Return `true` Loop completes (all indices are reachable).

#### 🚀 Demonstration: `nums = [2,3,1,1,4]` ✅ result: true (The loop completes)

| Index `i` | `nums[i]` | `reach` | Explanation           |
| --------- | --------- | ------- | --------------------- |
| 0         | 2         | 2       | `reach`=max(0, 0+2)=2 |
| 1         | 3         | 4       | `reach`=max(2, 1+3)=4 |
| 2         | 1         | 4       | `reach`=max(4, 2+1)=4 |
| 3         | 1         | 4       | `reach`=max(4, 3+1)=4 |
| 4         | 4         | 8       | `reach`=max(4, 4+4)=8 |

#### 🚀 Demonstration: `nums = [3,2,1,0,4]` ❌ result: false (Index `i` exceeds `reach`)

| Index `i` | `nums[i]` | `reach` | Explanation           |
| --------- | --------- | ------- | --------------------- |
| 0         | 3         | 3       | `reach`=max(0, 0+3)=3 |
| 1         | 2         | 3       | `reach`=max(3, 1+2)=3 |
| 2         | 1         | 3       | `reach`=max(3, 2+1)=3 |
| 3         | 0         | 3       | `reach`=max(3, 3+0)=3 |
| 4         | 4         | 3       | —                     |

## Notes

- **No need to simulate individual jumps**; simply check that `i <= reach` to determine if the current index is reachable.
- This approach is simulate to [122 Best Time to Buy and Sell Stock II](./122_best_time_to_buy_and_sell_stock_II.md), we accumulate the maximum reach greedily instead of simulating each jump.
