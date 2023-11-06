const consoleWriter = require("../utils/console-utils");

consoleWriter.write("Publish Subscribe Patter", "red");
consoleWriter.logExeBlock(true, "Publish Subscribe Pattern", "red");

const sumPlusOne = function (value) {
  consoleWriter.logConsole(`Sum Plus One, ${value + 1}`, true, "green");
};

const logThreeNums = function (a, b, c) {
  consoleWriter.logConsole(`Num1: ${a}, Num2: ${b}, Num3: ${c}`);
};

class PubSub {
  constructor() {
    this.eventTracker = {
      // key: eventKey, value: [callbackFn]
    };
  }

  subscribe(eventKey, callbackFn) {
    if (!this.eventTracker[eventKey]) {
      this.eventTracker[eventKey] = [callbackFn];
    } else {
      this.eventTracker[eventKey].push(callbackFn);
    }
    return {
      unsubscribe: () => {
        const eventArr = this.eventTracker[eventKey];
        const idx = eventArr.indexOf(callbackFn);
        if (idx > -1) {
          eventArr.splice(idx, 1);
        }
      },
    };
  }

  publish(eventKey, ...args) {
    const callbackFns = this.eventTracker[eventKey];
    if (Array.isArray(callbackFns)) {
      callbackFns.forEach((fn) => {
        fn.apply(null, args);
      });
    }
  }
}

const pubsub = new PubSub();
consoleWriter.logExeBlock(
  true,
  "Subscribe set for 'fooSubs', 'logSubs' and 'nonSubs'",
  "green"
);
consoleWriter.logNote(
  `
const fooSubs = pubsub.subscribe("subscription1", sumPlusOne);
const logSubs = pubsub.subscribe("subscription1", logThreeNums);
const nonSubs = pubsub.subscribe("subscription2", sumPlusOne);
`,
  true,
  "",
  "",
  "green"
);

const fooSubs = pubsub.subscribe("subscription1", sumPlusOne);
const logSubs = pubsub.subscribe("subscription1", logThreeNums);
const nonSubs = pubsub.subscribe("subscription2", sumPlusOne);

consoleWriter.logExeBlock(
  true,
  "Publish called with args on 'fooSubs', 'logSubs' and 'nonSubs'",
  "yellow"
);
consoleWriter.logNote(
  `
pubsub.publish("subscription1", 99);
pubsub.publish("subscription1", 77, 98, 668);
pubsub.publish("subscription2", 76);
`,
  true,
  "",
  "",
  "yellow"
);

pubsub.publish("subscription1", 99);
pubsub.publish("subscription1", 77, 98, 668);
pubsub.publish("subscription2", 76);

consoleWriter.logExeBlock(true, "Unsubscribe called for 'fooSubs'", "magenta");
consoleWriter.logNote(`fooSubs.unsubscribe();`, true, "", "", "magenta");
fooSubs.unsubscribe();

consoleWriter.logExeBlock(
  true,
  "After unsubscribe 'fooSubs' only 'logSubs' subscription is performed as shown below",
  "magenta"
);
pubsub.publish("subscription1", 999);
