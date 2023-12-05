// var message:string = "Hello World" 
// console.log(message)

// let faruq = `Faruq`

// console.log(
//     faruq)
   
   
// //    const x = "hello" as number;

// //    const x = "hello" as unknown as number;

   
// let changingString = "Hello World";
// changingString = "Olá Mundo";
// // Because `changingString` can represent any possible string, that
// // is how TypeScript describes it in the type system
      
// // let changingString: string //TypeScript system
 
// const constantString = "Hello World";
// // Because `constantString` can only represent 1 possible string, it
// // has a literal type representation

// // const constantString: "Hello World" //TypeScript system

// let x: "hello" = "hell";
// // OK
// x = "hello";
// // ...
// x = "howdy";
// // Type '"howdy"' is not assignable to type '"hello"'.

// let nameTwo: 'string' = 'string' 
// nameTwo= 'string'


// function printText(s: string, alignment: "left" | "right" | "center") {
//     // ...
//   }
//   printText("Hello, world", "left");
//   printText("G'day, mate", "centre");
// //   Argument of type '"centre"' is not assignable to parameter of type '"left" | "right" | "center"'.

// // Numeric literal types work the same way:

// function compare(a: string, b: string): -1 | 0 | 1 {
//   return a === b ? 0 : a > b ? 1 : -1;
// }


// interface Options {
//     width: number;
//   }
//   function configure(x: Options | "auto") {
//     // ...
//   }
//   configure({ width: 100 });
//   configure("auto");
//   configure("automatic");
// //   Argument of type '"automatic"' is not assignable to parameter of type 'Options | "auto"'.

// let count: 'one' = 'one';
// const objTwo = { counter: count, options: 1 };
// if ('someCondition') {
//     objTwo.counter = 1;
//     objTwo.options = 'auto';
// }


// declare function handleRequest(url: string, method: "GET" | "POST"): void;
 
// const req = { url: "https://example.com", method: "GET" };
// handleRequest(req.url, req.method);
// // Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'.
// // You can change the inference by adding a type assertion in either location:

// // Change 1:
// const req = { url: "https://example.com", method: "GET" as "GET" };
// // Change 2
// handleRequest(req.url, req.method as "GET");


// function liveDangerously(x?: number | null) {
//   // No error
//   console.log(x!.toFixed());
// }

let sym2 = Symbol("key");
let sym3 = Symbol("key");
sym2 === sym3; // false, symbols are unique

console.log(sym2)

const sym = Symbol();
let obj = {
  [sym]: "value",
};
console.log(obj[sym]); // "value"