enum Shoes {
  Nike = '나이키',
  Adidas = '아디다스',
  Prospecs = '프로스펙스',
}

var myShoes = Shoes.Nike;

console.log(myShoes);

// 예제
enum Answer {
  Yes = 'Y',
  No = 'N',
}

function askQuestion0108(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log('정답입니다.');
  }

  if (answer === Answer.No) {
    console.log('오답입니다');
  }
}

askQuestion0108(Answer.Yes);
askQuestion0108(Answer.No);
askQuestion0108('Y');

console.log(Answer.No);
