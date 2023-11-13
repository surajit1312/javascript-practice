const consoleWriter = require("../utils/console-utils");

consoleWriter.write(
  "Object Oriented JavaScript - Create Object using Vanilla JavaScript",
  "magenta"
);

// creating constructor
function Vehicle(name, maker, engine) {
  this.name = name;
  this.maker = maker;
  this.engine = engine;
}

// adding method 'getVehicleInfo' to prototype of Vehicle class
Vehicle.prototype.getVehicleInfo = function () {
  consoleWriter.logConsole(
    `\n Vehicle Details: \n Name: ${this.name} \n Maker: ${this.maker} \n Engine: ${this.engine}`,
    true,
    "yellow"
  );
};

const v = new Vehicle("Slavia", "Skoda", "German Engine 1.0 TSI");
v.getVehicleInfo();

consoleWriter.logExeBlock(true, "", "magenta");
