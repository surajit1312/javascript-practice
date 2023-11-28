function Subject() {
  this.observers = [];

  this.subscribe = function (callback) {
    this.observers.push(callback);
  };

  this.unsubscribe = function (callback) {
    this.observers = this.observers.filter((item) => {
      return item !== callback;
    });
    console.log(callback.name + " has been unsubscribed");
  };

  this.notify = function () {
    this.observers.forEach((observer) => {
      if (typeof observer === "function") {
        observer.call();
      }
    });
  };
}

let subject = new Subject();

let observer1 = function () {
  console.log("observer1 notified");
};

let observer2 = function () {
  console.log("observer2 notified");
};

subject.subscribe(observer1);
subject.subscribe(observer2);
subject.notify();

subject.unsubscribe(observer2);
subject.notify();
