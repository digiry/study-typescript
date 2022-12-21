interface User2 {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
const seho2: User2 = {
  age: 33,
  name: '세호',
};

// 함수에 인터페이스 활용
function getUser2(user: User2) {
  console.log(user);
}

const capt = {
  name: '캡틴',
};

getUser2(capt);
getUser2(seho2);

// 함수 스펙에 인터페이스를 활용
interface sumFunction {
  (a: number, b: number): number;
}

var sum2: sumFunction;
sum2 = function (a: number, b: number): number {
  return a + b;
};

// 인덱스에 인터페이스를 활용
interface StringArray {
  [index: number]: string;
}

var arg2: StringArray = ['1', '2', '3'];

// arg2[0] = 1;

// 딕셔너리에 인터페이스를 활용
interface StringRegexDictionary {
  [key: string]: RegExp;
}

var rule: StringRegexDictionary = {
  cssFile: /\.css$/,
  // jsFile: 'js',
};

// 인터페이스 확장(상속)
interface Person2 {
  name: string;
  age: number;
}

interface Developer2 extends Person2 {
  language: string;
}

var user_1: Developer2 = {
  name: 'name 1',
  age: 30,
  language: 'ts',
};
