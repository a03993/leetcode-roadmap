/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    const words = s.split(" ");

    if (pattern.length != words.length) {
        return false;
    }

    const patternMap = new Map();
    const wordMap = new Map();

    for (let i = 0; i < pattern.length; i++) {
        if (!patternMap.has(pattern[i])) {
            patternMap.set(pattern[i], words[i]);
        }

        if (!wordMap.has(words[i])) {
            wordMap.set(words[i], pattern[i]);
        }

        if (patternMap.get(pattern[i]) != words[i] || wordMap.get(words[i]) != pattern[i]) {
            return false;
        }
    }

    return true;
};
