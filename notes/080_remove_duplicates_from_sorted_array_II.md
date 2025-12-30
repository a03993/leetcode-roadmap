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

```
Input: nums = [1,1,1,2,2,3]
Output: 5, nums = [1,1,2,2,3,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

```
Input: nums = [0,0,1,1,1,1,2,3,3]
Output: 7, nums = [0,0,1,1,2,3,3,_,_]
Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

**Constraints:**

- `1 <= nums.length <= 3 * 10⁴`
- `-10⁴ <= nums[i] <= 10⁴`
- `nums` is sorted in **non-decreasing** order.

## Approach

| Topics              | Category       | Key Idea                                               | Time Complexity | Space Complexity |
| ------------------- | -------------- | ------------------------------------------------------ | --------------- | ---------------- |
| Array, Two Pointers | In-place Write | Use read/write pointers to keep at most two duplicates | O(n)            | O(1)             |

- Pointers:
    - `i` (read pointer): Scans the array from index 1 to find elements to keep.
    - `k` (write pointer): Position to place the the next valid element, keeping at most two duplicates.

- Traverse the array once.

- Steps:
    1. If `k < 2` (**the first two elements are always kept**), write `nums[i]` to `nums[k]`.
    2. Otherwise, write `nums[i]` to `nums[k]` only if `nums[i]` is not equal to `nums[k - 2]`, ensuring at most two duplicates remain.
    3. Increment `k` whenever an element is written.

#### 🚀 Demonstration: `nums = [1,1,1,2,2,3]`

```
Initial:
k → [1] [1] [1] [2] [2] [3]
i → [1] [1] [1] [2] [2] [3]

Iteration 1 (i=0):
k → [1] [_] [_] [_] [_] [_]
i → [1] [1] [1] [2] [2] [3]

Iteration 2 (i=1):
k → [1] [1] [_] [_] [_] [_]
i → [1] [1] [1] [2] [2] [3]

Iteration 3 (i=2):
nums[i] == nums[k-2] → skip
k → [1] [1] [_] [_] [_] [_]
i → [1] [1] [1] [2] [2] [3]

Iteration 4 (i=3):
nums[i] != nums[k-2] → place
k → [1] [1] [2] [_] [_] [_]
i → [1] [1] [1] [2] [2] [3]

Iteration 5 (i=4):
nums[i] != nums[k-2] → place
k → [1] [1] [2] [2] [_] [_]
i → [1] [1] [1] [2] [2] [3]

Iteration 6 (i=5):
nums[i] != nums[k-2] → place
k → [1] [1] [2] [2] [3] [_]
i → [1] [1] [1] [2] [2] [3]

Final:
k = 5, array = [1,1,2,2,3,_]
```

## Notes

- `k < 2` ensures the first two numbers are always kept and works **even if the array has 0 or 1 element**.
- Because the array is sorted, comparing the current number with the element at `k - 2` is **enough to decide whether to place it**, ensuring at most two duplicates.
