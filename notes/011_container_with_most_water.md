# 11 Container With Most Water

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Medium](https://img.shields.io/badge/Medium-ffb800?style=flat-square)

You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `iᵗʰ` line are `(i, 0)` and `(i, height[i])`.

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return _the maximum amount of water a container can store_.

**Notice** that you may not slant the container.

**Example:**

```java
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
```

```java
Input: height = [1,1]
Output: 1
```

**Constraints:**

- `n == height.length`
- `2 <= n <= 10⁵`
- `0 <= height[i] <= 10⁴`

**Note:**

| Algorithm    | Time Complexity | Space Complexity |
| ------------ | --------------- | ---------------- |
| Two Pointers | O(n)            | O(1)             |

使用兩個指標 `i`、`j` 分別指向陣列的左右兩端，計算當前容器面積 `(j - i) * min(height[i], height[j])` 並更新最大值 `maxArea`。

每次比較左右兩個高度，因為面積**受限於**最短的邊，所以移動較短邊可能找到更高的邊，從而增加面積：

- 若 `height[i] < height[j]`，左指標右移 `i++`
- 若 `height[i] >= height[j]`，右指標左移 `j--`

重複這個過程直到兩指標相遇，最後 `maxArea` 就會是最大容器面積。

![Demo](https://img.shields.io/badge/Demo-heights_=_[1,_8,_6,_2,_5,_4,_8,_3,_7]-white?style=flat-square)

<div style="display:flex; gap:2rem; margin-top:3rem">

<div>

Step 1:

| left | right | area | maxArea |
| ---- | ----- | ---- | ------- |
| 0    | 8     | 8    | 8       |

</div>

<div>

```java
left                   right
  |                      |
  1                      7
  ------------------------  width = 8

// area = 8 * min(1,7) = 8
// maxArea = max(0, 8) = 8
// Move left pointer
```

</div>

</div>

<div style="display:flex; gap:2rem; margin-top:3rem">

<div>

Step 2:

| left | right | area | maxArea |
| ---- | ----- | ---- | ------- |
| 1    | 8     | 49   | 49      |

</div>

<div>

```java
   left                right
     |                   |
     8                   7
  ------------------------  width = 7

// area = 7 * min(8,7) = 49
// maxArea = max(8, 49) = 49
// Move right pointer
```

</div>

</div>

<div style="display:flex; gap:2rem; margin-top:3rem">

<div>

Step 3:

| left | right | area | maxArea |
| ---- | ----- | ---- | ------- |
| 1    | 7     | 18   | 49      |

</div>

<div>

```java
   left             right
     |                |
     8                3
  ------------------------  width = 6

// area = 6 * min(8,3) = 18
// maxArea = max(49, 18) = 49
// Move right pointer
```

</div>

</div>

<div style="display:flex; gap:2rem; margin-top:3rem">

<div>

Step 4:

| left | right | area | maxArea |
| ---- | ----- | ---- | ------- |
| 1    | 6     | 40   | 49      |

</div>

<div>

```java
   left          right
     |             |
     8             8
  ------------------------  width = 5

// area = 5 * min(8,8) = 40
// maxArea = max(49, 40) = 49
// Move left pointer
```

</div>

</div>

<div style="display:flex; gap:2rem; margin-top:3rem">

<div>

Step 5:

| left | right | area | maxArea |
| ---- | ----- | ---- | ------- |
| 2    | 6     | 24   | 49      |

</div>

<div>

```java
      left       right
        |          |
        6          8
  ------------------------  width = 4

// area = 4 * min(6,8) = 24
// maxArea = max(49, 24) = 49
// Move left pointer
```

</div>

</div>

<div style="display:flex; gap:2rem; margin-top:3rem">

<div>

Step 6:

| left | right | area | maxArea |
| ---- | ----- | ---- | ------- |
| 3    | 6     | 6    | 49      |

</div>

<div>

```java
         left    right
           |       |
           2       8
  ------------------------  width = 3

// area = 3 * min(2,8) = 6
// maxArea = max(49, 6) = 49
// Move left pointer
```

</div>

</div>

<div style="display:flex; gap:2rem; margin-top:3rem">

<div>

Step 7:

| left | right | area | maxArea |
| ---- | ----- | ---- | ------- |
| 4    | 6     | 10   | 49      |

</div>

<div>

```java
            left right
              |    |
              5    8
  ------------------------  width = 2

// area = 2 * min(5,8) = 10
// maxArea = max(49, 10) = 49
// Move left pointer
```

</div>

</div>

<div style="display:flex; gap:2rem; margin-top:3rem">

<div>

Step 8:

| left | right | area | maxArea |
| ---- | ----- | ---- | ------- |
| 5    | 6     | 4    | 49      |

</div>

<div>

```java
              left right
                 | |
                 4 8
  ------------------------  width = 1

// area = 1 * min(4,8) = 4
// maxArea = max(49, 4) = 49
```

</div>

</div>
