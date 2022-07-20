import { FIBONACCI_CACHE, fibonacciIterative, fibonacciRecursive, fibonacciRecursiveMemoized } from '../../../algos/recursive/fibonacci';

export const EXPECTED_FIBONACCI_SEQ = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

describe('fibonacciRecursive', () => {
  it('should return the correct value', () => {
    for (let i = 0; i < EXPECTED_FIBONACCI_SEQ.length; i++) {
      expect(fibonacciRecursive(i)).toBe(EXPECTED_FIBONACCI_SEQ[i]);
    }
  });
});

describe('fibonacciIterative', () => {
  it('should return the correct value', () => {
    for (let i = 0; i < EXPECTED_FIBONACCI_SEQ.length; i++) {
      expect(fibonacciIterative(i)).toBe(EXPECTED_FIBONACCI_SEQ[i]);
    }
  });
});

describe('fibonacciRecursiveMemoized', () => {
  it('should return the correct value', () => {
    expect(Object.keys(FIBONACCI_CACHE).length).toBe(0);

    for (let i = 0; i < EXPECTED_FIBONACCI_SEQ.length; i++) {
      expect(fibonacciRecursiveMemoized(i)).toBe(EXPECTED_FIBONACCI_SEQ[i]);
    }

    expect(Object.keys(FIBONACCI_CACHE).length).toBe(EXPECTED_FIBONACCI_SEQ.length);

    for (let i = 0; i < EXPECTED_FIBONACCI_SEQ.length; i++) {
      expect(fibonacciRecursiveMemoized(i)).toBe(EXPECTED_FIBONACCI_SEQ[i]);
    }

    expect(Object.keys(FIBONACCI_CACHE).length).toBe(EXPECTED_FIBONACCI_SEQ.length);
  });
});
