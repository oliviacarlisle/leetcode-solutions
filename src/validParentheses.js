/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    const stack = [];
    const matches = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (matches[char]) { // opening char
            stack.push(char);
        } else { // closing char
            const last = stack[stack.length - 1];
            if (matches[last] === char) stack.pop();
            else return false;
        }
    }

    return stack.length ? false : true;
};