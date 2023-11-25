const consoleWriter = require("../utils/console-utils");

consoleWriter.write(
  "Object Oriented JavaScript - Inheritance Illustration",
  "magenta",
);

// Inheritance Example
class Person {
  constructor(name) {
    this.name = name;
  }

  toString() {
    return `Name of person is ${this.name}`;
  }
}

class Student extends Person {
  constructor(name, roll) {
    // super calls to its parent constructor
    super(name);
    this.roll = roll;
  }

  // override toString method of 'Parent' parent class here in this 'Student' child class
  toString() {
    return `Name of person is ${this.name}. Roll number is ${this.roll}`;
  }
}

const p = new Person("Naman Sharma");
const personInfo = p.toString();
consoleWriter.logConsole(`Person Info: ${personInfo}`, true, "yellow");

const s = new Student("Kiran Krishna", 56789);
const studentInfo = s.toString();
consoleWriter.logConsole(`Student Info: ${studentInfo}`, true, "yellow");

consoleWriter.logExeBlock(true, "", "magenta");
