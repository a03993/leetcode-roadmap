const fs = require("fs");
const path = require("path");

const { parseFilename } = require("./parse-filename");

const LEVELS = ["Easy", "Medium", "Hard"];

function checkLevelBadge(codesDir, notesDir, formatTitle) {
    let isValid = true;

    const codeFiles = fs
        .readdirSync(codesDir)
        .filter((file) => file.endsWith(".js"))
        .sort();

    codeFiles.forEach((file) => {
        const fileName = path.parse(file).name;
        const parsed = parseFilename(fileName);

        if (!parsed) {
            // Already warned in getTable
            return;
        }

        const noteFile = `${fileName}.md`;
        const notePath = path.join(notesDir, noteFile);

        if (!fs.existsSync(notePath)) {
            // Already warned in getTable
            return;
        }

        const content = fs.readFileSync(notePath, "utf-8");
        const hasBadge = LEVELS.some((level) => content.includes(`![${level}]`));

        if (!hasBadge) {
            console.warn(`⚠️ ${noteFile} does not contain a level badge.`);

            isValid = false;
        }
    });

    return isValid;
}

module.exports = { checkLevelBadge };
