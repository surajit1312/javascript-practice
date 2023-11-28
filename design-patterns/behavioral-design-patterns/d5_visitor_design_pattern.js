function Employee(name, salary) {
  this.name = name;
  this.salary = salary;
}

Employee.prototype.setSalary = function (sal) {
  this.salary = sal;
};

Employee.prototype.getSalary = function () {
  return this.salary;
};

Employee.prototype.accept = function (visitorFn) {
  visitorFn(this);
};

const emp = new Employee("Tan Cook", 10000);

console.log("Initial Salary :", emp.getSalary());

function ExtraSalary(emp) {
  emp.setSalary(emp.getSalary() * 3);
}

emp.accept(ExtraSalary);

console.log("Final Salary :", emp.getSalary());
