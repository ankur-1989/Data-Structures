// we will go from right to left using stack

function evaluatePrefix(exp) {
  const stack = [];
  let operand1, operand2;
  const operators = new Set(["*", "/", "+", "-", "^"]);
  for (let i = exp.length - 1; i >= 0; i--) {
    if (operators.has(exp[i])) {
      operand1 = +stack.pop();
      operand2 = +stack.pop();
      switch (exp[i]) {
        case "+":
          stack.push(operand1 + operand2);
          break;
        case "-":
          stack.push(operand1 - operand2);
          break;
        case "*":
          stack.push(operand1 * operand2);
          break;
        case "/":
          stack.push(operand1 / operand2);
          break;
        case "^":
          stack.push(operand1 ^ operand2);
          break;
      }
    } else {
      stack.push(exp[i]);
    }
  }
  return stack;
}

console.log(evaluatePrefix("-+*23*549"));
