# 300 Longest Increasing Subsequence

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Medium](https://img.shields.io/badge/Medium-ffb800?style=flat-square)

Given an integer array `nums`, return _the length of the longest **strictly increasing subsequence**_.

**Example:**

```java
Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
```

```java
Input: nums = [0,1,0,3,2,3]
Output: 4
```

```java
Input: nums = [7,7,7,7,7,7,7]
Output: 1
```

**Constraints:**

- `1 <= nums.length <= 2500`
- `-10⁴ <= nums[i] <= 10⁴`

**Note:**

| Algorithm                | Time Complexity | Space Complexity |
| ------------------------ | --------------- | ---------------- |
| Dynamic Programming (DP) |                 |                  |

建立一個長度為 `nums.length` 的 array `dp`，每個元素最起碼都能自成 1 個長度，都先填入 1。用 `dp[i]` 代表「以第 `i` 個元素為結尾」時，所能構成的最長遞增子序列長度。

用兩個迴圈：

- 外層迴圈遍歷 `nums` 所有元素
- 內層迴圈從 `j = 0` 遍歷小於 `i` 的範圍
    - 如果 `nums[i] > nums[j]`，代表 `nums[i]` 可以接在 `nums[j]` 後面形成更長的序列
    - 如果是，就更新 `dp[i] = Math.max(dp[i], dp[j] + 1)`

最後回傳 `dp` 中的最大值 `Math.max(...dp)`。

![Demo](https://img.shields.io/badge/Demo-nums_=_[0,_1,_0,_3,_2,_3]-white?style=flat-square)

| i    | j    | dp                     |
| ---- | ---- | ---------------------- |
| init | init | [1, 1, 1, 1, 1, 1]     |
| 1    | 0    | [1, **2**, 1, 1, 1, 1] |
| 3    | 0    | [1, 2, 1, **2**, 1, 1] |
| 3    | 1    | [1, 2, 1, **3**, 1, 1] |
| 3    | 2    | [1, 2, 1, 3, 1, 1]     |
| 4    | 0    | [1, 2, 1, 3, **2**, 1] |
| 4    | 1    | [1, 2, 1, 3, **3**, 1] |
| 5    | 0    | [1, 2, 1, 3, 3, **2**] |
| 5    | 1    | [1, 2, 1, 3, 3, **3**] |
| 5    | 2    | [1, 2, 1, 3, 3, 3]     |
| 5    | 3    | [1, 2, 1, 3, 3, 3]     |
| 5    | 4    | [1, 2, 1, 3, 3, **4**] |
