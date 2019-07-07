class Circle {
  radius: number
  constructor(radius: number) {
    this.radius = radius
  }
  public area() {
    return Math.PI * this.radius * this.radius
  }
}

class Square {
  width: number
  constructor({ width }: { width: number }) {
    this.width = width
  }
  public area() {
    return this.width * this.width
  }
}
class AreaCalculator {
  public calcAreaCircle(circle: Circle) {
    return circle.area()
  }
  public calcAreaSquare(square: Square) {
    return square.area()
  }
}
