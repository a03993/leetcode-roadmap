const fs = require("fs");
const path = require("path");

function getTable(formatTitle, codesDir, notesDir) {
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
            console.warn(`⚠️ Filename "${file}" does not match "NNN_problem_name.js" format`);
            return;
        }

        const [_, num, slug] = match;
        const title = formatTitle(slug);
        const codeLink = `[Link](codes/${file})`;

        const noteFile = `${fileName}.md`;
        const notePath = path.join(notesDir, noteFile);
        let noteLink = "";

        if (fs.existsSync(notePath)) {
            noteLink = `[Link](notes/${noteFile})`;
        } else {
            console.warn(`⚠️ Note file for "${title}" not found or filename mismatch.`);
        }

        table += `| ${parseInt(num, 10)} | ${title} | ${codeLink} | ${noteLink} |\n`;
        count++;
    });

    return { table, count };
}

module.exports = { getTable };
