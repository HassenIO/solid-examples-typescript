class Square {
  constructor(height: number) {}
}

class Circle {
  constructor(radius: number) {}
}

class AreaCalculator {
  private shapes: any[];

  constructor(shapes: any[]) {
    this.shapes = shapes;
  }

  public sum() {
    return this.shapes.reduce((area, shape) => {
      if (shape instanceof Square) {
        area += shape.height * shape.height;
      }

      if (shape instanceof Circle) {
        area += 3.14 * shape.radius * shape.radius;
      }

      // What about adding triangles, octogones,... etc?

      return area;
    }, 0);
  }
}
