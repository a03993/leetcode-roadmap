/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
    const len = citations.length;
    const count = new Array(len + 1).fill(0);

    for (let c of citations) {
        if (c >= len) {
            count[len]++;
        } else {
            count[c]++;
        }
    }

    let total = 0;

    for (let i = len; i >= 0; i--) {
        total += count[i];

        if (total >= i) {
            return i;
        }
    }

    return 0;
};
