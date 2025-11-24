# 125 Valid Palindrome

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644)
![Easy](https://img.shields.io/badge/Easy-1cb8b8)

A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string `s`, return `true` _if it is a **palindrome**, or `false` otherwise_.

**Example:**

```
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
```

```
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
```

```
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
```

**Constraints:**

- `1 <= s.length <= 2 * 10⁵`
- `s` consists only of printable ASCII characters.

## Approach

| Topics               | Category       | Key Idea                                                                                 | Time Complexity | Space Complexity |
| -------------------- | -------------- | ---------------------------------------------------------------------------------------- | --------------- | ---------------- |
| Two Pointers, String | In-place Check | Use left/right pointers to check palindrome, skipping non-alphanumeric and ignoring case | O(n)            | O(1)             |

- Pointers:
    - `i` (left pointer): Starts at the beginning of the string.
    - `j` (right pointer): Starts at the end of the string.

- Loop Condition: While `i < j` - _continue until pointers meet or cross._

- Steps:
    1. Skip non-alphanumeric characters at `i` and `j`.
    2. Compare characters case-insensitively.
    3. If mismatch occurs, return `false`, or move `i` and `j` inward otherwise.

## Notes

- Before comparing, skip non-alphanumeric characters need `i < j` to prevent pointers from crossing.
- In-place is more **space-efficient** than creating a new filtered string first.
- Empty string or string with only non-alphanumeric characters is considered a palindrome.
