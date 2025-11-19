/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    const map = new Map();

    for (let char of ransomNote) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    for (let char of magazine) {
        if (map.has(char)) {
            const count = map.get(char) - 1;

            if (count == 0) {
                map.delete(char);
            } else {
                map.set(char, count);
            }

            if (map.size == 0) {
                return true;
            }
        }
    }

    return map.size == 0;
};
