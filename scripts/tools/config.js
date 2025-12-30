const path = require("path");

const rootDir = path.join(__dirname, "../..");

const codesDir = path.join(rootDir, "codes");
const notesDir = path.join(rootDir, "notes");
const levelDir = path.join(rootDir, "level");
const readmePath = path.join(rootDir, "README.md");

module.exports = {
    codesDir,
    notesDir,
    levelDir,
    readmePath,
};
