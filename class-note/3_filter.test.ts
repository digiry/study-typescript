import { describe, test, expect } from '@jest/globals';

type MyUser = {
  gender: string;
  name: string;
};

const arr = [
  { gender: 'male', name: 'john' },
  { gender: 'female', name: 'sarah' },
  { gender: 'male', name: 'bone' },
];

describe('test filter', () => {
  test('filter data', () => {
    const filtered: Array<MyUser> = arr.filter(function (item) {
      if (item.gender === 'female') {
        return item;
      }
    });

    expect(filtered.length).toBe(1);
    expect(filtered[0]).toEqual({ gender: 'female', name: 'sarah' });
  });
});
