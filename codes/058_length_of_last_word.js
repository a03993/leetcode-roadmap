/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let length = 0;
    let started = false;

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] != " ") {
            length += 1;
            started = true;
        } else if (started) {
            break;
        }
    }

    return length;
};
