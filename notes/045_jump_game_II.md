# 45 Jump Game II

<span style="background-color: #6CC644; color: white; padding: 0.2em 0.6em; border-radius: 12px; font-size: 0.9em">Top Interview 150</span>

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

| Topics                              | Category             | Key Idea                  | Time Complexity | Space Complexity |
| ----------------------------------- | -------------------- | ------------------------- | --------------- | ---------------- |
| Array, Dynamic Programming, Greedy | In-place Calculation | Track reach and nextReach | O(n)            | O(1)             |

- Initialization:
    - `jumps = 0`: counts number of jumps.
    - `reach = 0`: the **rightmost index** current jump can reach.
    - `nextReach = 0`: the **farthest index** reachable within current jump range.

- Traverse the array once.

- Steps:
    1. Update `nextReach` by `max(nextReach, i + nums[i])` to track the farthest we can reach in this jump.
    2. If `i == reach`:
        - Increment `jumps`
        - Update `reach` by `nextReach`
    3. Return `jumps` after loop completes.

#### 🚀 Demonstration: `nums = [2,3,1,1,4]` ✅ result: 2

| Index `i` | `nums[i]` | nextReach | jumps | reach | Explanation                                               |
| --------- | --------- | --------- | ----- | ----- | --------------------------------------------------------- |
| 0         | 2         | 2         | 1     | 2     | `nextReach`=max(0, 0+2)=2, `jumps`++, `reach`=`nextReach` |
| 1         | 3         | 4         | 1     | 2     | `nextReach`=max(2, 1+3)=4                                 |
| 2         | 1         | 4         | 2     | 4     | `nextReach`=max(4, 2+1)=4, `jumps`++, `reach`=`nextReach` |
| 3         | 1         | 4         | 2     | 4     | `nextReach`=max(4, 3+1)=4                                 |

## Notes

- The test cases are guaranteed to be reachable.
- Increment jumps only when **you reach the current jump’s limit**, because that’s when a new jump is needed.
