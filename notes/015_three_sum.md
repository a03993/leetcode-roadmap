# 15 3Sum

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Medium](https://img.shields.io/badge/Medium-ffb800?style=flat-square)

Given an integer array `nums`, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.

Notice that the solution set must not contain duplicate triplets.

**Example:**

```java
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
```

```java
Input: nums = [0,1,1]
Output: []
// Explanation: The only possible triplet does not sum up to 0.
```

```java
Input: nums = [0,0,0]
Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.
```

**Constraints:**

- `3 <= nums.length <= 3000`
- `-10⁵ <= nums[i] <= 10⁵`

**Note:**

| Topic               | Time Complexity | Space Complexity |
| ------------------- | --------------- | ---------------- |
| Sort + Two Pointers | O(n²)           | O(1)             |

先把 `nums` 排序，固定一個數，剩下兩個用 two pointers 從左右往中間遍歷。根據三數總和大小決定要移動左邊還是右邊，找到 0 就記錄結果。過程中跳過重複數字，避免產生重複解。
