// function logMessage2(value: any) {
//   console.log(value);
// }

// logMessage2('hello');
// logMessage2(100);

var seho: string | number | boolean;

seho = 'hello';
function logMessage2(value: string | number | boolean) {
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

interface Developer3 {
  name: string;
  skill: string;
}

interface Person3 {
  name: string;
  age: number;
}

// function askSomeone2(someone: Developer3 | Person3) {
//   someone.name;
//   someone.skill;
//   someone.age;
// }

var ninaeros: string | number | boolean;
var kkj: string & number & boolean;

function askSomeone2(someone: Developer3 & Person3) {
  someone.name;
  someone.skill;
  someone.age;
}

type newDeveloper = Developer3 & Person3;

let kkj2: newDeveloper = {
  name: 'kkj',
  skill: 'sw engineer',
  age: 30,
};

askSomeone2(kkj2);

askSomeone2({
  name: 'kkj',
  skill: 'sw engineer',
  age: 30,
});
