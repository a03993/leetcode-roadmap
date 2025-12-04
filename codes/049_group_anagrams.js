/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const map = new Map();
    let groups = [];

    for (let i = 0; i < strs.length; i++) {
        const key = strs[i].split("").sort().join("");

        if (map.has(key)) {
            const index = map.get(key);
            groups[index].push(strs[i]);
        } else {
            map.set(key, map.size);
            groups.push([strs[i]]);
        }
    }

    return groups;
};
