# 70 Climbing Stairs

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Easy](https://img.shields.io/badge/Easy-1cb8b8?style=flat-square)

You are climbing a staircase. It takes `n` steps to reach the top.

Each time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?

**Example:**

```java
Input: n = 2
Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
```

```java
Input: n = 3
Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
```

**Constraints:**

- `1 <= n <= 45`

**Note:**

| Algorithm                | Time Complexity | Space Complexity |
| ------------------------ | --------------- | ---------------- |
| Dynamic Programming (DP) | O(n)            | O(1)             |

由於每一次的步數都是前一次的步數 + 前前一次的步數(如下)

| n   | step                                                               | total |
| --- | ------------------------------------------------------------------ | ----- |
| 1   | 1                                                                  | 1     |
| 2   | 1+1, 2                                                             | 2     |
| 3   | 1+1+1, 1+2, 2+1                                                    | 3     |
| 4   | 1+1+1+1, 1+1+2, 1+2+1, 2+1+1, 2+2                                  | 5     |
| 5   | 1+1+1+1+1, 1+1+1+2, 1+1+2+1, 1+2+1+1, 2+1+1+1, 1+2+2, 2+2+1, 2+1+2 | 8     |

用 `prevPrev` 儲存前前一次的步數，初始為 1 (n = 1)；`prev` 儲存前一次的步數，初始為 2 (n = 2)。從 3 開始遍歷 `n`，每一次計算當前步數 `curr = prev + prevPrev`，然後更新 `prevPrev = prev`、`prev = curr`。最後回傳 `prev`。
