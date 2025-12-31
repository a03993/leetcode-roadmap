/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let len = 0;
    let start = false;

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== " ") {
            start = true;
        }

        if (start) {
            if (s[i] === " ") {
                return len;
            } else {
                len++;
            }
        }
    }

    return len;
};
