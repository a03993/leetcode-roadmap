/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 1) {
        return s;
    }

    const rows = [];
    let curRow = 0;
    let goingDown = false;

    for (let i = 0; i < numRows; i++) {
        rows.push("");
    }

    for (let i = 0; i < s.length; i++) {
        rows[curRow] += s[i];

        if (curRow === 0 || curRow === numRows - 1) {
            goingDown = !goingDown;
        }

        if (goingDown) {
            curRow++;
        } else {
            curRow--;
        }
    }

    return rows.join("");
};
