// function logText0108(text: any) {
//   console.log(text);
//   return text;
// }

// logText0108(10);
// logText0108('향기');
// logText0108(true);

function logText0108<T>(text: T): T {
  console.log(text);
  return text;
}

logText0108<string>('hi');

interface Dropdown0108<T> {
  value: T;
  selected: boolean;
}

const obj: Dropdown0108<string> = { value: 'abc', selected: false };

interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

getShoppingItemOption(10);
