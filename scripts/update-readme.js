const fs = require("fs");
const path = require("path");

const codesDir = path.join(__dirname, "../codes");
const notesDir = path.join(__dirname, "../notes");
const readmePath = path.join(__dirname, "../README.md");

// 取得 codes 資料夾檔案
const codeFiles = fs
  .readdirSync(codesDir)
  .filter((file) => file.endsWith(".js"))
  .sort(); // 按檔名排序

let table = `| No. | Problem | Code | Note |\n|-----|---------|------|------|\n`;

codeFiles.forEach((file) => {
  const fileName = path.parse(file).name; // 001_two_sum
  const match = fileName.match(/^(\d+)_([\w_]+)$/);

  if (!match) {
    console.warn(`Filename "${file}" does not match "NNN_problem_name.js" format`);
    return;
  }

  const [_, num, problemSlug] = match; // num = "001", problemSlug = "two_sum"

  // 將 problemSlug 轉成 Title Case
  const title = problemSlug
    .split("_")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");

  const codeLink = `[Link](codes/${file})`;
  const noteFile = `${num}_${problemSlug}.md`;
  const noteLink = fs.existsSync(path.join(notesDir, noteFile)) ? `[Link](notes/${noteFile})` : "";

  table += `| ${parseInt(num, 10)} | ${title} | ${codeLink} | ${noteLink} |\n`;
});

// 將表格寫入 README.md
const readmeContent = `# LeetCode Roadmap

A roadmap of my LeetCode learning journey, tracking problems I've solved, my code, and the insights I gained along the way.

${table}
`;

fs.writeFileSync(readmePath, readmeContent, "utf-8");
console.log("README.md updated successfully!");
