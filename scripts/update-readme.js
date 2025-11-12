const fs = require("fs");
const path = require("path");

const codesDir = path.join(__dirname, "../codes");
const notesDir = path.join(__dirname, "../notes");
const readmePath = path.join(__dirname, "../README.md");

const codeFiles = fs
    .readdirSync(codesDir)
    .filter((file) => file.endsWith(".js"))
    .sort();

let table = `| No. | Problem | Code | Note |\n|-----|---------|------|------|\n`;

codeFiles.forEach((file) => {
    const fileName = path.parse(file).name;
    const match = fileName.match(/^(\d+)_([\w_]+)$/);

    if (!match) {
        console.warn(`Filename "${file}" does not match "NNN_problem_name.js" format`);
        return;
    }

    const [_, num, problemSlug] = match;

    const minorWords = [
        "a",
        "an",
        "the",
        "and",
        "but",
        "or",
        "for",
        "nor",
        "on",
        "at",
        "to",
        "from",
        "by",
        "in",
        "with",
        "of",
    ];

    const title = problemSlug
        .split("_")
        .map((s, index) => {
            if (s == s.toUpperCase()) {
                return s;
            }

            if (index != 0 && minorWords.includes(s.toLowerCase())) {
                return s.toLowerCase();
            }

            return s.charAt(0).toUpperCase() + s.slice(1);
        })
        .join(" ");

    const codeLink = `[Link](codes/${file})`;
    const noteFile = `${num}_${problemSlug}.md`;
    const noteLink = fs.existsSync(path.join(notesDir, noteFile))
        ? `[Link](notes/${noteFile})`
        : "";

    table += `| ${parseInt(num, 10)} | ${title} | ${codeLink} | ${noteLink} |\n`;
});

const readmeContent = `# LeetCode Roadmap

A roadmap of my LeetCode learning journey, tracking problems I've solved, my code, and the insights I gained along the way.

${table}
`;

try {
    fs.writeFileSync(readmePath, readmeContent, "utf-8");
    console.log("README.md updated successfully!");
} catch (err) {
    console.error("Failed to update README.md:", err);
}
