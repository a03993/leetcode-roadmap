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

| Topic        | Time Complexity | Space Complexity |
| ------------ | --------------- | ---------------- |
| Two Pointers | O(n)            | O(n)             |
| Math         | O(log n) ✅     | O(1) ✅          |

1. Two Pointers

    把整數 `x` 轉成字串，用 Two Pointers 從頭尾往中間比對，只要任一對字符不相等就不是回文，全部相等就是回文。

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

    把整數 `x` 的「後半段」反轉成 `y`，同時不斷把 `x` 去掉尾數。當 `x <= y` 時代表已處理到一半，接著比較 `x === y` (偶數位) 和 `x === Math.floor(y / 10)` (奇數位)

    Solution: 👉 [code](../codes/009_palindrome_number.js)
