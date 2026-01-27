# 209 Minimum Size Subarray Sum

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Medium](https://img.shields.io/badge/Medium-ffb800?style=flat-square)

Given an array of positive integers `nums` and a positive integer `target`, return _the **minimal length** of a subarray whose sum is greater than or equal to `target`_. If there is no such subarray, return `0` instead.

**Example:**

```java
Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
```

```java
Input: target = 4, nums = [1,4,4]
Output: 1
```

```java
Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0
```

**Constraints:**

- `1 <= target <= 10⁹`
- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁴`

**Follow up:** If you have figured out the `O(n)` solution, try coding another solution of which the time complexity is `O(n log(n))`.

**Note:**

| Algorithm      | Time Complexity | Space Complexity |
| -------------- | --------------- | ---------------- |
| Sliding Window | O(n)            | O(1)             |
| ...            | O(n log(n))     | ...              |

使用 Sliding Window，用兩個指標 `start`、`end` 表示當前的視窗範圍，並用 `sum` 紀錄目前視窗內的總和。

外層迴圈擴張 `end`，把數字加進 `sum`，若是 `sum >= target` 就進入內層迴圈。

內層迴圈更新最小長度 `minLen` 並且將 `sum` 扣除 `nums[start]` 同時透過 `start++` 縮短視窗，直到 `sum < target` 就再次回到外層迴圈。

重複這個過程直到遍歷完陣列 `nums`，最後若沒有任何子陣列達標就回傳 0，否則回傳最小長度。

![Demo](https://img.shields.io/badge/Demo-target_=_7,_nums_=_[2,_3,_1,_2,_4,_3]-white?style=flat-square)

| step | start | end        | sum | minLen |
| ---- | ----- | ---------- | --- | ------ |
| init | 0     | 0          | 0   | ∞      |
| 1    | 0     | 1          | 2   | ∞      |
| 2    | 0     | 2          | 5   | ∞      |
| 3    | 0     | 3          | 6   | ∞      |
| 4    | 0     | 4          | 8   | ∞      |
| 4-1  | 1     | 4          | 6   | 4      |
| 5    | 1     | 5          | 10  | 4      |
| 5-1  | 2     | 5          | 7   | 4      |
| 5-2  | 3     | 5          | 6   | 3      |
| 6    | 3     | 6          | 9   | 3      |
| 6-1  | 4     | 6          | 7   | 3      |
| 6-2  | 5     | 6 → return | 3   | 2      |

**Flow:**

```java
start
  ↓
[[2], 3, 1, 2, 4, 3]
  ↑
 end
// step 1: sum = 2, 小於 target 繼續 sliding window
```

```java
start
  ↓
[[2, 3], 1, 2, 4, 3]
     ↑
    end
// step 2: sum = 5, 小於 target 繼續 sliding window
```

```java
start
  ↓
[[2, 3, 1], 2, 4, 3]
        ↑
       end
// step 3: sum = 6, 小於 target 繼續 sliding window
```

```java
start
  ↓
[[2, 3, 1, 2], 4, 3]
           ↑
          end
// step 4: sum = 8, 大於 target, 更新 minLen 為當前 window 的長度 4, 並縮小 window
```

```java
   start
     ↓
[2, [3, 1, 2], 4, 3]
           ↑
          end
// step 4-1: sum = 6, 小於 target 繼續 sliding window
```

```java
   start
     ↓
[2, [3, 1, 2, 4], 3]
              ↑
             end
// step 5: sum = 10, 大於 target, 更新 minLen 為當前 window 的長度 4, 並縮小 window
```

```java
      start
        ↓
[2, 3, [1, 2, 4], 3]
              ↑
             end
// step 5-1: sum = 7, 等於 target, 更新 minLen 為當前 window 的長度 3, 並縮小 window
```

```java
         start
           ↓
[2, 3, 1, [2, 4], 3]
              ↑
             end
// step 5-2: sum = 6, 小於 target 繼續 sliding window
```

```java
         start
           ↓
[2, 3, 1, [2, 4, 3]]
                 ↑
                end
// step 6: sum = 9, 大於 target, 更新 minLen 為當前 window 的長度 3, 並縮小 window
```

```java
            start
              ↓
[2, 3, 1, 2, [4, 3]]
                 ↑
                end
// step 6-1: sum = 7, 等於 target, 更新 minLen 為當前 window 的長度 2, 並縮小 window
```

```java
               start
                 ↓
[2, 3, 1, 2, 4, [3]]
                 ↑
                end
// step 6-2: end 不小於 nums.length, 回傳 minLen
```

<!-- TODO: O(n log(n)) -->
