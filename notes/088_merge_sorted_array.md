# 88 Merge Sorted Array

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Easy](https://img.shields.io/badge/Easy-1cb8b8)

You are given two integer arrays `nums1` and `nums2`, sorted in **non-decreasing order**, and two integers `m` and `n`, representing the number of elements in `nums1` and `nums2` respectively.

**Merge** `nums1` and `nums2` into a single array sorted in **non-decreasing order**.

The final sorted array should not be returned by the function, but instead be _stored inside the array `nums1`_. To accommodate this, `nums1` has a length of `m + n`, where the first `m` elements denote the elements that should be merged, and the last `n` elements are set to `0` and should be ignored. `nums2` has a length of `n`.

**Example:**

```java
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
```

```java
Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].
```

```java
Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
```

**Constraints:**

- `nums1.length == m + n`
- `nums2.length == n`
- `0 <= m, n <= 200`
- `1 <= m + n <= 200`
- `-10⁹ <= nums1[i], nums2[j] <= 10⁹`

**Follow up:** Can you come up with an algorithm that runs in `O(m + n)` time?

**Note:**

| Algorithm    | Time Complexity | Space Complexity |
| ------------ | --------------- | ---------------- |
| Two Pointers | O(m + n)        | O(1)             |

用三個指標 `i` 指向 `nums1` 元素，`j` 指向 `nums2` 元素, `k` 指向寫入位置。從後往前比較 `nums1[i]` 和 `nums2[j]`，把比較大的元素放入 `nums1[k]`，然後將對應的指標往前移。直到 `j < 0` 代表所有 `nums2` 都已經遍歷完並 in-place 到 `nums1`，`nums1` 就是最後答案。

⚠️ 在**從後往前合併**時，一定要用 `nums1[i] > nums2[j]` 比較，不能反過來寫成 `nums2[j] > nums1[i]`，否則可能會出現無窮迴圈：

```js
// Time Limit Exceeded

let i = m - 1;
let j = n - 1;
let k = m + n - 1;

while (j >= 0) {
    if (nums2[j] > nums1[i]) {
        nums1[k] = nums2[j];
        j--;
    } else {
        nums1[k] = nums1[i];
        i--;
    }
    k--;
}
```

- 當 `i < 0`，`nums1[i]` 變成 `undefined`
- 比較 `nums2[j] > nums1[i]` → 變成 `false`
- 永遠走到 else，`i` 一直減，`j` 永遠不減 → 無窮迴圈 → 超時
