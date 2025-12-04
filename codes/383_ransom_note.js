/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    const count = new Array(26).fill(0);

    for (let char of magazine) {
        const i = char.charCodeAt(0) - 97;
        count[i] += 1;
    }

    for (let char of ransomNote) {
        const i = char.charCodeAt(0) - 97;
        count[i] -= 1;

        if (count[i] < 0) {
            return false;
        }
    }

    return true;
};
