import { applyOperator } from './operations';

export function evaluateTokens(tokens: (string | number)[], stack: number[]): number[] {
  for (const token of tokens) {
    const val = typeof token === "number" ? token : parseFloat(token);

    if (!isNaN(val)) {
      stack.push(val);
    } else {
      const result = applyOperator(String(token), stack);
      stack.push(result);
    }
  }
  return stack;
}
