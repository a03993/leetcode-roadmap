/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    const vals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    let str = "";

    for (let i = 0; i < vals.length; i++) {
        while (num >= vals[i]) {
            num -= vals[i];
            str += romans[i];
        }
    }

    return str;
};
