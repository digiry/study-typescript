import { describe, expect, test } from '@jest/globals';

function sum(a: number, b: number): number {
  return a + b;
}

describe('test function', () => {
  test('1 + 2 to equals 3', () => {
    expect(sum(10, 20)).toBe(30);
  });
});

function add(): number {
  return 10;
}

describe('test add function', () => {
  test('call add', () => {
    expect(add()).toBe(10);
  });
});