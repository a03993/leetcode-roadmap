# 149 Max Points on a Line

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644)
![Hard](https://img.shields.io/badge/Hard-ff2d20)

Given an array of `points` where `points[i] = [xᵢ, yᵢ]` represents a point on the **X-Y** plane, return _the maximum number of points that lie on the same straight line_.

**Example:**

```java
Input: points = [[1,1],[2,2],[3,3]]
Output: 3
```

```java
Input: points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
Output: 4
```

**Constraints:**

- `1 <= points.length <= 300`
- `points[i].length == 2`
- `-10⁴ <= xᵢ, yᵢ <= 10⁴`
- All the `points` are **unique**.

| Topics           | Key Idea                                                       | Time Complexity | Space Complexity |
| ---------------- | -------------------------------------------------------------- | --------------- | ---------------- |
| Brute Force      | Pick every three points and check if they lie on the same line | O(n³)           | O(1)             |
| Math, Hash Table | FFix one point, count slopes to all other points               | O(n²) ✅        | O(n)             |

1. Brute Force
    - If `points.length <= 2`, just return the length
    - Initialize `maxCount = 0`
    - Loop through every pair of points (`i`, `j`)
        - Initialize `count = 2` (because `i` and `j` are already on the line)
        - Check every other point `k`
            - Use cross multiplication to check if `i`, `j`, `k` are collinear
            - If yes, decrement `count`
        - Update `maxCount = max(maxCount, count)`
    - Return `maxCount`

    ```js
    var maxCount = function (points) {
        if (points.length <= 2) {
            return points.length;
        }

        let maxCount = 0;

        for (let i = 0; i < points.length; i++) {
            for (let j = i + 1; j < points.length; j++) {
                let count = 2;

                for (let k = j + 1; k < points.length; k++) {
                    const [x1, y1] = points[i];
                    const [x2, y2] = points[j];
                    const [x3, y3] = points[k];

                    if ((y2 - y1) * (x3 - x1) == (y3 - y1) * (x2 - x1)) {
                        count++;
                    }
                }

                maxCount = Math.max(maxCount, count);
            }
        }

        return maxCount;
    };
    ```

    - Slope formula: `slope(i,j) = (y2 - y1) / (x2 - x1)`
    - Collinear condition: `(y2 - y1) / (x2 - x1) = (y3 - y1) / (x3 - x1)`
        - Use **multiplication** instead of division to **avoid division by zero** because if the line is vertical (`x2 - x1 = 0`) would crash division.

2. Math + Hash Table
    - Initialize `maxCount = 0`
    - Loop through each point `i`
        - Create a HashMap to store slopes
        - Initialize `overlap = 0` for counts duplicates of point `i`
        - Initialize `count = 0` for counts points with the same slope
    - Loop through every other point `j`
        - If `i` and `j` are the same point, decrement `overlap` and continue
        - Otherwise
            - Compute slope `(dy, dx)`
            - Reduce `(dy, dx)` by `gcd` to get simplest form
            - Store slope as key in HashMap
            - Update `count` with the max frequency of this slope
    - After checking all `j` for point `i`
        - Update `maxCount = max(maxCount, count + overlap + 1)` - _`+1` is for the fixed point i itself_
    - Return `maxCount`

    Solution: 👉 [code](../codes/149_max_points_on_a_line.js)
