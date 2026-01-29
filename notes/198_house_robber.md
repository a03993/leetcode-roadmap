# 198 House Robber

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Medium](https://img.shields.io/badge/Medium-ffb800?style=flat-square)

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and **it will automatically contact the police if two adjacent houses were broken into on the same night**.

Given an integer array `nums` representing the amount of money of each house, return _the maximum amount of money you can rob tonight **without alerting the police**_.

**Example:**

```java
Input: nums = [1,2,3,1]
Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.
```

```java
Input: nums = [2,7,9,3,1]
Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.
```

**Constraints:**

- `1 <= nums.length <= 100`
- `0 <= nums[i] <= 400`

**Note:**

| Algorithm                | Time Complexity | Space Complexity |
| ------------------------ | --------------- | ---------------- |
| Dynamic Programming (DP) | O(n)            | O(1)             |

不能偷相鄰的房子，對於每一間房子 `i` 判斷：

- 偷: 這間 + 上上間累積的最大值
- 不偷: 上一間累積的最大值

💡 也就是說，每次都要決定「偷」或「不偷」哪種划算，狀態轉移公式：

```js
dp[i] = max(dp[i − 1], dp[i − 2] + nums[i])
```

用 `prev` 代表 `dp[i-1]`，指偷到上一間為止的最大金額；`prevPrev` 代表 `dp[i-2]`，指到偷到上上間為止的最大金額。

遍歷 `nums`:

- 算出當前的最大值 `curr = Math.max(prev, prevPrev + num)`
- 原本的 `prev` (賞一間) 變成了下一輪的 `prevPrev` (上上一間)
- 剛算好的 `curr` (這間) 變成了下一輪的 `prev` (上一間)

![Demo](https://img.shields.io/badge/Demo-nums_=_[2,_7,_9,_3,_1]-white?style=flat-square)

| i    | `num` | `curr` | `prevPrev` | `prev`      |
| ---- | ----- | ------ | ---------- | ----------- |
| init | -     | -      | 0          | 0           |
| 0    | 2     | 2      | 0          | 2           |
| 1    | 7     | 7      | 2          | 7           |
| 2    | 9     | 11     | 7          | 11          |
| 3    | 3     | 11     | 11         | 11          |
| 4    | 1     | 12     | 11         | 12 → return |

```java
[2, 7, 9, 3, 1]
 ↑
rob
// step1:先偷第0間
```

```java
[2, 7, 9, 3, 1]
 ↑   ↖
pass rob
// step2:改偷第1間
```

```java
[2, 7, 9, 3, 1]
    ↑  ↑
 pass  rob
// step3:改偷第2間
```

```java
[2, 7, 9, 3, 1]
       ↑  ↑
     rob  pass
// step4:維持偷第2間
```

```java
[2, 7, 9, 3, 1]
       ↑     ↑
      pass  rob
// step5:改偷第4間
```

![Demo](https://img.shields.io/badge/Demo-nums_=_[2,_1,_1,_2]-white?style=flat-square)

| i    | `num` | `curr` | `prevPrev` | `prev`     |
| ---- | ----- | ------ | ---------- | ---------- |
| init | -     | -      | 0          | 0          |
| 0    | 2     | 2      | 0          | 2          |
| 1    | 1     | 2      | 2          | 2          |
| 2    | 1     | 3      | 2          | 3          |
| 3    | 2     | 4      | 3          | 4 → return |

```java
[2, 1, 1, 2]
 ↑
rob
// step1:先偷第0間
```

```java
[2, 1, 1, 2]
 ↑   ↖
rob pass
// step2:維持偷第1間
```

```java
[2, 1, 1, 2]
 ↑     ↑
pass  rob
// step3:改偷第2間
```

```java
[2, 1, 1, 2]
       ↑  ↑
     pass rob
// step4:改偷第3間
```

因為這題是要找**最大值**，因此用變數 (`prevPrev`, `prev`) 是較優解，如果用陣列會使空間複雜度變為 O(n)：

```js
var rob = function (nums) {
    if (nums.length === 1) {
        return nums[0];
    }

    let dp = new Array(nums.length);

    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }

    return dp[nums.length - 1];
};
```
