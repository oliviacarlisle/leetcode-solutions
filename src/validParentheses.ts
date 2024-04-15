/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s: string): boolean {
  const stack: string[] = [];
  const matches: { [key: string]: string } = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (Object.hasOwn(matches, char)) {
      // push the closing character to the stack
      stack.push(matches[char]);
    } else {
      // closing char
      const last = stack[stack.length - 1];
      if (matches[last] === char) stack.pop();
      else return false;
    }
  }

  return stack.length ? false : true;
};
