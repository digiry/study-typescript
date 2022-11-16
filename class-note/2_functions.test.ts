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

function sum2(a: number, b?: number): number {
  if (b === undefined) {
    return a;
  }
  return a + b;
}

describe('test optional parameter', () => {
  test.each([
    [[10,20], 30],
    [[10], 10],
  ])('call func with every parameter', (params: number[], result: number) => {
    let a: number;
    let b: number;
    [a, b] = params;
    expect(sum2(a, b)).toBe(result);
  });
});
