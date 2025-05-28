const validParentheses = (str: string) => {
  const stack: string[] = [];
  const map = new Map<string, string>([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ]);
  for (const s of str) {
    if (s == "(" || s == "{" || s == "[") {
      stack.push(s);
    } else {
      const top = stack.pop();
      if (top !== map.get(s)) {
        return false;
      }
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
