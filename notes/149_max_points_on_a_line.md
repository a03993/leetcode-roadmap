# 149 Max Points on a Line

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Hard](https://img.shields.io/badge/Hard-ff2d20?style=flat-square)

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

| Topic            | Time Complexity | Space Complexity |
| ---------------- | --------------- | ---------------- |
| Brute Force      | O(n³)           | O(1)             |
| Math, Hash Table | O(n²) ✅        | O(n)             |

1. Brute Force

    遍歷每組兩點作為直線端點，檢查其他點是否共線，統計直線上最多點的數量。

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

    - 斜率公式: `slope(i,j) = (y2 - y1) / (x2 - x1)`
    - 為避免除以零，使用 乘法 代替除法，因為當直線垂直 (`x2 - x1 = 0`) 時，除法會出錯: `(y2 - y1) / (x2 - x1) = (y3 - y1) / (x3 - x1)`

2. Math + Hash Table

    以每個點為基準，用 Map 統計不同斜率的點數，化簡斜率避免浮點數誤差，加上重合點得到每條直線的最大點數。

    Solution: 👉 [code](../codes/149_max_points_on_a_line.js)
