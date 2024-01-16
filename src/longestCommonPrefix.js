/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
    let output = [];

    for (let i = 0; i < strs[0].length; i++) {
        let letter = strs[0][i];
        let count = 0;
        for (const word of strs) {
            if (word[i] === letter) count++;
            else break;
        }
        if (count === strs.length) output.push(letter);
        else break;
    }

    return output.join('');
};