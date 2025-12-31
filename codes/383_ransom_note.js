/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    const map = new Map();

    for (let i = 0; i < ransomNote.length; i++) {
        const char = ransomNote[i];

        if (map.has(char)) {
            map.set(char, map.get(char) + 1);
        } else {
            map.set(char, 1);
        }
    }

    for (let i = 0; i < magazine.length; i++) {
        const char = magazine[i];

        if (map.has(char)) {
            map.set(char, map.get(char) - 1);
        }

        if (map.get(char) === 0) {
            map.delete(char);
        }
    }

    return map.size === 0;
};
