import { expect } from 'chai';
import itParam from 'mocha-param';

function sum(a: number, b: number): number {
  return a + b;
}

describe('test function', () => {
  it('1 + 2 to equals 3', () => {
    expect(sum(10, 20)).to.equal(30);
  });
});

function add(): number {
  return 10;
}

describe('test add function', () => {
  it('call add', () => {
    expect(add()).to.equal(10);
  });
});

function sum2(a: number, b?: number): number {
  if (b === undefined) {
    return a;
  }
  return a + b;
}

function add2(args: number[]): number {
  return args.reduce((prev: number, curr: number) => prev + curr, 0);
}

describe('test parameterized test', () => {
  const tests = [
    { args: [1, 2], expected: 3 },
    { args: [1, 2, 3], expected: 6 },
    { args: [1, 2, 3, 4], expected: 10 },
  ];

  tests.forEach(({ args, expected }) => {
    it(`correctly adds ${args.length} args`, () => {
      const res: number = add2(args);
      expect(res).to.equal(expected);
    });
  });
});

// const myData = [
//   { params: [10, 20], result: 30 },
//   { params: [10], result: 10 },
// ];
// describe('test optional parameter', () => {
//   myData.forEach(({ params, result }) => {
//     it('call func with every parameter: ${result}', () => {
//       let aNumber: number;
//       let bNumber: number;

//       // eslint-disable-next-line prefer-const
//       [aNumber, bNumber] = params;
//       expect(sum2(aNumber, bNumber)).to.equal(result);
//     });
//   });
//   // itParam('call func with every parameter', myData, value => {
//   //   let a: number;
//   //   let b: number;
//   //   // eslint-disable-next-line prefer-const
//   //   [a, b] = value.params;
//   //   const result = value.result;

//   //   expect(sum2(a, b)).to.equal(result);
//   // });
//   // it.each([
//   //   [[10,20], 30],
//   //   [[10], 10],
//   // ])('call func with every parameter', (params: number[], result: number) => {
//   //   let a: number;
//   //   let b: number;
//   //   [a, b] = params;
//   //   expect(sum2(a, b)).to.be(result);
//   // });
// });
