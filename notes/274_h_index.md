# 274 H-Index

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Medium](https://img.shields.io/badge/Medium-ffb800?style=flat-square)

Given an array of integers `citations` where `citations[i]` is the number of citations a researcher received for their `iᵗʰ` paper, return _the researcher's h-index_.

According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of `h` such that the given researcher has published at least `h` papers that have each been cited at least `h` times.

**Example:**

```java
Input: citations = [3,0,6,1,5]
Output: 3
// Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.
// Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.
```

```java
Input: citations = [1,3,1]
Output: 1
```

**Constraints:**

- `n == citations.length`
- `1 <= n <= 5000`
- `0 <= citations[i] <= 1000`

| Algorithm    | Time Complexity | Space Complexity |
| ------------ | --------------- | ---------------- |
| Brute Force  | O(n²)           | O(1)             |
| Sort         | O(n log n)      | O(1)             |
| Bucket Count | O(n) ✅         | O(n)             |

1. Brute Force

    外層迴圈從 `citations` 最後一項遍歷到第一項，內層回圈計算有多少篇論文的引用數 ≥ 當前的 index 值，若符合則 `count` 加 1。如果 `count` ≥ `citations` 的最後一項位置，代表找到了最大的值。

    ```js
    var hIndex = function (citations) {
        for (let i = citations.length; i >= 0; i--) {
            let count = 0;

            for (let c of citations) {
                if (c >= i) {
                    count++;
                }
            }

            if (count >= i) {
                return i;
            }
        }

        return 0;
    };
    ```

2. Sort

    先把 `citations` 從大到小排序，從 `citations` 最後一項遍歷到第一項，依序檢查第 `i` 篇論文的引用是否 ≥ `i + 1`。當發現引用數小於 `i + 1`，就代表最大的 H 就是 i。遍歷完 `citations` 都沒遇到，就返回論文總數。比暴力法直觀又高效。

    ```js
    var hIndex = function (citations) {
        citations.sort((a, b) => b - a);

        for (let i = 0; i < citations.length; i++) {
            if (citations[i] < i + 1) {
                return i;
            }
        }

        return citations.length;
    };
    ```

3. Bucket Count

    用一個長度為 `citations.length + 1` 的陣列當計數桶，把每篇論文的引用數歸到對應桶（大於 `n` 的就放到最後一格）。遍歷 `citations`，當累加數 ≥ 當前 index，就找到了最大的 H 值。完全不用排序，效率更高。

    Solution: 👉 [code](../codes/274_h_index.js)
