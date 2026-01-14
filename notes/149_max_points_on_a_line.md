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

**Note:**

| Algorithm   | Time Complexity | Space Complexity |
| ----------- | --------------- | ---------------- |
| Brute Force | O(n³)           | O(1)             |
| Hash Map    | O(n²) ✅        | O(n)             |

1. Brute Force

    先處理特殊情況，如果點數 ≤ 2，直接 return 點數。接著用三層迴圈遍歷所有點組合：外層兩個點 (`i`, `j`) 定義一條直線，初始 `count = 2`；內層遍歷剩下的點 `k`，檢查三個點是否共線，如果 `(y2 - y1) * (x3 - x1) === (y3 - y1) * (x2 - x1)`，就把 `count` +1；更新 `maxCount` 為目前直線上最多點的數量。最後 return `maxCount`。

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

2. Hash Map

    用斜率計數法，遍歷每個點 `points[i]` 作為基準點，然後計算它與其他點 `points[j]` 的斜率，如果兩個點重合（`dx = 0` 且 `dy = 0`），就把 `overlap` 計數加一；否則計算 `dx` 和 `dy` 的最大公因數 (`GCD`)，把 `dx` 和 `dy` 簡化成最簡分數，作為斜率的唯一 key；用 Map 記錄每個斜率出現的次數，更新 `count` 為同一斜率出現的最大次數；最後把 `count + overlap + 1`（基準點本身）與 `maxCount` 比較更新。遍歷完所有點後，`maxCount` 就是同一直線上最多的點數。

    Solution: 👉 [code](../codes/149_max_points_on_a_line.js)
