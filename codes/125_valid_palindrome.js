/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let i = 0;
    let j = s.length - 1;

    function isAlphanumeric(ch) {
        return /^[a-zA-Z0-9]$/.test(ch);
    }

    while (i < j) {
        while (i < j && !isAlphanumeric(s[i])) {
            i++;
        }

        while (i < j && !isAlphanumeric(s[j])) {
            j--;
        }

        if (s[i].toLowerCase() != s[j].toLowerCase()) {
            return false;
        }

        i++;
        j--;
    }

    return true;
};
