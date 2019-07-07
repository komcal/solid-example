interface Shape {
  area: () => number
}

class GoodCircle implements Shape {
  radius: number
  constructor(radius: number) {
    this.radius = radius
  }
  public area() {
    return Math.PI * this.radius * this.radius
  }
}

class GoodSquare implements Shape {
  width: number
  constructor({ width }: { width: number }) {
    this.width = width
  }
  public area() {
    return this.width * this.width
  }
}

// class GoodRectangle implements Shape {
//   width: number
//   height: number
//   constructor({ width, height }: { width: number, height: number }) {
//     this.width = width
//     this.height = height
//   }
//   public area() {
//     return this.width * this.height / 2
//   }
// }

class GoodAreaCalculator {
  public calculateArea(shape: Shape) {
    return shape.area()
  }
}