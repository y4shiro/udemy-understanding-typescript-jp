// const names: Array<string> = [];
// names[0].split(' ');

// const promise = new Promise<string>((resolve, reject) => {
//   setTimeout(() => {
//     resolve('終わりました!');
//   }, 2000);
// });

// promise.then(data => {
//   data.split(' ');
// })

function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge<{ name: string; hobbies: string[] }, { age: number }>(
  { name: 'Max', hobbies: ['Sports'] },
  { age: 30 }
);
console.log(mergedObj.age);
