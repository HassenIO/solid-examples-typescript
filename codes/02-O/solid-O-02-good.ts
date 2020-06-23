interface Shape {
  area(): number;
}

class Square implements Shape {
  constructor(private height: number) {}

  public area(): number {
    return this.height * this.height;
  }
}

class Circle implements Shape {
  constructor(private radius: number) {}

  public area(): number {
    return 3.14 * this.radius * this.radius;
  }
}

class AreaCalculator {
  private shapes: Shape[];

  constructor(shapes: Shape[]) {
    this.shapes = shapes;
  }

  public sum(): number {
    return this.shapes.reduce((acc, shape) => (acc += shape.area()), 0);
  }
}
