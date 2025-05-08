const validOperators = ["+", "-", "*", "/"];

export function applyOperator(operator: string, stack: number[]): number {
  if (stack.length < 2) {
    throw new Error("Not enough values in the stack for the operation");
  }

  if (!validOperators.includes(operator)) {
    throw new Error(`Invalid operator: ${operator}`);
  }

  const num2 = stack.pop()!;
  const num1 = stack.pop()!;

  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) throw new Error("Cannot divide by zero!");
      return num1 / num2;
    default:
      throw new Error(`Invalid operator: ${operator}`);
  }
}
