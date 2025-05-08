import { describe, it, expect } from 'vitest';
import { evaluateTokens } from '../src/calculator';

describe('evaluateTokens', () => {
  it('should correctly process numbers and operators', () => {
    const tokens = [3, 4, '+'];
    const stack: number[] = [];
    const result = evaluateTokens(tokens, stack);
    expect(result).toEqual([7]);
  });

  it('should handle multiple operations in sequence', () => {
    const tokens = [3, 4, '+', 2, '*'];
    const stack: number[] = [];
    const result = evaluateTokens(tokens, stack);
    expect(result).toEqual([14]);
  });

  it('should throw error for invalid token', () => {
    const tokens = [3, 4, '&'];
    const stack: number[] = [];
    expect(() => evaluateTokens(tokens, stack)).toThrowError(`Invalid operator "&"`);
  });

  it('should throw error if there are insufficient operands', () => {
    const tokens = [3, '+'];
    const stack: number[] = [];
    expect(() => evaluateTokens(tokens, stack)).toThrowError("Not enough values in the stack for the operation");
  });

  it('should handle division by zero', () => {
    const tokens = [6, 0, '/'];
    const stack: number[] = [];
    expect(() => evaluateTokens(tokens, stack)).toThrowError("Cannot divide by zero!");
  });
});
