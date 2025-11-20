/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    const word = s.split(" ");

    if (pattern.length != word.length) {
        return false;
    }

    const patternMap = new Map();
    const wordMap = new Map();

    for (let i = 0; i < pattern.length; i++) {
        if (patternMap.has(pattern[i])) {
            if (patternMap.get(pattern[i]) != word[i]) {
                return false;
            }
        }

        if (wordMap.has(word[i])) {
            if (wordMap.get(word[i]) != pattern[i]) {
                return false;
            }
        }

        patternMap.set(pattern[i], word[i]);
        wordMap.set(word[i], pattern[i]);
    }

    return true;
};
