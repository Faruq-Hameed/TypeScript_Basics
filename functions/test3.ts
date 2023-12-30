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
// but this implementation signature can’t be called directly (e.g makeDate(arg...)) . 
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
// function fn(x: number): void; //thrown error
// This overload signature is not compatible with its implementation signature.
function fn(x: string | boolean): boolean{ 
    return true; //e; 
}

//Writing Good Overloads

function len(s: string): number;
function len(arr: number[]): number;
function len(x: any) {
  return x.length;
}
// This above function is fine; we can invoke it with strings or arrays. 
// // However, we can’t invoke it with a value that might be a string or an array, 
// because TypeScript can only resolve a function call to a single overload:

len(""); // OK
len([0]); // OK
// len(Math.random() > 0.5 ? "hello" : [0]); //throw error
// 
// Because both overloads have the same argument count and same return type, 
// we can instead write a non-overloaded version of the function:

// function len(x: any[] | string) {
//   return x.length;
// }
// Rule:Always prefer parameters with union types instead of overloads when possible like the above is better than the former

interface getUser {
    fiteredUser<User>(user: User): User[];
}

// function getUser(user) {

// }


// Other Types in TS

// Void "void represents the return value of functions which don’t return a value
// The inferred return type is void
function noop() {
    return;
  }
//   void is not the same as undefined in TS.


// // object: The special type object refers to any value that isn’t 
// a primitive (string, number, bigint, boolean, symbol, null, or undefined).
// This is different from the empty object type { }, and also different from the global type Object

// unknown: The unknown type represents any value

function anyFunc(a: any): unknown{
 a.b()
 return undefined;
}

// function unknownFunc(a: unknown){
//     a.b() //thrown error
// }

function safeParse(s: any): unknown {
    return JSON.parse(s);
  }
   
// never: The never type represents values which are never observed. In a return type, 
// this means that the function throws an exception or terminates execution of the program

function fail(msg: string): never {
    throw new Error(msg);
  }



//   Rest Parameters and Arguments
// A rest parameter appears after all other parameters, and uses the ... syntax:
// Rest parameter defines functions that take an unbounded number of arguments.

function restFunc (n: number, ...m: number[]): number[]{
    return m.map((x) => n * x);

}

const rst = restFunc(10, 1, 2, 3, 4) // [10, 20, 30, 40] // after the first argument, the second argument can be nothing


console.log({rst});

// Rest Arguments
// we can provide a variable number of arguments 
// from an iterable object (for example, an array) using the spread syntax. 
// For example, the push method of arrays takes any number of arguments:

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1.push(...arr2);

console.log({arr1});

// Note that in general, TypeScript does not assume that arrays are immutable. 
// This can lead to some surprising behavior:

// Inferred type is number[] -- "an array with zero or more numbers",
// not specifically two numbers
const args = [8, 5];
// const angle = Math.atan2(...args); //throw error
// A spread argument must either have a tuple type or be passed to a rest parameter above.

// The best fix for the situation above depends a bit on your code, 
// but in general a const context is the most straightforward solution:
const argsTwo = [8,5] as const;
// argsTwo.push() //error; Property 'push' does not exist on type 'readonly ; this is immutable
const angle = Math.atan2(...argsTwo); //

console.log({angle});

//destructuring explained
let a: number, b: string, c: boolean;

[a, b, c] = [9, 'hello', true]

let a2: number, b2: string, c2: number[]

[a2, b2, ...c2] = [a, b, 2,6,6,7]

console.log({c2});

// Parameter Destructuring

// You can use parameter destructuring to conveniently unpack objects provided as an argument 
// into one or more local variables in the function body

function sum ({a, b, c}: {a: number, b: number, c: number}): void{
    console.log( a + b + c);
}
// The above can look a bit verbose, but you can use a named type here as well:

// Same as prior example
type ABC = {a: number, b: number, c: number}

function sumTwo ({a, b, c} : ABC ): void{
    console.log( a + b + c);

}

// Assignability of Functions
// Return type void
// contextually, function type with a void return type (type voidFunc = () => void), 
// when implemented, can return any other value, but it will be ignored.

type voidFunc = () => void;
 
const f1: voidFunc = () => {
  return true;
};
 
const f2: voidFunc = () => true;
 
const f3: voidFunc = function () {
  return true;
};
// And when the return value of one of these functions is assigned to another variable, 
// it will retain the type of void:
const v1 = f1();
console.log({v1});
function f22(): void {
    // @ts-expect-error
    return true;
  }

  const v2 = f22();
  console.log(v2);
   
  const f34 = function (): void {
    // @ts-expect-error
    return true;
  };

  