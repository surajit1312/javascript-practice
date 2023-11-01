const consoleWriter = require("../utils/console-utils");

consoleWriter.write("Async Await Race", "red");
consoleWriter.logExeBlock(true, "Async Await Race Condition", "yellow");

function promiseRaceCall() {
  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved value 1");
    }, 5000);
  });

  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved value 2");
    }, 10000);
  });

  async function handlePromise() {
    consoleWriter.logConsole(
      `Hello, Async Await - ${displayTime()}`,
      false,
      "yellow"
    );
    const value1 = await p1;
    consoleWriter.logConsole(
      `Hello Javascript 1 ${value1} - ${displayTime()}`,
      false,
      "magenta"
    );
    const value2 = await p2;
    consoleWriter.logConsole(
      `Hello Javascript 2 ${value2} - ${displayTime()}`,
      false,
      "magenta"
    );
    consoleWriter.logExeBlock(true, "", "yellow");
  }

  function displayTime() {
    return `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}:${new Date().getMilliseconds()}`;
  }

  handlePromise();
}

setTimeout(() => {
  promiseRaceCall();
}, 1000);

function promisePracticalUsage() {
  consoleWriter.logExeBlock(false, "Async Await Practical Usage", "green");

  const API_URL = "https://api.github.com/users/surajit1312";

  async function resolveGitAPI() {
    const response = await fetch(API_URL);
    const gitUserData = await response.json();
    consoleWriter.logConsole(
      `Response: ${JSON.stringify(gitUserData, null, 4)}`,
      true,
      "green"
    );
    consoleWriter.logExeBlock(false, "", "green");
  }

  resolveGitAPI();
}

setTimeout(() => {
  promisePracticalUsage();
}, 20000);
