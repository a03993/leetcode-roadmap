/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const map = new Map();
    const res = [];

    for (let i = 0; i < strs.length; i++) {
        const str = strs[i].split("").sort().join("");

        if (map.has(str)) {
            const index = map.get(str);
            res[index].push(strs[i]);
        } else {
            map.set(str, map.size);
            res.push([strs[i]]);
        }
    }

    return res;
};
