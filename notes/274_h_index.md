# 274 H-Index

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Medium](https://img.shields.io/badge/Medium-ffb800?style=flat-square)

Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return the researcher's h-index.

According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of h such that the given researcher has published at least h papers that have each been cited at least h times.

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

| Topic           | Key Idea                                                 | Time Complexity | Space Complexity |
| --------------- | -------------------------------------------------------- | --------------- | ---------------- |
| Brute Force     | Count how many papers have ≥ h for each h                | O(n²)           | O(1)             |
| Sort + One Pass | Sort papers high → low, check where citations < position | O(n log n)      | O(1)             |
| Bucket Count    | (loading...)                                             | O(n) ✅         | O(n)             |

1. Brute Force

外層迴圈從可能的最大 i 值（陣列長度）開始往下檢查，每次用內層迴圈統計陣列中 ≥ 當前 i 值的論文數量，若滿足條件就回傳這個 i。

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

2. Sort + One Pass

對 citations 陣列降冪排序後，從第 0 項開始遍歷，每次檢查當前引用數是否小於 i + 1。若小於，回傳 i 作為 H-Index；若掃描完整個陣列仍符合條件，回傳陣列長度。

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

先遍歷 citations，將每篇論文依照引用數分配到桶中（引用數 ≥ len 統一放在 len）。接著從最大可能的 i（len）往下累加桶內數量，total 代表目前引用數 ≥ i 的論文數。當 total ≥ i 時，該 i 即為 H-Index。

Solution: 👉 [code](../codes/274_h_index.js)
