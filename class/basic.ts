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
class PointA { //no error because it has be initialized
    x = 9;
    y = 8
}

const ptA = new PointA();
console.log({ ptA });
//--strictPropertyInitialization
// The strictPropertyInitialization setting controls whether
//  class fields need to be initialized in the constructor.

//this class will throw error when used because of strict property initialization
// class BadGreeter {
//     name: string; //Property 'name' has no initializer and is not definitely assigned in the constructor. name: string;
// }

// let greet = new BadGreeter();

class GoodGreeter {
    name: string;
    constructor(name: string) {
        this.name = name
        console.log(name)
    }
}
let greet = new GoodGreeter('faruq');

class OKGreeter {
    // Not initialized, but no error
    name!: string | undefined;
}

//readonly 
//Fields may be prefixed with the readonly modifier. 
//This prevents assignments to the field outside of the constructor.

class Greeter {
    readonly name: string = 'world';
    constructor(otherName?: string,) {
        if (otherName !== undefined) {
            this.name = otherName;
        }
    }
    err() {
        // this.name = 'not okay' //Cannot assign to 'name' because it is a read-only property.
    }
}

const g = new Greeter()
console.log({ g })
// g.name = 'jj'// error code

//Constructors
// Class constructors are very similar to functions. You can add 
// parameters with type annotations, default values, and overloads

class Point {
    x: number;
    y: number;

  // Normal signature with defaults
constructor(x = 0, y = 0){
    this.x = x
    this.y = y;
}
}

class PointOverloads{
    ///Overloads
    constructor(x: number, y: string);
    constructor(s: string);
    constructor(xs: any, y?: any){

    }
}
//There are just a few differences between class constructor 
// signatures and function signatures:

//Constructors can’t have type parameters 
//these belong on the outer class declaration;
// Constructors can’t have return type annotations 
//the class instance type is always what’s returned


//Super Calls
// Just as in JavaScript, if you have a base class, 
// you’ll need to call super(); 
// in your constructor body before using any this. members:

class Base {
    k = 8
}

class Derived extends Base{
    constructor(){
    // Prints a wrong value in ES5; throws exception in ES6
        // console.log(this.k)// error code
        super()
        console.log(this.k) //after super was called
    }
}
// Forgetting to call super as above is an easy mistake to make 
// in JavaScript, but TypeScript will tell you when it’s necessary.