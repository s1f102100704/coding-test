const validParentheses = (str: string) => {
  const stack: string[] = [];
  const map = new Map<string, string>([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ]);
  for (const s of str) {
    if (map.has(s)) {
      const top = stack.pop();
      if (map.get(s)! !== top) return false;
    } else {
      stack.push(s);
    }
  }
  if (stack.length == 0) {
    return true;
  }
  return false;
};
console.log(validParentheses("()"));
console.log(validParentheses("()[]{}"));
console.log(validParentheses("(]"));
console.log(validParentheses("([)]"));
console.log(validParentheses("{[]}"));
