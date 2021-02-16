const userName = 'Max';
let age = 30;

// function add(a: number, b: number) {
//   var result;
//   result = a + b;
//   return result;
// }

if (age >= 20) {
  var isAdult = true;
}
// console.log(isAdult); // アクセスできてしまう

// アロー関数
const add = (a: number, b: number = 1) => a + b;

const printOutput: (output: string | number) => void = output => {
  console.log(output);
};

printOutput(add(2, 5));
printOutput(add(2));

const button = document.querySelector('button');

if (button) {
  button.addEventListener('click', event => {
    console.log(event);
  });
}

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

// activeHobbies.push(hobbies[0], hobbies[1]);
activeHobbies.push(...hobbies);
console.log(activeHobbies);

const person = {
  name: 'Max',
  age: 30
};

// const copiedPerson = person; // これはオブジェクトの参照先を渡しているだけ
const copiedPerson = {
  ...person,
};

