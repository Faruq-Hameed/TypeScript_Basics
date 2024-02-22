function padLeft(padding: number | string, input: string): (string| number | void) {
    if (typeof padding === "number") {
      return input.repeat(padding) + input;
    }
    // return padding + input;
  }

  console.log(padLeft('7', '9'))

  // interface Shape {
  //   kind: "circle" | "square";
  //   radius?: number;
  //   sideLength?: number;
  // }

  function getArea(shape: Shape) {
    if (shape.kind === "circle") {
      return Math.PI * shape.radius! ** 2;
    }
  }


  //discriminated Union
  interface Circle {
    kind: "circle";
    radius: number;
  }
   
  interface Square {
    kind: "square";
    sideLength: number;
  }
   
  type Shape = Circle | Square;

  function getArea2(shape: Shape) {
    if (shape.kind === "circle"){
      return Math.PI * shape.radius ** 2;
    }
    return Math.PI * shape.sideLength ** 2;
    
  }