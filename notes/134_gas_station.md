# 134 Gas Station

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Medium](https://img.shields.io/badge/Medium-ffb800?style=flat-square)

There are `n` gas stations along a circular route, where the amount of gas at the `iᵗʰ` station is `gas[i]`.

You have a car with an unlimited gas tank and it costs `cost[i]` of gas to travel from the `iᵗʰ` station to its next `(i + 1)ᵗʰ` station. You begin the journey with an empty tank at one of the gas stations.

Given two integer arrays `gas` and `cost`, return _the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return `-1`_. If there exists a solution, it is **guaranteed** to be **unique**.

**Example:**

```java
Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
Output: 3
// Explanation:
// Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
// Travel to station 4. Your tank = 4 - 1 + 5 = 8
// Travel to station 0. Your tank = 8 - 2 + 1 = 7
// Travel to station 1. Your tank = 7 - 3 + 2 = 6
// Travel to station 2. Your tank = 6 - 4 + 3 = 5
// Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
// Therefore, return 3 as the starting index.
```

```java
Input: gas = [2,3,4], cost = [3,4,3]
Output: -1
// Explanation:
// You can't start at station 0 or 1, as there is not enough gas to travel to the next station.
// Let's start at station 2 and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
// Travel to station 0. Your tank = 4 - 3 + 2 = 3
// Travel to station 1. Your tank = 3 - 3 + 3 = 3
// You cannot travel back to station 2, as it requires 4 unit of gas but you only have 3.
// Therefore, you can't travel around the circuit once no matter where you start.
```

**Constraints:**

- `n == gas.length == cost.length`
- `1 <= n <= 10⁵`
- `0 <= gas[i], cost[i] <= 10⁴`
- The input is generated such that the answer is unique.

**Note:**

| Topic       | Time Complexity | Space Complexity |
| ----------- | --------------- | ---------------- |
| Brute Force | O(n²) - TLE ❌  | O(1)             |
| Greedy      | O(n)            | O(1)             |

1. Brute Force

    遍歷 `gas` 每個站，每個站當起點，模擬整圈行駛，累加油量減去花費 (`tank += gas[k] - cost[k]`)。只要油箱 `tank` 變負，就跳出內層迴圈換下一個起點。最後找到能走完整圈的起點就 return，沒找到就回傳 -1。寫法直觀，但當 `gas`, `cost` 陣列很大時會很慢。

    ```js
    var canCompleteCircuit = function (gas, cost) {
        for (let i = 0; i < gas.length; i++) {
            let tank = 0;
            let completed = true;

            for (let j = 0; j < gas.length; j++) {
                const k = (i + j) % gas.length;
                tank += gas[k] - cost[k];

                if (tank < 0) {
                    completed = false;
                    break;
                }
            }

            if (completed) {
                return i;
            }
        }

        return -1;
        // Time Limit Exceeded: e.g., gas = [0, 2, 0, ..., 0, 0,], cost = [0, 0, 0, ..., 1, 0,]
    };
    ```

    ![Demo](https://img.shields.io/badge/Demo-gas_=_[1,_2,_3,_4,_5],_cost_=_[3,_4,_5,_1,_2]-white?style=flat-square)

    💡 `const k = (i + j) % gas.length` 是用來實現 circle index 循環：

    | j   | i = 0 | i = 1      | i = 2      | i = 3      | i = 4      |
    | --- | ----- | ---------- | ---------- | ---------- | ---------- |
    | 0   | 0     | 1          | 2          | 3          | 4          |
    | 1   | 1     | 2          | 3          | 4          | 0 (circle) |
    | 2   | 2     | 3          | 4          | 0 (circle) | 1          |
    | 3   | 3     | 4          | 0 (circle) | 1          | 2          |
    | 4   | 4     | 0 (circle) | 1          | 2          | 3          |

2. Greedy

    遍歷 `gas` 每個站，累加油量差值 (`gas[i] - cost[i]`)。只要目前油箱 `tank` 變成負的，代表從當前起點一定走不到下一站，直接把起點 `start` 改成下一個站重新來。最後只要整體油量 `total` 夠，代表後面剩下的這段由量能補回前面的失敗段，從 `start` 出發保證能完成一圈。

    Solution: 👉 [code](../codes/134_gas_station.js)
