/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length != t.length) {
        return false;
    }

    const map = new Map();

    for (let char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    for (let char of t) {
        if (map.has(char)) {
            const count = map.get(char) - 1;

            if (count == 0) {
                map.delete(char);
            } else {
                map.set(char, count);
            }
        }
    }

    return map.size == 0;
};
