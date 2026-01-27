# 45 Jump Game II

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Medium](https://img.shields.io/badge/Medium-ffb800?style=flat-square)

You are given a **0-indexed** array of integers `nums` of length `n`. You are initially positioned at index 0.

Each element `nums[i]` represents the maximum length of a forward jump from index `i`. In other words, if you are at index `i`, you can jump to any index `(i + j)` where:

- `0 <= j <= nums[i]` and
- `i + j < n`

Return _the minimum number of jumps to reach index `n - 1`_. The test cases are generated such that you can reach index `n - 1`.

**Example:**

```java
Input: nums = [2,3,1,1,4]
Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
```

```java
Input: nums = [2,3,0,1,4]
Output: 2
```

**Constraints:**

- `1 <= nums.length <= 10⁴`
- `0 <= nums[i] <= 1000`
- It's guaranteed that you can reach `nums[n - 1]`.

**Note:**

| Algorithm | Time Complexity | Space Complexity |
| --------- | --------------- | ---------------- |
| Greedy    | O(n)            | O(1)             |

用 `reach` 表示目前能到達的最遠位置，用 `nextReach` 暫存下一個可以到的最遠位置。

遍歷 `nums` (最後一個元素不需遍歷)，每一次都更新 `nextReach = max(nextReach, i + nums[i])`，這表示從目前位置能跳到的最遠距離，當 `i === reach`，表示當前已經走到目前能跳能到的最遠位置，必須增加一次跳躍，同時更新 `reach = nextReach`，準備下一輪跳躍。

題目說一定可以跳到 `nums[n - 1]`，因此最後回傳 `jumps` 即為最少跳躍次數。

![Demo](https://img.shields.io/badge/Demo-nums_=_[2,_3,_1,_1,_4]-white?style=flat-square)

| i          | nextReach | reach | jumps |
| ---------- | --------- | ----- | ----- |
| init       | 0         | 0     | 0     |
| 0          | 2         | 2     | 1     |
| 1          | 4         | 2     | 1     |
| 2          | 4         | 4     | 2     |
| 3          | 4         | 4     | 2     |
| 4 → return | 〃        | 〃    | 〃    |

```
i=0
 ↓
[2, 3, 1, 1, 1]
       ↑
     reach
   nextReach
```

```
   i=1
    ↓
[2, 3, 1, 1, 1]
       ↑     ↑
     reach nextReach
```

```
      i=2
       ↓
[2, 3, 1, 1, 1]
             ↑
           reach
         nextReach
```

```
         i=3
          ↓
[2, 3, 1, 1, 1]
             ↑
           reach
         nextReach
```
