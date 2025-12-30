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

| Topics | Key Idea                                                       | Time Complexity | Space Complexity |
| ------ | -------------------------------------------------------------- | --------------- | ---------------- |
| Array  | Convert number to string, use two pointers to check palindrome | O(n)            | O(n)             |
| Math   | Reverse half of the integer and compare with the other half    | O(n)            | O(1) ✅          |

1. Array
    - Turn the integer `x` into a string using `String(x)`
    - Set two pointers: `i = 0`, `j = str.length - 1`
    - While `i < j`, compare `str[i]` and `str[j]`
        - Return `false` if they are different
        - Return `true` if the loop finishes

    Solution:

    ```js
    var isPalindrome = function (x) {
        const str = String(x);

        let i = 0;
        let j = str.length - 1;

        while (i < j) {
            if (str[i] != str[j]) {
                return false;
            }

            i++;
            j--;
        }

        return true;
    };
    ```

2. Math
    - If x is navigate or ends with 0 (**but not 0 itself**), return `false` right away
    - Initialize `y = 0` to store the reversed half of `x`
    - While `x > y` (stop when `x <= y`, meaning we’ve processed half the digits)
        - add the last digit of `x` to `y`
        - remove the last digit from `x`
    - Return `x == y` or `x == Math.floor(y / 10)` for both even and odd digits
