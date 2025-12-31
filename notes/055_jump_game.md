# 55 Jump Game

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Medium](https://img.shields.io/badge/Medium-ffb800?style=flat-square)

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

**Note:**

| Topic  | Time Complexity | Space Complexity |
| ------ | --------------- | ---------------- |
| Greedy | O(n)            | O(1)             |

遍歷陣列並維護可到達的最遠索引，若當前 index 超過最遠的 index 則表示無法到達，反之更新最遠的 index，完成遍歷即代表可到達終點。

![Demo](https://img.shields.io/badge/Demo-nums_=_[2,_3,_1,_1,_4]-white?style=flat-square)

| Index `i` | `nums[i]` | `farthest`              |
| --------- | --------- | ----------------------- |
| 0         | 2         | 0 → 2 (`max(0, 0 + 2)`) |
| 1         | 3         | 2 → 4 (`max(2, 1 + 3)`) |
| 2         | 1         | 4 (`max(4, 2 + 1)`)     |
| 3         | 1         | 4 (`max(4, 3 + 1)`)     |
| 4         | 4         | 4 → 8 (`max(4, 4 + 4)`) |

![Demo](https://img.shields.io/badge/Demo-nums_=_[3,_2,_1,_0,_4]-white?style=flat-square)

| Index `i` | `nums[i]` | `farthest`                            |
| --------- | --------- | ------------------------------------- |
| 0         | 3         | 0 → 3 (`max(0, 0 + 3)`)               |
| 1         | 2         | 3 (`max(3, 1 + 2)`)                   |
| 2         | 1         | 3 (`max(3, 2 + 1)`)                   |
| 3         | 0         | 3 (`max(3, 3 + 0)`)                   |
| 4         | 4         | 3 (`i > farthest` return immediately) |
