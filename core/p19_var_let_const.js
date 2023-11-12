// "use strict";

const consoleWriter = require("../utils/console-utils");

consoleWriter.write("Var, Let and Const declarations in Javascript", "green");
consoleWriter.logExeBlock(true, "Var, Let and Const declarations", "yellow");

// console.log(const_variable); // if enabled gives ReferenceError: Cannot access 'const_variable' before initialization
// console.log(let_variable); // if enabled gives ReferenceError: Cannot access 'let_variable' before initialization
consoleWriter.logConsole(var_variable); // 'var_variable' will be hoisted and value will be 'undefined'

const const_variable = 20;
let let_variable = 10;
var var_variable = 5;

var p = 500;

function getParam(param) {
  delete param.a; // a attribute of param would be deleted
  delete param; // param is a reference that would not be deleted at all Error in 'strict mode' -> "Delete of an unqualified identifier in strict mode."
  return param;
}

const result = getParam({ a: 20 });
consoleWriter.logConsole(`Function returns : ${result}`, "true", "magenta");

consoleWriter.logExeBlock(true, "", "yellow");
