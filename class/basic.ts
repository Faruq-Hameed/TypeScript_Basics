// Fields
// A field declaration creates a public writeable property on a class:

// class Point {
//     x: number;
//     y: number;
// }

// const pt = new Point();
// pt.x = 0,
//     pt.y = 0;

// pt.y= '0'// error code

// Fields can also have initializers; these will run automatically when the class is instantiated:
class PointA{
    x= 9;
    y= 8
}

const ptA = new PointA();
console.log({ptA});
//strictPropertyInitialization
// The strictPropertyInitialization setting controls whether
//  class fields need to be initialized in the constructor.

class BadGreeter {
    name: string;
}