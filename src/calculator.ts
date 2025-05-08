import { applyOperator } from './operations';

export function evaluateTokens(tokens: (string | number)[], stack: number[]): number[] {
  for (const token of tokens) {
    if (typeof token === "number") {
      stack.push(token);
    } else {
      const result = applyOperator(token, stack);
      stack.push(result);
    }
  }
  return stack;
}
