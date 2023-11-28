function Developer(name) {
  this.name = name;
  this.type = "Developer";
}

function Tester(name) {
  this.name = name;
  this.type = "Tester";
}

function EmployeeFactory() {
  this.createEmployee = function (name, type) {
    switch (type) {
      case 1:
        return new Developer(name);
      case 2:
        return new Tester(name);
      default:
        break;
    }
  };
}

function getEmployeeInfo() {
  console.log(`Hi!, I am ${this.name} and I am a ${this.type}`);
}

const factory = new EmployeeFactory();

const employees = [];
employees.push(factory.createEmployee("Mary Jane", 1));
employees.push(factory.createEmployee("Kim Jones", 2));
employees.push(factory.createEmployee("Tim Larry", 1));
employees.push(factory.createEmployee("Isabella Jonathan", 2));
employees.push(factory.createEmployee("Kathy Bendson", 1));

employees.forEach((item) => {
  getEmployeeInfo.call(item);
});
