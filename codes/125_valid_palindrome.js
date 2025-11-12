/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let i = 0;
    let j = s.length - 1;

    while (i < j) {
        while (i < j && !/[a-z0-9]/i.test(s[i])) {
            i++;
        }

        while (i < j && !/[a-z0-9]/i.test(s[j])) {
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
