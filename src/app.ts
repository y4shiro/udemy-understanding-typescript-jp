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

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
console.log(mergedObj.age);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = '値がありません';
  if (element.length > 0) {
    descriptionText = `値は${element.length}個です`;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe(['Sports', 'Cooking']));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return 'Value: ' + obj[key];
}

extractAndConvert({ name: 'Max' }, 'name');

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Data1');
textStorage.addItem('Data2');
textStorage.removeItem('Data1');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const obj = { name: 'Max' };
// objStorage.addItem(obj);
// objStorage.addItem({ name: 'Manu' });
// objStorage.removeItem(obj);

// console.log(objStorage.getItems());

interface CourceGoal {
  title: string;
  description: string;
  completeUntile: Date;
}

function createCourceGoal(title: string, description: string, date: Date): CourceGoal {
  let courceGoal: Partial<CourceGoal> = {};
  courceGoal.title = title;
  courceGoal.description = description;
  courceGoal.completeUntile = date;

  return courceGoal as CourceGoal;
}

const names: Readonly<string[]> = ['Max', 'Anna'];
// names.push('Manu');

