# 125 Valid Palindrome

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Easy](https://img.shields.io/badge/Easy-1cb8b8)

A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string `s`, return `true` _if it is a **palindrome**, or `false` otherwise_.

**Example:**

```java
Input: s = "A man, a plan, a canal: Panama"
Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
```

```java
Input: s = "race a car"
Output: false
// Explanation: "raceacar" is not a palindrome.
```

```java
Input: s = " "
Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
```

**Constraints:**

- `1 <= s.length <= 2 * 10⁵`
- `s` consists only of printable ASCII characters.

**Note:**

| Algorithm    | Time Complexity | Space Complexity |
| ------------ | --------------- | ---------------- |
| Two Pointers | O(n)            | O(1)             |

用雙指針 `i` 和 `j` 從字串左、右往中間檢查，忽略非字母數字字符，不區分大小寫，比較字母是否一致，中間只要遇到有不同的字母就直接回傳 false，比完所有字母都一致就回傳 true。

**`isAlphanumeric` Implementations:**

1. `charCodeAt` Version

    ```js
    function isAlphanumeric(char) {
        const code = char.charCodeAt(0);

        return (
            (code >= 48 && code <= 57) || //0-9
            (code >= 65 && code <= 90) || //A-Z
            (code >= 97 && code <= 122) //a-z
        );
    }
    ```

2. Regex Version

    ```js
    function isAlphanumeric(char) {
        return /^[a-z0-9]$/i.test(char);
    }
    ```

| Method     | Readability | Performance        |
| ---------- | ----------- | ------------------ |
| Regex      | High ✅     | Slightly slower    |
| charCodeAt | Medium      | Slightly faster ✅ |
