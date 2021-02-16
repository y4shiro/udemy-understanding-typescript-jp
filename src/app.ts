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
const add = (a: number, b: number) => a + b;

const printOutput: (output: string | number) => void = output => {
  console.log(output);
};

printOutput(add(2, 5));

const button = document.querySelector('button');

if (button) {
  button.addEventListener('click', event => {
    console.log(event);
  });
}
