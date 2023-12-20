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