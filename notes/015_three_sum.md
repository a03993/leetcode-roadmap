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

| Algorithm           | Time Complexity | Space Complexity |
| ------------------- | --------------- | ---------------- |
| Sort + Two Pointers | O(n²)           | O(1)             |

先將陣列 `nums` 從小到大排序，用一個迴圈固定第一個數 `nums[i]`：

- 如果當前數與前一個相同，**跳過以避免重複**

- 用 two pointers `j`（左指標）和 `k`（右指標）掃描剩餘數字，計算三數總和 `sum = nums[i] + nums[j] + nums[k]`
    - 若 `sum === 0`，代表找到一組，將其 push 到 `res` 陣列中，並移動雙指標，**同時跳過重複數字**
    - 若 `sum < 0`，左指標右移 `j++`，增加總和
    - 若 `sum > 0`，右指標左移 `k--`，減小總和

重複上述過程直到遍歷完陣列，回傳 `res`
