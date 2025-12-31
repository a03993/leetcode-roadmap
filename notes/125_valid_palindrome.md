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

| Topic        | Time Complexity | Space Complexity |
| ------------ | --------------- | ---------------- |
| Two Pointers | O(n)            | O(1)             |

1. Initialize two pointers: `i = 0` (left) and `j = s.length - 1` (right)
2. Skip non-alphanumeric characters at both ends
3. Compare `s[i]` and `s[j]` in lowercase
4. If mismatch → return false
5. Move pointers inward until they meet
6. If loop completes → return true

左右雙指標忽略非字母數字字符，比較字母大小寫無關，檢查整個字串是否對稱。

## Notes

`isAlphanumeric` Implementations:

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
