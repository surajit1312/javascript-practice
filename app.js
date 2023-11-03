let count = 0;

const onClearConsole = function () {
  const textAreaElement1 = document.getElementById("text-hits1");
  const textAreaElement2 = document.getElementById("text-hits2");
  const searchInputElement1 = document.getElementById("input-search1");
  const searchInputElement2 = document.getElementById("input-search2");
  if (
    textAreaElement1 &&
    textAreaElement2 &&
    searchInputElement1 &&
    searchInputElement2
  ) {
    textAreaElement1.value = "";
    textAreaElement2.value = "";
    searchInputElement1.value = "";
    searchInputElement2.value = "";
    count = 0;
  }
};

document
  .getElementById("input-search1")
  .addEventListener("keyup", function (event) {
    onSearch1(event.target.value);
  });

const onSearch1 = function (event) {
  console.log(event, count++);
  const textAreaElement1 = document.getElementById("text-hits1");
  if (textAreaElement1) {
    let textVal = textAreaElement1.value;
    if (count % 20 === 0) {
      textVal = count + ": " + event;
    } else {
      textVal += "\n" + count + ": " + event;
    }
    textAreaElement1.value = textVal;
  }
};

document
  .getElementById("input-search2")
  .addEventListener("keyup", function (event) {
    // onSearch2(event.target.value);
    betterSearch(event.target.value);
  });

const onSearch2 = function (event) {
  console.log(event, count++);
  const textAreaElement2 = document.getElementById("text-hits2");
  if (textAreaElement2) {
    let textVal = textAreaElement2.value;
    if (count % 20 === 0) {
      textVal = count + ": " + event;
    } else {
      textVal += "\n" + count + ": " + event;
    }
    textAreaElement2.value = textVal;
  }
};

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

const betterSearch = debounceAPI(onSearch2, 1000);
