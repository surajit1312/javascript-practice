const consoleWriter = require("../utils/console-utils");

consoleWriter.write("Javascript - Call, Apply, Bind");

const person = {
  firstName: "Surajit",
  lastName: "Rana",
  getFullName: function () {
    const message = `My name is ${this.firstName} ${this.lastName}.`;
    consoleWriter.logConsole(message, true);
  },
};

const getAddress = function (location, state) {
  const message = `My name is ${this.firstName} ${this.lastName}. I live in ${location}, ${state}.`;
  consoleWriter.logConsole(message, true);
};

person.getFullName();
getAddress.call(person, "Bengaluru", "Karnataka");

consoleWriter.logExeBlock(true, "Function - Call");
consoleWriter.logNote(
  "Application of Function.Call - Used for function borrowing",
);

// ======================================= Call =========================================
const student = {
  firstName: "Naman",
  lastName: "Arora",
};

person.getFullName.call(student);
getAddress.call(student, "Mumbai", "Maharashtra");

consoleWriter.logExeBlock();
// ======================================================================================

// ======================================= Apply ========================================
consoleWriter.logExeBlock(true, "Function - Apply");
consoleWriter.logNote(
  "Application of Function.Apply - Used for function borrowing",
);

person.getFullName.apply(student);
getAddress.apply(person, ["Bengaluru", "Karnataka"]);
getAddress.apply(student, ["Mumbai", "Maharashtra"]);

consoleWriter.logExeBlock();
// ======================================================================================

// ======================================= Bind =========================================
consoleWriter.logExeBlock(true, "Function - Bind");
consoleWriter.logNote(
  "Application of Function.Bind - Used for function borrowing and returning",
);

const getStudentFullName = person.getFullName.bind(student);
getStudentFullName();
const getPersonAddress = getAddress.bind(person, "Bengaluru", "Karnataka");
const getStudentAddress = getAddress.bind(student, "Mumbai", "Maharashtra");

getPersonAddress();
getStudentAddress();

consoleWriter.logExeBlock();
