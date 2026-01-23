/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let start = 0;
    let end = 0;
    let maxLen = 0;

    const set = new Set();

    while (end < s.length) {
        if (set.has(s[end])) {
            set.delete(s[start]);
            start++;
        } else {
            set.add(s[end]);
            end++;
            maxLen = Math.max(maxLen, end - start);
        }
    }

    return maxLen;
};
