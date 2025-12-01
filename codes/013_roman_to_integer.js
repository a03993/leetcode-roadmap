/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    let sum = 0;

    for (let i = 0; i < s.length; i++) {
        const curr = map[s[i]];
        const prev = i > 0 ? map[s[i - 1]] : 0;

        if (prev < curr) {
            sum += curr - prev * 2;
        } else {
            sum += curr;
        }
    }

    return sum;
};
