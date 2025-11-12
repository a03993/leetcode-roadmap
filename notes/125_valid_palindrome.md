# 125 Valid Palindrome

<span style="background-color: #6CC644; color: white; padding: 0.2em 0.6em; border-radius: 12px; font-size: 0.9em">Top Interview 150</span>

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

| Topics               | Category       | Key Idea                                                             | Time Complexity | Space Complexity |
| -------------------- | -------------- | -------------------------------------------------------------------- | --------------- | ---------------- |
| Two Pointers, String | In-place Check | Two Pointers (Left & Right), Skip Non-Alphanumeric, Case-insensitive | O(n)            | O(1)             |

- Pointers:
    - `i` (left pointer): Start from `0`, moves **rightward** skipping non-alphanumeric chars.
    - `j` (right pointer): Start from `s.length - 1`, moves **leftward** skipping non-alphanumeric chars.

- Loop Condition: While `i < j` - _Repeat until pointers meet or cross._

- Steps:
    1. Skip non-alphanumeric characters:
        - Increment `i` until `s[i]` is alphanumeric or `i >= j`.
        - Decrement `j` until `s[j]` is alphanumeric or `j >= i`.
    2. Compare `s[i]` and `s[j]` after converting both to lowercase. If they are not equal, return `false` immediately.
    3. Increment `i` and decrement `j` to move inward.
    4. If the loop finishes without mismatch, return `true`.

## Notes

- Before comparing, skip non-alphanumeric characters need `i < j` to prevent pointers from crossing.
- In-place is more **space-efficient** than creating a new filtered string first.
- Empty string or string with only non-alphanumeric characters is considered a palindrome.
