const fs = require("fs");
const path = require("path");

function getLevelCounts({ notesDir }) {
    const counts = {
        Easy: 0,
        Medium: 0,
        Hard: 0,
        Total: 0,
    };

    const readmeFiles = fs.readdirSync(notesDir);

    readmeFiles.forEach((file) => {
        const readmePath = path.join(notesDir, file);
        const content = fs.readFileSync(readmePath, "utf-8");
        const match = content.match(/!\[(Easy|Medium|Hard)\]/);

        if (match) {
            const level = match[1];
            counts[level]++;
            counts.Total++;
        }
    });

    return counts;
}

module.exports = { getLevelCounts };
