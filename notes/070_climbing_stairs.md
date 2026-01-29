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

用 `prevPrev` 代表前前一次的步數，初始設為階數為 1 的方法數；`prev` 代表前一次的步數，初始設為階數為 2 的方法數。從第 3 階 (`i = 3`) 開始遍歷到 `n`，每一次計算當前步數 `curr = prevPrev + prev`，然後平移 `prevPrev` 和 `prev`，將他們更新為下一輪的對應值。

因為這題是要找**總方法數**，因此用變數 (`prevPrev`, `prev`) 是較優解，如果用陣列會使空間複雜度變為 O(n)：

```js
var climbStairs = function (n) {
    let dp = [0, 1, 2];

    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
};
```
