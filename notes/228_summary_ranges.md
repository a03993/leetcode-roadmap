# 228 Summary Ranges

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Easy](https://img.shields.io/badge/Easy-1cb8b8)

You are given a **sorted unique** integer array `nums`.

A **range** `[a,b]` is the set of all integers from `a` to `b` (inclusive).

Return _the **smallest sorted** list of ranges that **cover all the numbers in the array exactly**_. That is, each element of `nums` is covered by exactly one of the ranges, and there is no integer `x` such that `x` is in one of the ranges but not in `nums`.

Each range `[a,b]` in the list should be output as:

- `"a->b"` if `a != b`
- `"a"` if `a == b`

**Example:**

```java
Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
// Explanation: The ranges are:
// [0,2] --> "0->2"
// [4,5] --> "4->5"
// [7,7] --> "7"
```

```java
Input: nums = [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
// Explanation: The ranges are:
// [0,0] --> "0"
// [2,4] --> "2->4"
// [6,6] --> "6"
// [8,9] --> "8->9"
```

**Constraints:**

- `0 <= nums.length <= 20`
- `-2³¹ <= nums[i] <= 2³¹ - 1`
- All the values of `nums` are **unique**.
- `nums` is sorted in ascending order.

**Note:**

| Algorithm      | Time Complexity | Space Complexity |
| -------------- | --------------- | ---------------- |
| Two Pointers   | O(n)            | O(1)             |
| Linear Scan ⚠️ | O(n)            | O(1)             |

1. Two Pointers

    使用兩個指標，`left` 用來記錄每一段連續區間的起點，`i` 從左到右遍歷陣列 `nums`。

    當遇到下面其中一種情況時，代表一段連續區間結束：
    - `i + 1 === nums.length`: 已經超出陣列範圍，也就是說已經走到最後一個數字
    - `nums[i + 1] !== nums[i] + 1`: 代表下一個數字不連續

    此時就根據 `left` 和 `i` 的關係組合結果：
    - 若 `left === i`，表示這段只有一個數字，直接加入 `${nums[left]}`
    - 否則，表示是一段區間，加入 `${nums[left]}->${nums[i]}`

    接著將 `left` 更新為 `i + 1`，開始記錄下一段區間。遍歷完 `nums` 後 `res` 就是所有整理好的連續範圍。

    Solution: 👉 [code](../codes/228_summary_ranges.js)

2. Linear Scan

    從左到右線性遍歷陣列 `nums`，每次檢查 `nums[i]` 和` nums[i + 1]` 是否是連續整數。

    如果兩者差值不等於 1，代表目前這一段連續區間結束了：若 `start` 有值，表示正在記錄一個範圍，就組成 `start + nums[i]` push 到 `res`；若 `start` 為空，表示這一段只有單一數字，直接把 `nums[i]` push 到 `res`。

    如果差值等於 1，代表還在同一段連續區間中：且若 `start` 尚未設定，就把目前數字記成區間起點 `start = nums[i] + "->"`。

    遍歷完 `nums` 後 `res` 就是所有整理好的連續範圍。

    ```js
    var summaryRanges = function (nums) {
        const res = [];
        let start = "";

        for (let i = 0; i < nums.length; i++) {
            const diff = nums[i + 1] - nums[i];

            if (diff !== 1) {
                if (!start) {
                    res.push(`${nums[i]}`);
                } else {
                    res.push(start + `${nums[i]}`);
                    start = "";
                }
            } else {
                if (!start) {
                    start = `${nums[i]}->`;
                }
            }
        }

        return res;
    };
    ```

    ⚠️ 潛在的越界問題 (Edge Case)

    在 for 迴圈中，當迴圈執行到最後一個元素時，`nums[i + 1]` 會是 `undefined`。在 JavaScript 中計算 `undefined - number` 會得到 `NaN`，`NaN !== 1` 成立，所以程式碼最後會進入 `if (diff !== 1)` 並成功處理了最後一個 index，雖然在 JS 中能跑，但在其他嚴謹型別語言（如 Java 或 C++）這會導致程式崩潰。**明確處理邊界條件會是更好的編程習慣**。

    ⚠️ 字串拼接的語意

    使用 `start` 變數同時儲存「起始數字」與「箭頭符號」讓邏輯稍微變得複雜一點，因為需要不斷檢查 `!start`。
