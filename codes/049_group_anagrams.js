/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const map = new Map();
    const groups = [];

    for (let i = 0; i < strs.length; i++) {
        const str = strs[i].split("").sort().join("");

        if (map.has(str)) {
            const j = map.get(str);
            groups[j].push(strs[i]);
        } else {
            map.set(str, map.size);
            groups.push([strs[i]]);
        }
    }

    return groups;
};
