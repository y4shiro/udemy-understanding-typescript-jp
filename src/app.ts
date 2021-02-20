type Admin = {
  name: string;
  privileges: string[]; // Admin の権限を保持する配列
}

type Employee = {
  name: string;
  startDate: Date;
}

type ElevatedEmployee = Admin & Employee;
// interface ElevatedEmployee extends Admin, Employee {}; // 上のコードと実質同じ

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; // Number 型になる

