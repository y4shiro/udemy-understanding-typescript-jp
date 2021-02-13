// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'y4shiro',
//   age: 20,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author'],
// };

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR
}

const person = {
  name: 'y4shiro',
  age: 20,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
};

// person.role.push('admin'); // 3番目に追加される
// person.role[1] = 10; // 型が違うのでエラー
// person.role = [0, 'admin', 'user']; // 型指定と違うのでエラー

let favoriteActivities: string[];
favoriteActivities = ['Sports', 'Drive'];
// favoriteActivities = ['Sports', 1]; // エラー

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
 //  console.log(hobby.map(); // エラー
}

if (person.role === Role.ADMIN) {
  console.log('管理者です');
}
