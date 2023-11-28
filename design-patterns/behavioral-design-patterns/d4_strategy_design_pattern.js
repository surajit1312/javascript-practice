function Square() {
  this.calculateArea = (side) => {
    return side * side;
  };
}

function Circle() {
  this.calculateArea = (radius) => {
    return Math.PI * radius * radius;
  };
}

function ShapeStrategy() {
  this.shape = null;
  this.setStrategy = (shape) => {
    this.shape = shape;
  };
  this.calculateArea = (dimention) => {
    if (this.shape) {
      return this.shape.calculateArea(dimention);
    }
  };
}

let square = new Square();
let circle = new Circle();

let s = new ShapeStrategy();
s.setStrategy(square);
console.log(
  "Area of a square of side 4 units : " + s.calculateArea(4).toFixed(2),
);

s.setStrategy(circle);
console.log(
  "Area of a circle of radius 4 units : " + s.calculateArea(4).toFixed(2),
);
