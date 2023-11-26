function iterateChildren(target, colors, index) {
  var targetElem = target[0] ? target[0] : target;
  if (targetElem && targetElem.style) {
    targetElem.style.backgroundColor = colors[index];
    if (targetElem.children?.length > 0) {
      targetElem.children[0].style.backgroundColor = colors[index++];
      for (var element of targetElem.children) {
        element.style.backgroundColor = colors[index++];
        if (element.children) {
          iterateChildren(element.children, colors, index++);
        }
      }
    }
  }
}

document.getElementById("parent").addEventListener(
  "click",
  function (event) {
    var colors = ["red", "blue", "green", "yellow", "black"];
    var target = event.target;
    iterateChildren(target, colors, 0);
  },
  { useCapture: true },
);

document
  .getElementById("grand-child")
  .addEventListener("click", function (event) {
    console.log("Grand-Child clicked");
  });

document
  .getElementById("btn-innermost")
  .addEventListener("click", function (event) {
    // event.preventDefault(); // This will print the consoles as "Button clicked 1", "Button clicked 2" and "Grand-Child clicked"
    // event.stopPropagation(); // This will print the consoles as "Button clicked 1" and "Button clicked 2"
    event.stopImmediatePropagation(); // This will print the consoles as "Button clicked 1" only
    console.log("Button clicked 1");
  });

document
  .getElementById("btn-innermost")
  .addEventListener("click", function (event) {
    console.log("Button clicked 2");
  });
