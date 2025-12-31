/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    const arr = s.split(" ");

    if (pattern.length !== arr.length) {
        return false;
    }

    const map1 = new Map();
    const map2 = new Map();

    for (let i = 0; i < arr.length; i++) {
        const char1 = pattern[i];
        const char2 = arr[i];

        if (map1.has(char1) && char2 !== map1.get(char1)) {
            return false;
        } else {
            map1.set(char1, char2);
        }

        if (map2.has(char2) && char1 !== map2.get(char2)) {
            return false;
        } else {
            map2.set(char2, char1);
        }
    }

    return true;
};
