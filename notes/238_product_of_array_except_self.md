# 238 Product of Array Except Self

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Medium](https://img.shields.io/badge/Medium-ffb800?style=flat-square)

Given an integer array `nums`, return _an array answer such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`_.

The product of any prefix or suffix of `nums` is **guaranteed** to fit in a **32-bit** integer.

You must write an algorithm that runs in `O(n)` time and without using the division operation.

**Example:**

```java
Input: nums = [1,2,3,4]
Output: [24,12,8,6]
```

```java
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
```

**Constraints:**

- `2 <= nums.length <= 10⁵`
- `-30 <= nums[i] <= 30`
- The input is generated such that `answer[i]` is **guaranteed** to fit in a **32-bit** integer.

**Follow up:** Can you solve the problem in `O(1)` extra space complexity? (The output array **does not** count as extra space for space complexity analysis.)

**Note:**

| Algorithm               | Time Complexity | Space Complexity |
| ----------------------- | --------------- | ---------------- |
| Brute Force             | O(n²)           | O(n)             |
| Division                | O(n)            | O(1)             |
| Prefix & Suffix Product | O(n)            | O(1)             |

1. Brute Force

    對每個位置 `i`，算除了 `nums[i]` 的所有元素乘積。

    ```js
    var productExceptSelf = function (nums) {
        const arr = [];

        for (let i = 0; i < nums.length; i++) {
            let prod = 1;

            for (let j = 0; j < nums.length; j++) {
                if (i !== j) {
                    prod *= nums[j];
                }
            }

            arr[i] = prod;
        }

        return arr;
    };
    ```

2. Division

    先算整個陣列總乘積，然後每個位置用總乘積除以 `nums[i]`。

    ⚠️ 如果有 0，必須額外處理。

    ```js
    var productExceptSelf = function (nums) {
        const arr = [];
        let prod = 1;
        let zeroCount = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 0) {
                zeroCount++;
            } else {
                prod *= nums[i];
            }
        }

        for (let i = 0; i < nums.length; i++) {
            if (zeroCount > 1) {
                arr[i] = 0;
            } else if (zeroCount === 1) {
                if (nums[i] === 0) {
                    arr[i] = prod;
                } else {
                    arr[i] = 0;
                }
            } else {
                arr[i] = prod / nums[i];
            }
        }

        return arr;
    };
    ```

3. Prefix & Suffix Product

    第一趟從左到右，先存每個位置左邊所有數字的乘積。第二趟從右到左，再把右邊的乘積乘回來，兩邊一合就是答案。

    Solution: 👉 [code](../codes/238_product_of_array_except_self.js)
