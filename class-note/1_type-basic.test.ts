import { describe, expect, test } from '@jest/globals';

describe('tuple test', () => {
  test('access tuple data', () => {
    let address: [string, number] = ['gangnam', 100];
    expect(address[0]).toEqual('gangnam');
    expect(address[1]).toEqual(100);
  });
});

describe('ts object test', () => {
  test('access property of person object', () => {
    let person: { name: string, age: number } = {
      name: 'capt',
      age: 100,
    };
    expect(person.name).toEqual('capt');
    expect(person.age).toEqual(100);
  });
});

describe('ts object test2', () => {
  test('fail to access invalid property of person object', () => {
    let person: { name: string, age: number } = {
      name: 'capt',
      age: 100,
    };
    expect({fullname: "capt park"}).toEqual(expect.not.objectContaining(person));
  });
});

describe('ts boolean test', () => {
  test('access boolean', () => {
    let show: boolean = true;

    expect(show).toBeTruthy();
  });
});