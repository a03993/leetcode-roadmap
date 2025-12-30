const fs = require("fs");
const path = require("path");

function getTableByLevel(level, formatTitle, codesDir, notesDir) {
    const codeFiles = fs
        .readdirSync(codesDir)
        .filter((file) => file.endsWith(".js"))
        .sort();

    if (codeFiles.length == 0) {
        console.warn("⚠️ No code files found.");
        return { table: "", count: 0 };
    }

    let table = "| No. | Problem | Code | Note |\n|-----|---------|------|------|\n";
    let count = 0;

    codeFiles.forEach((file) => {
        const fileName = path.parse(file).name;
        const match = fileName.match(/^(\d+)_(\w+)$/);

        if (!match) {
            return;
        }

        const [_, num, slug] = match;

        const noteFile = `${fileName}.md`;
        const notePath = path.join(notesDir, noteFile);

        const content = fs.readFileSync(notePath, "utf-8");
        const levelBadge = `![${level}]`;

        if (content.includes(levelBadge)) {
            const title = formatTitle(slug);
            const codeLink = `[Link](../codes/${file})`;
            const noteLink = `[Link](../notes/${noteFile})`;

            table += `| ${parseInt(num, 10)} | ${title} | ${codeLink} | ${noteLink} |\n`;
            count++;
        }
    });

    return { table, count };
}

module.exports = { getTableByLevel };
