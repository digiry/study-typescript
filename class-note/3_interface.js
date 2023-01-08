// 변수에 인터페이스 활용
var seho2 = {
    age: 33,
    name: '세호'
};
// 함수에 인터페이스 활용
function getUser2(user) {
    console.log(user);
}
var capt = {
    name: '캡틴'
};
getUser2(capt);
getUser2(seho2);
var sum2;
sum2 = function (a, b) {
    return a + b;
};
var arg2 = ['1', '2', '3'];
var rule = {
    cssFile: /\.css$/
};
var user_1 = {
    name: 'name 1',
    age: 30,
    language: 'ts'
};
//# sourceMappingURL=3_interface.js.map