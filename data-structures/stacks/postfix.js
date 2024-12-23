function evaluatePostfix(exp) {
  const stack = [];
  let operand1, operand2;
  const operators = new Set(["*", "/", "+", "-", "^"]);
  for (let i = 0; i < exp.length; i++) {
    if (operators.has(exp[i])) {
      operand2 = +stack.pop();
      operand1 = +stack.pop();
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
console.log(evaluatePostfix("23*54*+9-"));
