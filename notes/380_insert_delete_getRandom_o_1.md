# 380 Insert Delete GetRandom O(1)

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Medium](https://img.shields.io/badge/Medium-ffb800?style=flat-square)

Implement the `RandomizedSet` class:

- `RandomizedSet()` Initializes the `RandomizedSet` object.
- `bool insert(int val)` Inserts an item `val` into the set if not present. Returns `true` if the item was not present, `false` otherwise.
- `bool remove(int val)` Removes an item `val` from the set if present. Returns `true` if the item was present, `false` otherwise.
- `int getRandom()` Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the **same probability** of being returned.

You must implement the functions of the class such that each function works in **average** `O(1)` time complexity.

**Example:**

```java
Input:
["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
[[], [1], [2], [2], [], [1], [2], []]
Output:
[null, true, false, true, 2, true, false, 2]

// Explanation
// RandomizedSet randomizedSet = new `RandomizedSet()`;
// randomizedSet.insert(1); → Inserts 1 to the set. Returns true as 1 was inserted successfully.
// randomizedSet.remove(2); → Returns false as 2 does not exist in the set.
// randomizedSet.insert(2); → Inserts 2 to the set, returns true. Set now contains [1,2].
// randomizedSet.getRandom(); → getRandom() should return either 1 or 2 randomly.
// randomizedSet.remove(1); → Removes 1 from the set, returns true. Set now contains [2].
// randomizedSet.insert(2); → 2 was already in the set, so return false.
// randomizedSet.getRandom(); → Since 2 is the only number in the set, getRandom() will always return 2.
```

**Constraints:**

- `-2³¹ <= val <= 2³¹ - 1`
- At most `2 * 10⁵` calls will be made to `insert`, `remove`, and `getRandom`.
- There will be **at least one** element in the data structure when `getRandom` is called.

**Note:**

| Algorithm | Time Complexity | Space Complexity |
| --------- | --------------- | ---------------- |
| Array     | O(n)            | O(n)             |
| Hash Set  | O(n)            | O(n)             |
| Hash Map  | O(1) ✅         | O(n)             |

題目要求實作一個名為 `RandomizedSet` 資料結構，要支援 `insert`, `remove`, `getRandom` 三個操作:

- `new RandomizedSet()`: 創建一個集合
- `RandomizedSet.insert(val)`: 若 `val` 存在於集合則直接回傳 false，不存在則加入集合並回傳 true
- `RandomizedSet.remove(val)`: 若 `val` 不存在於集合則直接回傳 false，存在則從集合中移除並回傳 true
- `RandomizedSet.getRandom()`: 隨機回傳集合中的一個元素，每個元素被回傳的機率必須相同

1. Array
    - `RandomizedSet()` 用一個陣列 `nums` 儲存元素
    - `insert(val)` 遍歷 `nums`，如果沒有找到包含 `val` 的元素就加入陣列
    - `remove(val)` 遍歷 `nums`，如果有找到包含 `val` 的元素就從陣列中刪除
    - `getRandom()` 隨機產生一個索引，回傳陣列中對應元素

    ⚠️ `insert(val)` 和 `remove(val)` 都需要遍歷陣列來檢查或刪除元素，因此的時間複雜度都是 O(n)，**不符合題目要求**。

    ```js
    var RandomizedSet = function () {
        this.nums = [];
    };

    RandomizedSet.prototype.insert = function (val) {
        for (let i = 0; i < this.nums.length; i++) {
            if (this.nums[i] === val) {
                return false;
            }
        }

        this.nums.push(val);
        return true;
    };

    RandomizedSet.prototype.remove = function (val) {
        for (let i = 0; i < this.nums.length; i++) {
            if (this.nums[i] === val) {
                this.nums[i] = this.nums[this.nums.length - 1];
                this.nums.pop();
                return true;
            }
        }

        return false;
    };

    RandomizedSet.prototype.getRandom = function () {
        const randomIndex = Math.floor(Math.random() * this.nums.length);
        return this.nums[randomIndex];
    };
    ```

2. Hash Set
    - `RandomizedSet()` 用一個 set 儲存元素
    - `insert(val)` 用 `set.has()` 檢查 `val` 是否存在，如果不存在就加入
    - `remove(val)` 用 `set.has()` 檢查 `val` 是否存在，如果存在就刪除
    - `getRandom()` 先把 set 轉成陣列 `arr`，然後隨機取一個索引後回傳

    ⚠️ 但 `getRandom()` 每次都要把 set 轉成陣列，時間複雜度是 O(n)，**不符合題目要求**。

    ```js
    var RandomizedSet = function () {
        this.set = new Set();
    };

    RandomizedSet.prototype.insert = function (val) {
        if (this.set.has(val)) {
            return false;
        }

        this.set.add(val);
        return true;
    };

    RandomizedSet.prototype.remove = function (val) {
        if (!this.set.has(val)) {
            return false;
        }

        this.set.delete(val);
        return true;
    };

    RandomizedSet.prototype.getRandom = function () {
        const arr = [...this.set];
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    };
    ```

3. Hash Map
    - 用一個陣列 `nums` 儲存元素、一個 map 記錄元素和對應 index
    - `insert(val)` 用 `map.has()` 檢查 `val` 是否存在，若不存在：
        - 就加入 `nums`
        - 將 `val` 對應 `nums.length - 1` 儲存在 map 中
    - `remove(val)` 用 `map.has()` 檢查 `val` 是否存在，若是存在：
        - 把 `lastElement` (陣列最後一個元素) 覆寫 `val` 的位置
        - 更新 map 中 `lastElement` 對應的索引為當前的索引 `idx`
        - 用 `pop()` 刪除陣列尾端元素
        - 用 `map.delete` 刪除 map 中的 `val`
    - `getRandom()` 隨機生成一個索引，回傳陣列中對應元素。

    Solution: 👉 [code](../codes/380_insert_delete_getRandom_o_1.js)

    💡 先把 [最後一項] 覆寫到 [該項]，再用 `pop()` 移除最後一項，用 `splice()` 的話時間複雜度會是 O(n)
