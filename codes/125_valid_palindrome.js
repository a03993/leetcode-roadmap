/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let i = 0;
    let j = s.length - 1;

    function isAlphanumeric(char) {
        const code = char.charCodeAt(0);

        return (
            (code >= 48 && code <= 57) || //0-9
            (code >= 65 && code <= 90) || //A-Z
            (code >= 97 && code <= 122) //a-z
        );
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
