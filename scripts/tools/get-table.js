const fs = require("fs");
const path = require("path");

const { parseFilename } = require("./parse-filename");

function getTable(formatTitle, codesDir, notesDir) {
    const codeFiles = fs
        .readdirSync(codesDir)
        .filter((file) => file.endsWith(".js"))
        .sort();

    const rows = [];

    codeFiles.forEach((file) => {
        const fileName = path.parse(file).name;
        const parsed = parseFilename(fileName);

        if (!parsed) {
            console.warn(`⚠️ Filename "${file}" does not match "NNN_problem_name.js" format`);
            return;
        }

        const { num, slug } = parsed;
        const title = formatTitle(slug);

        const codeLink = `[Link](codes/${file})`;
        let noteLink = "";

        const noteFile = `${fileName}.md`;
        const notePath = path.join(notesDir, noteFile);

        if (fs.existsSync(notePath)) {
            noteLink = `[Link](notes/${noteFile})`;
        } else {
            console.warn(`⚠️ ${noteFile} is not found.`);
        }

        rows.push(`| ${parseInt(num, 10)} | ${title} | ${codeLink} | ${noteLink} |`);
    });

    if (rows.length === 0) {
        return { table: "" };
    }

    const header = "| No. | Problem | Code | Note |\n|-----|---------|------|------|";
    const table = `${header}\n${rows.join("\n")}\n`;

    return { table };
}

module.exports = { getTable };
