# 155 Min Stack

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Medium](https://img.shields.io/badge/Medium-ffb800?style=flat-square)

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the `MinStack` class:

- `MinStack()` initializes the stack object.
- `void push(int val)` pushes the element `val` onto the stack.
- `void pop()` removes the element on the top of the stack.
- `int top()` gets the top element of the stack.
- `int getMin()` retrieves the minimum element in the stack.

You must implement a solution with `O(1)` time complexity for each function.

**Example:**

```java
Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top(); // return 0
// minStack.getMin(); // return -2
```

**Constraints:**

- `-2³¹ <= val <= 2³¹ - 1`
- Methods `pop`, `top` and `getMin` operations will always be called on non-empty stacks.
- At most `3 * 10⁴` calls will be made to `push`, `pop`, `top`, and `getMin`.

**Note:**

| Algorithm | Time Complexity | Space Complexity |
| --------- | --------------- | ---------------- |
| Stack     | O(1)            | O(n)             |

- `MinStack()` 用 `stack` 來儲存所有元素、用 `minStack` 來同步紀錄當下的最小值
- `push(val)`
    - 把 `val` push 到 `stack` 中
    - 先判斷 `minStack` 的長度，如果為 0 就直接 push `val`，不為 0 就要比較其最後一項的值和 `val`，push 比較小的進去
- `pop()` 用 pop() 把 `stack` 和 `minStack` 的最後一項移除
- `top()` 回傳 `stack` 最後一項
- `getMin()` 回傳 `minStack` 最後一項
