/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let start = 0;

    while (start <= haystack.length - needle.length) {
        if (haystack[start] != needle[0]) {
            start++;
        } else {
            let matched = 1;

            while (matched < needle.length && haystack[start + matched] == needle[matched]) {
                matched++;
            }

            if (matched == needle.length) {
                return start;
            }

            start++;
        }
    }
    return -1;
};
