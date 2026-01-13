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
| Set       | O(n)            | O(n)             |
| HashMap   | O(1) ✅         | O(n)             |

題目要求實作一個名為 `RandomizedSet` 資料結構，要支援 `insert`, `remove`, `getRandom` 三個操作:

- `new RandomizedSet()`: 創建一個集合
- `RandomizedSet.insert(val)`: 若 `val` 存在於集合則直接回傳 false，不存在則加入集合並回傳 true
- `RandomizedSet.remove(val)`: 若 `val` 不存在於集合則直接回傳 false，存在則從集合中移除並回傳 true
- `RandomizedSet.getRandom()`: 隨機回傳集合中的一個元素，每個元素被回傳的機率必須相同

1. Array

    用一個陣列 `nums` 儲存集合元素，`insert(val)` 檢查陣列是否已包含 `val`，若沒有就加入陣列；`remove(val)` 找出 `val` 的 index，若存在就從陣列中刪除；`getRandom()` 隨機產生一個索引，返回陣列中對應元素。

    `insert(val)` 和 `remove(val)` 都需要遍歷陣列來檢查或刪除元素，因此的時間複雜度都是 O(n)，不符合題目要求。

    ```js
    var RandomizedSet = function () {
        this.nums = [];
    };

    RandomizedSet.prototype.insert = function (val) {
        if (this.nums.includes(val)) {
            return false;
        }

        this.nums.push(val);
        return true;
    };

    RandomizedSet.prototype.remove = function (val) {
        const idx = this.nums.indexOf(val);

        if (idx === -1) {
            return false;
        }

        this.nums.splice(idx, 1);
        return true;
    };

    RandomizedSet.prototype.getRandom = function () {
        const randomIndex = Math.floor(Math.random() * this.num.length);
        return this.nums[randomIndex];
    };
    ```

2. Set

    用一個 Set 儲存元素，`insert(val)` 利用 `set.has()` 檢查是否存在，若不存在就加入，返回 true；`remove(val)` 利用 `set.has()` 檢查是否存在，若存在就刪除，返回 true；`getRandom()` 先把 Set 轉成陣列，然後隨機取一個索引返回對應元素。

    `getRandom()` 因為每次都要把 Set 轉成陣列，時間複雜度是 O(n)，不符合題目要求。

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
        const arr = Array.from(this.set);
        const randomIndex = Math.floor(Math.random() * this.num.length);
        return this.nums[randomIndex];
    };
    ```

3. Hash Map

    用一個陣列 `nums` 儲存元素，並用一個 Map 記錄元素對應的 index，`insert(val)` 利用 `map.has()` 檢查是否存在，若不存在就加入，返回 true；`remove(val)` 先找到 `val` 的 index，把陣列最後一個元素搬到這個位置，更新 Map 中最後一個元素的 index，再刪除陣列尾端元素與 Map 中的 `val`，返回 true；`getRandom()` 隨機生成一個索引，返回陣列中對應元素。

    Solution: 👉 [code](../codes/380_insert_delete_getRandom_o_1.js)
