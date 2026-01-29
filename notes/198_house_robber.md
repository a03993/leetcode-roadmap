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

- 偷: 這間加**前前間**房子的累計最大值
- 不偷: 前間房子的累計最大值

💡 也就是說，每次都需要判斷偷 or 不偷這間房子**有沒有更划算**，因此要比較 [前間] 和 [前前間+這間] 誰大:

```js
dp[i] = max(dp[i − 1], dp[i − 2] + nums[i])
```

用 `curr` 代表偷這間的累計最大值 (`dp[i]`)；`prevPrev` 是偷**前前間**的累計最大值 (`dp[i-2]`)，兩個都預設為 0，接著遍歷 `nums`:

- 把 `curr` 存到 `prev` 中 (暫存上一輪的 `curr`，幫助更新 `prevPrev`)
- 比較前間 `prev` 和這間 `num + prevPrev` 誰比較大，較大的直更新到 `curr`
- 將 `prevPrev` 更新為 `prev`

![Demo](https://img.shields.io/badge/Demo-nums_=_[1,_2,_3,_1]-white?style=flat-square)

- `nums[i]`: 這間房子的值
- `prev`: 上一間房子偷或不偷的最大值
- `nums[i] + prevPrev`: 偷這間房子的最大金額 (這間房子+前前間房子的累計最大金額)
- `curr`: 這間房子偷或不偷的累計最大金額

| i    | `nums[i]` | `prev` | `prevPrev + nums[i]` | `curr`     | 偷第i間房子 |
| ---- | --------- | ------ | -------------------- | ---------- | ----------- |
| init | -         | -      | 0                    | 0          | -           |
| 0    | 1         | 0      | 0+1=1                | 1          | 0           |
| 1    | 2         | 1      | 0+2=2                | 2          | 1           |
| 2    | 3         | 2      | 1+3=4                | 4          | 2           |
| 3    | 1         | 4      | 2+1=3                | 4 → return | 2           |

<div style="display:flex; gap:1rem; margin-top:1rem; margin-bottom:1rem">

<div>

```java
[1, 2, 3, 1]
 ↑
rob
// step1:先偷第0間
```

</div>

<div>

```java
[1, 2, 3, 1]
 ↑   ↖
pass rob
// step2:改偷第1間
```

</div>

<div>

```java
[1, 2, 3, 1]
    ↑  ↑
 pass  rob
// step3:改偷第2間
```

</div>

<div>

```java
[1, 2, 3, 1]
       ↑  ↑
     rob  pass
// step4:維持偷第2間
```

</div>

</div>

![Demo](https://img.shields.io/badge/Demo-nums_=_[2,_7,_9,_3,_1]-white?style=flat-square)

- `nums[i]`: 這間房子的值
- `prev`: 上一間房子偷或不偷的最大值
- `nums[i] + prevPrev`: 偷這間房子的最大金額 (這間房子+前前間房子的累計最大金額)
- `curr`: 這間房子偷或不偷的累計最大金額

| i    | `nums[i]` | `prev` | `nums[i] + prevPrev` | `curr`      | 偷第i間房子 |
| ---- | --------- | ------ | -------------------- | ----------- | ----------- |
| init | -         | -      | 0                    | 0           | -           |
| 0    | 2         | 0      | 0+2=2                | 2           | 0           |
| 1    | 7         | 2      | 0+7=7                | 7           | 1           |
| 2    | 9         | 7      | 2+9=11               | 11          | 2           |
| 3    | 3         | 11     | 7+3=10               | 11          | 2           |
| 4    | 1         | 11     | 11+1=12              | 12 → return | 4           |

<div style="display:flex; gap:1rem; margin-top:1rem">

<div>

```java
[2, 7, 9, 3, 1]
 ↑
rob
// step1:先偷第0間
```

</div>

<div>

```java
[2, 7, 9, 3, 1]
 ↑   ↖
pass rob
// step2:改偷第1間
```

</div>

<div>

```java
[2, 7, 9, 3, 1]
    ↑  ↑
 pass  rob
// step3:改偷第2間
```

</div>

<div>

```java
[2, 7, 9, 3, 1]
       ↑  ↑
     rob  pass
// step4:維持偷第2間
```

</div>

<div>

```java
[2, 7, 9, 3, 1]
       ↑     ↑
      pass  rob
// step5:改偷第4間
```

</div>

</div>
