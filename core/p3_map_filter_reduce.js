const consoleWriter = require("../utils/console-utils");

consoleWriter.write("Javascript - Map, Filter & Reduce");

const users = [
  { firstName: "Akshay", lastName: "Saini", age: 26 },
  { firstName: "Nishant", lastName: "Chahar", age: 28 },
  { firstName: "Love", lastName: "Babbar", age: 32 },
  { firstName: "Raj", lastName: "Vikramaditya", age: 29 },
  { firstName: "Keerti", lastName: "Purswani", age: 26 },
];

consoleWriter.logExeBlock(
  true,
  "Get the Hashmap Object of all ages using reduce"
);

const mappedObj = users.reduce((acc, curr) => {
  if (!acc[curr.age]) {
    acc[curr.age] = 1;
  } else {
    acc[curr.age]++;
  }
  return acc;
}, {});

consoleWriter.logConsole(
  "Map of all ages with frequency: " + JSON.stringify(mappedObj)
);

consoleWriter.logExeBlock();

consoleWriter.logExeBlock(
  true,
  "Get all user's full name whose age < 28 - Using chaining"
);

const usersLessThan28Age = users
  .filter((user) => user.age < 28)
  .map((filteredUser) => `${filteredUser.firstName} ${filteredUser.lastName}`);
consoleWriter.logConsole(
  "Users with age less than 28 are : " + JSON.stringify(usersLessThan28Age)
);

consoleWriter.logExeBlock();

consoleWriter.logExeBlock(
  true,
  "Get all user's full name whose age > 28 - Using reduce"
);

const usersMoreThan28Age = users.reduce((acc, curr) => {
  if (curr.age > 28) {
    acc.push(`${curr.firstName} ${curr.lastName}`);
  }
  return acc;
}, []);
consoleWriter.logConsole(
  "Users with age more than 28 are : " + JSON.stringify(usersMoreThan28Age)
);

consoleWriter.logExeBlock();
