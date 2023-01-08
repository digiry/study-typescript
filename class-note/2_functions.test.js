"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
function sum(a, b) {
    return a + b;
}
describe('test function', function () {
    it('1 + 2 to equals 3', function () {
        (0, chai_1.expect)(sum(10, 20)).to.equal(30);
    });
});
function add() {
    return 10;
}
describe('test add function', function () {
    it('call add', function () {
        (0, chai_1.expect)(add()).to.equal(10);
    });
});
function sum2(a, b) {
    if (b === undefined) {
        return a;
    }
    return a + b;
}
function add2(args) {
    return args.reduce(function (prev, curr) { return prev + curr; }, 0);
}
describe('test parameterized test', function () {
    var tests = [
        { args: [1, 2], expected: 3 },
        { args: [1, 2, 3], expected: 6 },
        { args: [1, 2, 3, 4], expected: 10 },
    ];
    tests.forEach(function (_a) {
        var args = _a.args, expected = _a.expected;
        it("correctly adds ".concat(args.length, " args"), function () {
            var res = add2(args);
            (0, chai_1.expect)(res).to.equal(expected);
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
//# sourceMappingURL=2_functions.test.js.map