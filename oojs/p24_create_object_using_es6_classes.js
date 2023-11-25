const consoleWriter = require("../utils/console-utils");

consoleWriter.write(
  "Object Oriented JavaScript - Create Object using ES6 Classes",
  "magenta",
);

class Vehicle {
  constructor(name, maker, engine) {
    this.name = name;
    this.maker = maker;
    this.engine = engine;
  }

  getVehicleDetails() {
    consoleWriter.logConsole(
      `\n Vehicle Details: \n Name: ${this.name} \n Maker: ${this.maker} \n Engine: ${this.engine}`,
      true,
      "yellow",
    );
  }
}

const v = new Vehicle("Slavia", "Skoda", "German Engine 1.0 TSI");
v.getVehicleDetails();

consoleWriter.logExeBlock(true, "", "magenta");
