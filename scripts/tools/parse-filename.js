function parseFilename(fileName) {
    const match = fileName.match(/^(\d+)_(\w+)$/);

    if (!match) {
        return null;
    }

    const [_, num, slug] = match;

    return { num, slug };
}

module.exports = { parseFilename };
