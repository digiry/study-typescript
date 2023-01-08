"use strict";
exports.__esModule = true;
var chai_1 = require("chai");
function getUsername(user) {
    return user.name;
}
describe('test interface', function () {
    it('access object created by interface', function () {
        var sampleUser = {
            age: 30,
            name: 'kyujin.kang'
        };
        // const sampleUser2: any = {
        //   name: 'no age',
        // };
        // expect(getUsername(sampleUser2)).to.throw(TypeError, "argument type mismatched");
        (0, chai_1.expect)(getUsername(sampleUser)).to.equal('kyujin.kang');
    });
});
//# sourceMappingURL=3_interface.test.js.map