/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    const arr = s.split(" ").filter((str) => str);
    let str = "";

    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];

        i++;
        j--;
    }

    return arr.join(" ");
};
