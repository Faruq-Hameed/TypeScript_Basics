//function Overloads
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
// These first two signatures above are called the overload signatures while the third is the signature implementation.
// but this implementation signature can’t be called directly. 
// Even though we wrote a function with two optional parameters after the required one, 
// it can’t be called with two parameters!

const d1 = makeDate(12202024);
const d2 = makeDate(11, 20, 2023);
// const d3 = makeDate(1, 3);
// console.log({d1}, {d2}, );

function funcSignature( a: string): void;
function funcSignature(){
    return 'hello '
}

console.log(funcSignature('9'))

function fn(x: boolean): void;
// Argument type isn't right
function fn(x: string ): void;
function fn(x: number): boolean;
// This overload signature is not compatible with its implementation signature.
function fn(x: string | boolean){ 
    
}

//Writing Good Overloads

function len(s: string): number;
function len(arr: any[]): number;
function len(x: any) {
  return x.length;
}

// This function is fine; we can invoke it with strings or arrays. 
// // However, we can’t invoke it with a value that might be a string or an array, 
// because TypeScript can only resolve a function call to a single overload:

len(""); // OK
len([0]); // OK
len(Math.random() > 0.5 ? "hello" : [0]); //throw error

// Because both overloads have the same argument count and same return type, 
// we can instead write a non-overloaded version of the function:

// function len(x: any[] | string) {
//   return x.length;
// }
// Rule:Always prefer parameters with union types instead of overloads when possible

