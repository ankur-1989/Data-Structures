function infixToPostFix(exp) {
  const stack = [];
  const operators = new Set(["+", "*", "-", "/", "^"]);

  let postfix = "";
  for (let i = 0; i < exp.length; i++) {
    if (operators.has(exp[i])) {
      while (
        stack.length > 0 &&
        !isOpenParanthesis(stack[stack.length - 1]) &&
        hasHigherPrecedence(exp[i], stack[stack.length - 1])
      ) {
        const top = stack.pop();
        postfix += top;
      }
      stack.push(exp[i]);
    } else if (isOpenParanthesis(exp[i])) {
      stack.push(exp[i]);
    } else if (isClosingParantheis(exp[i])) {
      while (stack.length > 0 && !isOpenParanthesis(stack[stack.length - 1])) {
        postfix += stack.pop();
      }
      stack.pop();
    } else {
      postfix += exp[i];
    }
  }
  while (stack.length > 0) {
    postfix += stack.pop();
  }
  return postfix;
}

const isOpenParanthesis = (chr) => {
  if (chr === "(" || chr === "[" || chr === "{") return true;
  return false;
};

const isClosingParantheis = (chr) => {
  if (chr === ")" || chr === "]" || chr === "}") return true;
  return false;
};

const hasHigherPrecedence = (incoming, stack) => {
  const operatorPrecedenceMap = {
    "*": ["*", "/", "+", "-"],
    "/": ["*", "/", "+", "-"],
    "+": ["+", "-"],
    "-": ["+", "-"],
  };

  if (operatorPrecedenceMap[stack].some((op) => op === incoming)) return true;
  return false;
};

console.log(infixToPostFix("((A+B)*C-D)*E"));
console.log(infixToPostFix("(A+B)*C"));
