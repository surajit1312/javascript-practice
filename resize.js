window.addEventListener("resize", function (event) {
  onResize1(event.target);
  //   onResize2(event.target);
  betterResize(event.target);
});

const onResize1 = function (target) {
  console.log(target.innerWidth, target.innerHeight);
  const innerWidth1 = document.getElementById("inner-width1");
  const innerHeight1 = document.getElementById("inner-height1");
  if (innerWidth1 && innerHeight1) {
    innerWidth1.innerText = "Width: " + target.innerWidth;
    innerHeight1.innerText = "Height: " + target.innerHeight;
  }
};

const onResize2 = function (target) {
  console.log(target.innerWidth, target.innerHeight);
  const innerWidth2 = document.getElementById("inner-width2");
  const innerHeight2 = document.getElementById("inner-height2");
  if (innerWidth2 && innerHeight2) {
    innerWidth2.innerText = "Width: " + target.innerWidth;
    innerHeight2.innerText = "Height: " + target.innerHeight;
  }
};

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

const betterResize = throttleAPI(onResize2, 3000);
