/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let start = 0;

    while (start <= haystack.length - needle.length) {
        if (haystack[start] !== needle[0]) {
            start++;
        } else {
            let curr = 1;

            while (curr < needle.length && haystack[start + curr] == needle[curr]) {
                curr++;
            }

            if (curr == needle.length) {
                return start;
            }

            start++;
        }
    }

    return -1;
};
