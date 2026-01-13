# 80 Remove Duplicates from Sorted Array II

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Medium](https://img.shields.io/badge/Medium-ffb800?style=flat-square)

Given an integer array `nums` sorted in **non-decreasing order**, remove some duplicates **in-place** such that each unique element appears **at most twice**. The **relative order** of the elements should be kept the **same**.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the **first part** of the array `nums`. More formally, if there are `k` elements after removing the duplicates, then the first `k` elements of `nums` should hold the final result. It does not matter what you leave beyond the first `k` elements.

Return `k` after placing the final result in the first `k` slots of `nums`.

Do **not** allocate extra space for another array. You must do this by **modifying the input array in-place** with O(1) extra memory.

**Custom Judge:**

The judge will test your solution with the following code:

```
int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
assert nums[i] == expectedNums[i];
}
```

If all assertions pass, then your solution will be **accepted**.

**Example:**

```java
Input: nums = [1,1,1,2,2,3]
Output: 5, nums = [1,1,2,2,3,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
```

```java
Input: nums = [0,0,1,1,1,1,2,3,3]
Output: 7, nums = [0,0,1,1,2,3,3,_,_]
// Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
```

**Constraints:**

- `1 <= nums.length <= 3 * 10⁴`
- `-10⁴ <= nums[i] <= 10⁴`
- `nums` is sorted in **non-decreasing** order.

**Note:**

| Algorithm    | Time Complexity | Space Complexity |
| ------------ | --------------- | ---------------- |
| Two Pointers | O(n)            | O(1)             |

用指標 `k` 指向下一個寫入位置，從頭遍歷陣列 `nums`，如果當前元素不等於 `nums[k - 2]` 或是 `k < 2` (前兩個元素直接保留)，就放該項的元素複寫到 `nums[k]`，然後 `k` 往後移一位。遍歷完， `k` 就是新陣列的長度，而原陣列的前 `k` 個元素就是每個元素最多出現兩次的結果。

![Demo](https://img.shields.io/badge/Demo-nums_=_[1,_1,_1,_2,_2,_3]-white?style=flat-square)

| i   | k   | new nums               | new k      |
| --- | --- | ---------------------- | ---------- |
| 0   | 0   | [**1**, 1, 1, 2, 2, 3] | 1          |
| 1   | 1   | [1, **1**, 1, 2, 2, 3] | 2          |
| 2   | 2   | [1, 1, 1, 2, 2, 3]     | 2          |
| 3   | 2   | [1, 1, **2**, 2, 2, 3] | 3          |
| 4   | 3   | [1, 1, 2, **2**, 2, 3] | 4          |
| 5   | 4   | [1, 1, 2, 2, **3**, 3] | 5 (return) |
