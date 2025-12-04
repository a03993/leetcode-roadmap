# 383 Ransom Note

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Easy](https://img.shields.io/badge/Easy-1cb8b8?style=flat-square)

Given two strings `ransomNote` and `magazine`, return `true` _if `ransomNote` can be constructed by using the letters from `magazine` and `false` otherwise_.

Each letter in `magazine` can only be used once in `ransomNote`.

**Example:**

```java
Input: ransomNote = "a", magazine = "b"
Output: false
```

```java
Input: ransomNote = "aa", magazine = "ab"
Output: false
```

```java
Input: ransomNote = "aa", magazine = "aab"
Output: true
```

**Constraints:**

- `1 <= ransomNote.length, magazine.length <= 10⁵`
- `ransomNote` and `magazine` consist of lowercase English letters.

## Approach

<table>
    <thead>
        <tr>
            <th>Topics</th>
            <th>Category</th>
            <th>Key Idea</th>
            <th>Time Complexity</th>
            <th>Space Complexity</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="2">Hash Table, String, Counting</td>
            <td>Array</td>
            <td>Count letters in magazine and check if ransomNote can be formed</td>
            <td>O(m+n)</td>
            <td>O(1) ✅</td>
        </tr>
        <tr>
            <td>Hash Map</td>
            <td>Count letters in ransomNote and subtract using magazine letters, return true if all matched</td>
            <td>O(m+n)</td>
            <td>O(n)</td>
        </tr>
    </tbody>
</table>

#### Array

1. Create an array of size 26 to count letter frequencies from `magazine`.
2. Loop through each character in `magazine` and increment its corresponding count.
3. Loop through each character in `ransomNote`:
    - Decrement the corresponding count.
    - If the count becomes negative, return false.
4. Return true —_ all letters in `ransomNote` can be constructed from `magazine`_.

👉 [code](../codes/383_ransom_note.js)

#### Hash Map

1. Create a map to count the frequency of each character in `ransomNote`.
2. Loop through each character in `magazine`:
    - If the character exists in the map, decrement its count.
    - Remove the character from the map if its count reaches 0.
    - Optionally, return true immediately if the map is empty.
3. Return true if the map is empty after the loop; otherwise, return false.

```js
var canConstruct = function (ransomNote, magazine) {
    const map = new Map();

    for (let char of ransomNote) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    for (let char of magazine) {
        if (map.has(char)) {
            const count = map.get(char) - 1;

            if (count == 0) {
                map.delete(char);
            } else {
                map.set(char, count);
            }

            if (map.size == 0) {
                return true;
            }
        }
    }

    return map.size == 0;
};
```

### Complexity

#### Array

m = `magazine.length`, n = `ransomNote.length`

1. **Time Complexity**: O(m+n)
    - Traverse `magazine`: O(m)
    - Traverse `ransomNote`: O(n)

2. **Space Complexity**: O(1)
    - Fixed-size array `count[26]` for letters a-z

#### Hash Map

m = `magazine.length`, n = `ransomNote.length`

1. **Time Complexity**: O(m+n)
    - Traverse `magazine`: O(m)
    - Traverse `ransomNote`: O(n)
    - Map operations (`get`, `set`, `has`, `delete`) : O(1) each

2. **Space Complexity**: O(n)
    - Store character counts from `ransomNote` in a Map

### Why Array is the better approach?

| Approach | Advantages                  | Disadvantages                |
| -------- | --------------------------- | ---------------------------- |
| Array    | Fast, low memory, simple    | Only works for lowercase a–z |
| Hash Map | Flexible for any characters | Slightly slower, more code   |

- Array: Directly grab the item from the drawer, straightforward and immediate.
- Map: First find the key (hash it), handle possible collisions, then open the drawer.
