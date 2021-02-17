class Department {
  name: string; // フィールド

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log('Department: ' + this.name);
  }
}

const accounting = new Department('Accounting');
accounting.describe();

const accountingCopy = { name: 'DUMMY', describe: accounting.describe };
accountingCopy.describe();