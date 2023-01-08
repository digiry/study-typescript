var Shoes;
(function (Shoes) {
    Shoes["Nike"] = "\uB098\uC774\uD0A4";
    Shoes["Adidas"] = "\uC544\uB514\uB2E4\uC2A4";
    Shoes["Prospecs"] = "\uD504\uB85C\uC2A4\uD399\uC2A4";
})(Shoes || (Shoes = {}));
var myShoes = Shoes.Nike;
console.log(myShoes);
// 예제
var Answer;
(function (Answer) {
    Answer["Yes"] = "Y";
    Answer["No"] = "N";
})(Answer || (Answer = {}));
function askQuestion0108(answer) {
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
//# sourceMappingURL=6_enum.js.map