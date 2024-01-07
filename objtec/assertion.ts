function example(x: string) {
    // do something 
    console.log(x, 'typeof x is: ', typeof x);
}

let y: number | undefined;

example(y as any)

y = 8
example(y as any)

function square(x: number) {
	return x * x;
}

const x : number | undefined = 7 || undefined;

const answer = square(x)!;

x.toString()

interface Rectangle {
    width: number,
    height: number
}

// function isRectangle(shape: unknown): shape is Rectangle {
//     if ("width" in shape && "height" in shape) {
//         // this is a rectangle
//         return true; 
//     }
//     // it's not a rectangle
//     return false;
//   }

// using the nullish coalescing operator
const API_URL_A = process.env.API_URL ?? "DEFAULT URL";

// using the OR (||) logical operator
const API_URL = process.env.API_URL || "DEFAULT URL";

console.log(API_URL_A);

console.log(9)

// We can also use Javascript Logical Assignment Operator to provide a default value:

let b : string | number;

// provide a default value if null or undefined
b ??= "Hello World"

// provide a default value if falsy
b ||= "Hello World"
console.log(b)

