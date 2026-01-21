const fs = require("fs");
const { readmePath, codesDir, notesDir } = require("./tools/config");
const { formatTitle } = require("./tools/format-title");
const { getLevelCounts } = require("./tools/get-level-counts");
const { getTable } = require("./tools/get-table");

const LINK = {
    easy: "./level/easy.md",
    medium: "./level/medium.md",
    hard: "./level/hard.md",
    total: "#",
};

function main() {
    const { table } = getTable(formatTitle, codesDir, notesDir);

    const level = getLevelCounts({ notesDir });
    const levelContent = `[![Easy](https://img.shields.io/badge/${level.Easy}-Easy-1cb8b8?style=flat-square)](${LINK.easy}) [![Medium](https://img.shields.io/badge/${level.Medium}-Medium-ffb800?style=flat-square)](${LINK.medium}) [![Hard](https://img.shields.io/badge/${level.Hard}-Hard-ff2d20?style=flat-square)](${LINK.hard}) [![Total](https://img.shields.io/badge/${level.Total}-Total-4c1?style=flat-square)](${LINK.total})`;

    if (!table) {
        console.warn("⚠️ Nothing in README.md");
        return;
    }

    try {
        const readmeContent = `# LeetCode Roadmap \n\n ${levelContent} \n\n ${table}`;

        fs.writeFileSync(readmePath, readmeContent, "utf-8");

        console.log("README.md ✅");
    } catch (err) {
        console.error("❌ README.md:", err);
    }
}

main();
