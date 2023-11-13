const consoleWriter = require("../utils/console-utils");

consoleWriter.write(
  "Object Oriented JavaScript - Data Encapsulation Illustration",
  "magenta"
);

// Encapsulation Example
class Person {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }

  addAddress(address) {
    this.address = address;
  }

  getPersonDetails() {
    consoleWriter.logConsole(
      `${this.name} lives in ${this.address}`,
      true,
      "yellow"
    );
  }
}

const p = new Person("Mukul Saxena", 12211);
p.getPersonDetails();

consoleWriter.logExeBlock(true, "", "magenta");
