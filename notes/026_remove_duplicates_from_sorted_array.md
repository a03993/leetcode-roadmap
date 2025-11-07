# 26 Remove Duplicates from Sorted Array

<span style="background-color: #6CC644; color: white; padding: 0.2em 0.6em; border-radius: 12px; font-size: 0.9em">Top Interview 150</span>

Given an integer array `nums` sorted in **non-decreasing order**, remove the duplicates **in-place** such that each unique element appears only **once**. The **relative order** of the elements should be kept the **same**.

Consider the number of _unique elements_ in `nums` to be `k​​​​​​​​​​​​​​`. After removing duplicates, return the number of unique elements `k`.

The first `k` elements of `nums` should contain the unique numbers in **sorted order**. The remaining elements beyond index `k - 1` can be ignored.

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
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

```
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
```

**Constraints:**

- `1 <= nums.length <= 3 * 10⁴`
- `-100 <= nums[i] <= 100`
- `nums` is sorted in non-decreasing order.

## Approach

| Topics              | Category         | Key Idea                    | Time Complexity | Space Complexity |
| ------------------- | ---------------- | --------------------------- | --------------- | ---------------- |
| Array, Two Pointers | In-place Removal | Two Pointers (Read & Write) | O(n)            | O(1)             |

- Pointers:
    - `k` (write pointer): Tracks the position for the next unique element.
    - `i` (read pointer): Scans the array to find unique elements.

- Traverse the array once.

- Steps:
    1. If `nums[i]` is not equal to `nums[k - 1]`, place it at `nums[k]` and increment `k`.

## Notes

- Always compare the current read element (`nums[i]`) with the last unique element (`nums[k - 1]`), **not** with the next write position (`nums[k]`).
    - Ensure the last unique element is never overwritten.
    - Skips all repeated elements.
    - Never misses any new elements.
- Since the array is sorted, **duplicates are always consecutive**. When `nums[i]` is not equal to `nums[k - 1]`, it's a new unique element.
