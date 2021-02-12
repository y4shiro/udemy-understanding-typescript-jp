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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'y4shiro',
    age: 20,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
// person.role.push('admin'); // 3番目に追加される
// person.role[1] = 10; // 型が違うのでエラー
// person.role = [0, 'admin', 'user']; // 型指定と違うのでエラー
var favoriteActivities;
favoriteActivities = ['Sports', 'Drive'];
// favoriteActivities = ['Sports', 1]; // エラー
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    //  console.log(hobby.map(); // エラー
}
if (person.role === Role.ADMIN) {
    console.log('管理者です');
}
