const throttleAPI = function (callback, limitter) {
  let throttleFlag = true;
  return function () {
    let context = this,
      args = arguments;
    if (typeof callback === "function") {
      if (throttleFlag) {
        callback.apply(context, args);
        throttleFlag = false;
        setTimeout(() => {
          throttleFlag = true;
        }, limitter);
      }
    }
  };
};
