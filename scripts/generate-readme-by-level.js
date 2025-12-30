const fs = require("fs");
const path = require("path");
const { levelDir, codesDir, notesDir } = require("./tools/config");
const { formatTitle } = require("./tools/format-title");
const { getLevelCounts } = require("./tools/get-level-counts");
const { getTableByLevel } = require("./tools/get-table-by-level");

const LEVELS = ["Easy", "Medium", "Hard"];

const LINK = {
    Easy: "./easy.md",
    Medium: "./medium.md",
    Hard: "./hard.md",
    Total: "../README.md",
};

function main() {
    const level = getLevelCounts({ notesDir });
    const levelContent = `[![Easy](https://img.shields.io/badge/${level.Easy}-Easy-1cb8b8?style=flat-square)](${LINK.Easy}) [![Medium](https://img.shields.io/badge/${level.Medium}-Medium-ffb800?style=flat-square)](${LINK.Medium}) [![Hard](https://img.shields.io/badge/${level.Hard}-Hard-ff2d20?style=flat-square)](${LINK.Hard}) [![Total](https://img.shields.io/badge/${level.Total}-Total-4c1?style=flat-square)](${LINK.Total})`;
    LEVELS.forEach((level) => {
        const { table, count } = getTableByLevel(level, formatTitle, codesDir, notesDir);

        if (count == 0) {
            console.warn(`Warning: No files for level "${level}" were processed.`);
            return;
        }

        try {
            const readmePath = path.join(levelDir, `${level.toLowerCase()}.md`);
            const readmeContent = `# LeetCode Roadmap \n\n ${levelContent} \n\n ${table}`;

            fs.writeFileSync(readmePath, readmeContent, "utf-8");

            console.log(`${level.toLowerCase()}.md ✅`);
        } catch (err) {
            console.error(`❌ Failed to update ${level.toLowerCase()}.md:`, err);
        }
    });
}

main();
