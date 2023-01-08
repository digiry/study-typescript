"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
function sum(x, y) {
    return x + y;
}
describe('index.ts 테스트', function () {
    it('sum 테스트', function () {
        (0, chai_1.expect)(sum(1, 1)).to.equal(2);
        (0, chai_1.expect)(sum(1, 1)).to.not.equal('귀요미');
    });
});
describe('tuple test', function () {
    it('access tuple data', function () {
        var address = ['gangnam', 100];
        (0, chai_1.expect)(address[0]).to.equal('gangnam');
        (0, chai_1.expect)(address[1]).to.equal(100);
    });
});
describe('ts object test', function () {
    it('access property of person object', function () {
        var person = {
            name: 'capt',
            age: 100
        };
        (0, chai_1.expect)(person.name).to.equal('capt');
        (0, chai_1.expect)(person.age).to.equal(100);
    });
    it('fail to access invalid property of person object', function () {
        var person = {
            name: 'capt',
            age: 100
        };
        (0, chai_1.expect)({ fullname: 'capt park' }).to.not.include(person);
    });
});
describe('ts boolean test', function () {
    it('access boolean', function () {
        var show = true;
        (0, chai_1.expect)(show).to.be["true"];
    });
});
//# sourceMappingURL=index.test.js.map