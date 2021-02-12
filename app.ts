const person = {
  name: 'y4shiro',
  age: '20',
  hobbies: ['Sports', 'Cooking']
};

let favoriteActivities: string[];
favoriteActivities = ['Sports', 'Drive'];
// favoriteActivities = ['Sports', 1]; // エラー

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
 //  console.log(hobby.map(); // エラー
}
