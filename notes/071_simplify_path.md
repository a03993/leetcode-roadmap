# 71 Simplify Path

![Top Interview 150](https://img.shields.io/badge/Top_Interview_150-6CC644?style=flat-square)
![Medium](https://img.shields.io/badge/Medium-ffb800?style=flat-square)

You are given an absolute path for a Unix-style file system, which always begins with a slash `'/'`. Your task is to transform this absolute path into its **simplified canonical path**.

The _rules_ of a Unix-style file system are as follows:

- A single period `'.'` represents the current directory.
- A double period `'..'` represents the previous/parent directory.
- Multiple consecutive slashes such as `'//'` and `'///'` are treated as a single slash `'/'`.
- Any sequence of periods that does **not match** the rules above should be treated as a **valid directory or file name**. For example, `'...'` and `'....'` are valid directory or file names.

The simplified canonical path should follow these rules:

- The path must start with a single slash `'/'`.
- Directories within the path must be separated by exactly one slash `'/'`.
- The path must not end with a slash `'/'`, unless it is the root directory.
- The path must not have any single or double periods (`'.'` and `'..'`) used to denote current or parent directories.

Return the **simplified canonical path**.

**Example:**

```java
Input: path = "/home/"
Output: "/home"
// Explanation: The trailing slash should be removed.
```

```java
Input: path = "/home//foo/"
Output: "/home/foo"
// Explanation: Multiple consecutive slashes are replaced by a single one.
```

```java
Input: path = "/home/user/Documents/../Pictures"
Output: "/home/user/Pictures"
// Explanation: A double period ".." refers to the directory up a level (the parent directory).
```

```java
Input: path = "/../"
Output: "/"
// Explanation: Going one level up from the root directory is not possible.
```

```java
Input: path = "/.../a/../b/c/../d/./"
Output: "/.../b/d"
// Explanation: "..." is a valid name for a directory in this problem.
```

**Constraints:**

- `1 <= path.length <= 3000`
- `path` consists of English letters, digits, period `'.'`, slash `'/'` or '\_'.
- `path` is a valid absolute Unix path.

**Note:**

- `/` 是起點
- 多個 `/` (e.g., `//`, `///`) 當成一個 `/`
- `.` 表示「當前目錄」，可以忽略
- `..` 表示「回上一層目錄」，要把前一個目錄移掉

| Algorithm | Time Complexity | Space Complexity |
| --------- | --------------- | ---------------- |
| Stack     | O(n)            | O(n)             |

用堆疊法，先用 `/` 分割字串 `path` 並存在陣列 `parts`，然後建立一個空陣列 `stack`，逐字遍歷 `parts`，遇到空字串 `""` 或 `"."`，代表為當前目錄，直接略過；遇到 `".."`，代表回到上層目錄，如果 `stack` 不為空就用 `stack.pop()` 移除最後一個元素；其他有效字串就 `stack.push()` 新增元素，遍歷完 `stack` 後把所有的元素用 `/` 連接起來。
