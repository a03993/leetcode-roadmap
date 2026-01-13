# 189 Rotate Array

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Medium](https://img.shields.io/badge/Medium-ffb800?style=flat-square)

Given an integer array `nums`, rotate the array to the right by `k` steps, where `k` is non-negative.

**Example:**

```java
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
```

```java
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]
```

**Constraints:**

- `1 <= nums.length <= 10⁵`
- `-2³¹ <= nums[i] <= 2³¹ - 1`
- `0 <= k <= 10⁵`

**Follow up:**

- Try to come up with as many solutions as you can. There are at least **three** different ways to solve this problem.
- Could you do it in-place with `O(1)` extra space?

**Note:**

| Algorithm           | Time Complexity | Space Complexity |
| ------------------- | --------------- | ---------------- |
| Array               | O(n)            | O(n)             |
| Cyclic Replacements | O(n)            | O(1) ✅          |
| Reverse             | O(n)            | O(1) ✅          |

💡 因為旋轉 `nums.length` 次等於沒動，旋轉 `nums.length + 1` 次等於旋轉 1 次，所以實際只需要做 `k % nums.length` 次旋轉，因此先把 `k` 壓到最小是效能與正確性的關鍵 (`k = k % nums.length`)。

1. Array

    先對 `k` 做取餘數處理，確保不超過陣列 `nums` 的長度。用 `slice` 把陣列 `nums` 最後 `k` 個元素切出來放前面，剩下的接在後面形成一個新的暫存陣列 `temp`，最後再把暫存陣列 `temp` 的元素依序覆寫回原陣列 `nums`。邏輯簡單，容易理解，但**額外產生了一個暫存陣列 `temp`**。

    ```js
    var rotate = function (nums, k) {
        k = k % nums.length;

        const temp = nums.slice(-k).concat(nums.slice(0, nums.length - k));

        for (let i = 0; i < nums.length; i++) {
            nums[i] = temp[i];
        }
    };
    ```

2. Cyclic Replacements

    用循環置換法法，先對 `k` 做取餘數處理，確保不超過陣列 `nums` 的長度。從頭遍歷陣列 `nums`，把當前元素移到它旋轉後的新位置 `(current + k) % nums.length`，同時把被覆蓋的元素暫存在 `temp` 並將暫存的元素放到它的新位置，這個過程會形成一個循環，直到回到起始位置，再從下一個未處理的 index 開始。重複這個循環直到所有元素都被移動，完成整個陣列 `nums` 的旋轉。

    ```js
    var rotate = function (nums, k) {
        k = k % nums.length;

        let count = 0;

        for (let i = 0; count < nums.length; i++) {
            let current = i;
            let prev = nums[i];

            do {
                const next = (current + k) % nums.length;
                const temp = nums[next];

                nums[next] = prev;
                prev = temp;
                current = next;
                count++;
            } while (current !== i);
        }
    };
    ```

    ![Demo](https://img.shields.io/badge/Demo-nums_=_[1,_2,_3,_4,_5,_6,_7],_k_=_3-white?style=flat-square)

    | Iteration | current | prev | next | nums                  |
    | --------- | ------- | ---- | ---- | --------------------- |
    | 1         | 0       | 1    | 3    | [1, 2, 3, 1, 5, 6, 7] |
    | 2         | 3       | 4    | 5    | [1, 2, 3, 1, 5, 6, 4] |
    | 3         | 6       | 7    | 2    | [1, 2, 7, 1, 5, 6, 4] |
    | 4         | 2       | 3    | 4    | [1, 2, 7, 1, 5, 3, 4] |
    | 5         | 5       | 6    | 1    | [1, 6, 7, 1, 5, 3, 4] |
    | 6         | 1       | 2    | 4    | [1, 6, 7, 1, 2, 3, 4] |
    | 7         | 4       | 5    | 0    | [5, 6, 7, 1, 2, 3, 4] |

3. Reverse

    用反轉法，先對 `k` 做取餘數處理，確保不超過陣列 `nums` 的長度，把整個陣列 `nums` 翻轉一次，接著翻轉前 `k` 個元素，再翻轉剩下的元素。

    Solution: 👉 [code](../codes/189_rotate_array.js)

    ![Demo](https://img.shields.io/badge/Demo-nums_=_[1,_2,_3,_4,_5,_6,_7],_k_=_3-white?style=flat-square)

    | function                            | nums                  | start | end | result                |
    | ----------------------------------- | --------------------- | ----- | --- | --------------------- |
    | `reverse(nums, 0, nums.length - 1)` | [1, 2, 3, 4, 5, 6, 7] | 0     | 6   | [7, 6, 5, 4, 3, 2, 1] |
    | `reverse(nums, 0, k - 1)`           | [7, 6, 5, 4, 3, 2, 1] | 0     | 2   | [5, 6, 7, 4, 3, 2, 1] |
    | `reverse(nums, k, nums.length - 1)` | [5, 6, 7, 4, 3, 2, 1] | 3     | 6   | [5, 6, 7, 1, 2, 3, 4] |
