const debounceAPI = function (callback, delay) {
  let timer = null;
  return function () {
    let context = this;
    let args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      if (typeof callback === "function") {
        callback.apply(context, args);
      }
    }, delay);
  };
};
