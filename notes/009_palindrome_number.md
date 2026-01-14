# 009 Palindrome Number

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Easy](https://img.shields.io/badge/Easy-1cb8b8)

Given an integer `x`, return _`true` if `x` is a palindrome, and `false` otherwise_.

**Example:**

```java
Input: x = 121
Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
```

```java
Input: x = -121
Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
```

```java
Input: x = 10
Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
```

**Constraints:**

- `-2³¹ <= x <= 2³¹ - 1`

**Follow up:** Could you solve it without converting the integer to a string?

**Note:**

| Algorithm    | Time Complexity | Space Complexity |
| ------------ | --------------- | ---------------- |
| Two Pointers | O(n)            | O(n)             |
| Math         | O(log n) ✅     | O(1) ✅          |

1. Two Pointers

    把數字 `x` 轉成字串 `str`，用 Two Pointers `i` 和 `j` 分別從字串的開頭和結尾往中間比對，只要任一對字符不相等就不是回文，全部相等就是回文。

    ```js
    var isPalindrome = function (x) {
        const str = String(x);

        let i = 0;
        let j = str.length - 1;

        while (i < j) {
            if (str[i] !== str[j]) {
                return false;
            }

            i++;
            j--;
        }

        return true;
    };
    ```

2. Math

    反轉一半的數字，首先排除負數或末位為 0（非零的情況），因為這些不可能是回文數。然後用一個變數 `y` 儲存數字 `x` 的後半段反轉。當 `x <= y` 時代表已處理到一半，接著比較 `x === y` (數字長度為偶數) 和 `x === Math.floor(y / 10)` (數字長度為奇數)

    Solution: 👉 [code](../codes/009_palindrome_number.js)

    ![Demo](https://img.shields.io/badge/Demo-x_=_121-white?style=flat-square)

    | step | x   | y   |
    | ---- | --- | --- |
    | init | 121 | 0   |
    | 1    | 12  | 1   |
    | 2    | 1   | 12  |

    Time Complexity `O(log n)`: log 121 ≒ 2 (10 x 10 = 100)
