# 242 Valid Anagram

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Easy](https://img.shields.io/badge/Easy-1cb8b8?style=flat-square)

Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.

**Example:**

```java
Input: s = "anagram", t = "nagaram"
Output: true
```

```java
Input: s = "rat", t = "car"
Output: false
```

**Constraints:**

- `1 <= s.length, t.length <= 5 * 10⁴`
- `s` and `t` consist of lowercase English letters.

**Follow up:** What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

## Approach

| Topics                      | Category | Key Idea                                              | Time Complexity | Space Complexity |
| --------------------------- | -------- | ----------------------------------------------------- | --------------- | ---------------- |
| Hash Table, String, Sorting | Hash Map | Count characters in s and match against t using a map | O(n)            | O(n)             |

1. If the lengths of `s` and `t` are different, return false.
2. Create a map to count the frequency of each character in `s`.
3. Loop through each character in `t`:
    - If the character is not in the map, return false.
    - Otherwise, decrement its count. If count becomes 0, remove it from the map.
4. Return true if the map is empty — _all characters match_; otherwise, return false.

### Complexity

n = `s.length` = `t.length`

1. **Time Complexity**: O(n)
    - Traverse strings `s` and `t`: O(n)
    - Map operations (`get`, `set`, `has`, `delete`): O(1) each

2. **Space Complexity**: O(n)
    - Store character counts from `s` in a Map
