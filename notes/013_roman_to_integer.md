# 13 Roman to Integer

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644)
![Easy](https://img.shields.io/badge/Easy-1cb8b8)

Roman numerals are represented by seven different symbols: `I`, `V`, `X`, `L`, `C`, `D` and `M`.

| Symbol | Value |
| ------ | ----- |
| I      | 1     |
| V      | 5     |
| X      | 10    |
| L      | 50    |
| C      | 100   |
| D      | 500   |
| M      | 1000  |

For example, `2` is written as `II` in Roman numeral, just two ones added together. `12` is written as `XII`, which is simply `X + II`. The number `27` is written as `XXVII`, which is `XX + V + II`.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not `IIII`. Instead, the number four is written as `IV`. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as `IX`. There are six instances where subtraction is used:

- `I` can be placed before `V` (5) and `X` (10) to make 4 and 9.
- `X` can be placed before `L` (50) and `C` (100) to make 40 and 90.
- `C` can be placed before `D` (500) and `M` (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.

**Example:**

```
Input: s = "III"
Output: 3
Explanation: III = 3.
```

```
Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
```

```
Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
```

**Constraints:**

- `1 <= s.length <= 15`
- `s` contains only the characters `('I', 'V', 'X', 'L', 'C', 'D', 'M')`.
- It is **guaranteed** that s is a valid roman numeral in the range `[1, 3999]`.

## Approach

| Topics                   | Category    | Key Idea                 | Time Complexity | Space Complexity |
| ------------------------ | ----------- | ------------------------ | --------------- | ---------------- |
| Hash Table, Math, String | Calculation | handle subtraction logic | O(n)            | O(1)             |

- Initialize:
    - `map` to store the mapping from Roman symbols to integer values.
    - `sum` to store the final integer result.

- Traverse the string once, character by character.

- Steps:
    1. Add current character's value to `sum`.
    2. If the previous character exists and is smaller than current, subtract **twice** the previous value.

## Notes

- Only `I`, `X`, and `C` can precede **specific** larger numerals to indicate subtraction.
- Invalid examples: `IL`, `IC`, `ID`, `IM`.

| Smaller before Larger | Meaning                |
| --------------------- | ---------------------- |
| `I` before `V` or `X` | 4 (`IV`), 9 (`IX`)     |
| `X` before `L` or `C` | 40 (`XL`), 90 (`XC`)   |
| `C` before `D` or `M` | 400 (`CD`), 900 (`CM`) |

Because Roman numerals follow **these strict subtraction rules above**, we don’t need a separate if block for every symbol:

```
let sum = 0;

for (let i = 0; i < s.length; i++) {
    if (s[i] == "I") {
        sum += 1;
    }

    if (s[i] == "V") {
        sum += 5;

        if (s[i - 1] == "I") {
            sum -= 2;
        }
    }

    if (s[i] == "X") {
        sum += 10;

        if (s[i - 1] == "I") {
            sum -= 2;
        }
    }

    if (s[i] == "L") {
        sum += 50;

        if (s[i - 1] == "X") {
            sum -= 20;
        }
    }

    if (s[i] == "C") {
        sum += 100;

        if (s[i - 1] == "X") {
            sum -= 20;
        }
    }

    if (s[i] == "D") {
        sum += 500;

        if (s[i - 1] == "C") {
            sum -= 200;
        }
    }

    if (s[i] == "M") {
        sum += 1000;

        if (s[i - 1] == "C") {
            sum -= 200;
        }
    }
}

return sum;
```
