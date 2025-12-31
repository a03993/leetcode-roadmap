# 55 Jump Game

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Medium](https://img.shields.io/badge/Medium-ffb800?style=flat-square)

You are given an integer array `nums`. You are initially positioned at the array's **first index**, and each element in the array represents your maximum jump length at that position.

Return `true` _if you can reach the last index, or `false` otherwise._

**Example:**

```java
Input: nums = [2,3,1,1,4]
Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
```

```java
Input: nums = [3,2,1,0,4]
Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
```

**Constraints:**

- `1 <= nums.length <= 10⁴`
- `0 <= nums[i] <= 10⁵`

**Note:**

| Topic  | Time Complexity | Space Complexity |
| ------ | --------------- | ---------------- |
| Greedy | O(n)            | O(1)             |

遍歷 `nums`，用 `reachMax` 記錄目前能跳到的最遠位置。每個位置如果超過這個最遠點，就代表無法到終點，直接回傳 `false`。遍歷完 `nums` 就代表可以跳到最後一格。

![Demo](https://img.shields.io/badge/Demo-nums_=_[2,_3,_1,_1,_4]-white?style=flat-square)

| i    | reachMax |
| ---- | -------- |
| init | 0        |
| 0    | 2        |
| 1    | 4        |
| 2    | 4        |
| 3    | 4        |
| 4    | 8        |

![Demo](https://img.shields.io/badge/Demo-nums_=_[3,_2,_1,_0,_4]-white?style=flat-square)

| i    | reachMax                    |
| ---- | --------------------------- |
| init | 0                           |
| 0    | 3                           |
| 1    | 3                           |
| 2    | 3                           |
| 3    | 3                           |
| 4    | `i > reachMax` return false |
