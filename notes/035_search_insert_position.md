# 35 Search Insert Position

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Easy](https://img.shields.io/badge/Easy-1cb8b8)

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with `O(log n)` runtime complexity.

**Example:**

```java
Input: nums = [1,3,5,6], target = 5
Output: 2
```

```java
Input: nums = [1,3,5,6], target = 2
Output: 1
```

```java
Input: nums = [1,3,5,6], target = 7
Output: 4
```

**Constraints:**

- `1 <= nums.length <= 10⁴`
- `-10⁴ <= nums[i] <= 10⁴`
- `nums` contains **distinct** values sorted in **ascending** order.
- `-10⁴ <= target <= 10⁴`

**Note:**

| Algorithm     | Time Complexity | Space Complexity |
| ------------- | --------------- | ---------------- |
| Linear Search | O(n)            | O(1)             |
| Binary Search | O(log n) ✅     | O(1)             |

1. Linear Search

    用線性搜尋法從頭開始遍歷陣列 `nums`，若是當前項目等於或是大於 `target` 就 return 當前的 index，若編歷完陣列仍沒找到，則回傳 `nums.length`

    ```js
    var searchInsert = function (nums, target) {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] >= target) {
                return i;
            }
        }

        return nums.length;
    };
    ```

2. Binary Search

    用二分搜尋法設置 Two Pointers `left` 和 `right` 定義搜尋範圍，每次用 `left` 和 `right` 取中間位置 `mid`，比較 `nums[mid]` 和 `target`，如果相等就回傳 `mid`；如果小於 `target`，就把 `left` 移到 `mid + 1`；如果大於 `target`，就把 `right` 移到 `mid - 1`。最後沒找到就回傳 `left`。

    Solution: 👉 [code](../codes/035_search_insert_position.js)
