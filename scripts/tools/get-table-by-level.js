const fs = require("fs");
const path = require("path");

const { parseFilename } = require("./parse-filename");

function getTableByLevel(level, formatTitle, codesDir, notesDir) {
    const codeFiles = fs
        .readdirSync(codesDir)
        .filter((file) => file.endsWith(".js"))
        .sort();

    const rows = [];

    codeFiles.forEach((file) => {
        const fileName = path.parse(file).name;
        const parsed = parseFilename(fileName);

        if (!parsed) {
            // Already warned in getTable
            return;
        }

        const { num, slug } = parsed;
        const title = formatTitle(slug);

        const noteFile = `${fileName}.md`;
        const notePath = path.join(notesDir, noteFile);

        const content = fs.readFileSync(notePath, "utf-8");
        const levelBadge = `![${level}]`;

        if (content.includes(levelBadge)) {
            const codeLink = `[Link](../codes/${file})`;
            const noteLink = `[Link](../notes/${noteFile})`;

            rows.push(`| ${parseInt(num, 10)} | ${title} | ${codeLink} | ${noteLink} |`);
        }
    });

    if (rows.length === 0) {
        return { table: "" };
    }

    const header = "| No. | Problem | Code | Note |\n|-----|---------|------|------|";
    const table = `${header}\n${rows.join("\n")}\n`;

    return { table };
}

module.exports = { getTableByLevel };
