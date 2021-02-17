class Department {
  name: string; // フィールド

  constructor(n: string) {
    this.name = n;
  }
}

const accounting = new Department('Accounting');
console.log(accounting);