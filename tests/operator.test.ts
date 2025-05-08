import { describe, it, expect } from 'vitest';
import { applyOperator } from '../src/operations';

describe('applyOperator', () => {
  it('should add two numbers correctly', () => {
    const stack = [3, 4];
    const result = applyOperator('+', stack);
    expect(result).toBe(7);
  });

  it('should subtract two numbers correctly', () => {
    const stack = [5, 3];
    const result = applyOperator('-', stack);
    expect(result).toBe(2);
  });

  it('should multiply two numbers correctly', () => {
    const stack = [3, 4];
    const result = applyOperator('*', stack);
    expect(result).toBe(12);
  });

  it('should divide two numbers correctly', () => {
    const stack = [6, 3];
    const result = applyOperator('/', stack);
    expect(result).toBe(2);
  });

  it('should throw error when dividing by zero', () => {
    const stack = [6, 0];
    expect(() => applyOperator('/', stack)).toThrowError("Cannot divide by zero!");
  });

  it('should throw error for invalid operators', () => {
    const stack = [3, 4];
    const invalid = "&"
    expect(() => applyOperator(invalid, stack)).toThrowError(`Invalid operator "${invalid}"`);
  });

  it('should throw error when there are not enough values on the stack', () => {
    const stack = [3];
    expect(() => applyOperator('+', stack)).toThrowError("Not enough values in the stack for the operation");
  });
});
