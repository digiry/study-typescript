// function logMessage2(value: any) {
//   console.log(value);
// }
// logMessage2('hello');
// logMessage2(100);
var seho;
seho = 'hello';
function logMessage2(value) {
    if (typeof value === 'number') {
        value.toLocaleString();
    }
    if (typeof value === 'string') {
        value.toString();
    }
    throw new TypeError('value must be string or number');
}
logMessage2('hello');
logMessage2(100);
logMessage2(seho);
// function askSomeone2(someone: Developer3 | Person3) {
//   someone.name;
//   someone.skill;
//   someone.age;
// }
var ninaeros;
var kkj;
function askSomeone2(someone) {
    someone.name;
    someone.skill;
    someone.age;
}
var kkj2 = {
    name: 'kkj',
    skill: 'sw engineer',
    age: 30
};
askSomeone2(kkj2);
askSomeone2({
    name: 'kkj',
    skill: 'sw engineer',
    age: 30
});
//# sourceMappingURL=5_operator.js.map