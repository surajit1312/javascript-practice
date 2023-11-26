// "use strict";

const consoleWriter = require("../utils/console-utils");

consoleWriter.write("Inheritance in Vanilla Javascript", "green");
consoleWriter.logExeBlock(true, "Base class Person", "magenta");

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.getIntro = function () {
  consoleWriter.logConsole(
    `Hello, I am ${this.name} and my age is ${this.age} years.`,
    false,
    "yellow",
  );
};

var p = new Person("Tilak Khurrana", 32);
p.getIntro();

consoleWriter.logExeBlock(true, "", "magenta");

consoleWriter.logExeBlock(
  true,
  "Inherit Person class from Employee class",
  "magenta",
);

function Employee(name, age, company) {
  Person.call(this, name, age);
  this.company = company;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.getIntro = function () {
  consoleWriter.logConsole(
    `Hello, I am ${this.name} and my age is ${this.age} years. I work for ${this.company}.`,
    false,
    "yellow",
  );
};

var e = new Employee("Nishant Chahar", 29, "Microsoft");
e.getIntro();

consoleWriter.logExeBlock(true, "", "magenta");
