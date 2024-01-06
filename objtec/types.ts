// Types vs. interfaces in TypeScript

import { Agent } from "undici-types";

// Type aliases in TypeScript mean “a name for any type.”

type MyNumber = number;
type User = {
  id: number;
  name: string;
  email: string;
}

// In TypeScript, an interface defines a contract that an object must adhere to. Below is an example:

interface Client { 
    name: string; 
    address: string;
}

// we can’t use an interface to alias a primitive type. The interface can only be used for an object type.
// Therefore, when we need to define a primitive type alias, we use type.

// Function types
// , a function type represents a function’s type signature. 
type AddFn =  (num1: number, num2:number) => number;

const func : AddFn = (num1: number, num2: number)=> num1 + num2;
const funcTwo : AddFn = function (num1: number, num2: number){
    return func(num1, num2);
}

interface IAdd {
    (num1: number, num2: number): number;
    school: string;
}

const funcThree : IAdd = (number1: number, number2: number): number => number1
funcThree.school = 'ui'
const funcFour : IAdd = function(number1: number, number2: number): number {
    return number1
} 
funcFour.school = 'ui'
// let objTwo: IAdd = (age: number, level: number): number =>{ //the object parameter can be named anything but same type
//     return age * level
// }
// objTwo.school = 'UI'
// You cannot directly assign properties to arrow functions. To resolve this error, 
// you need to create an object that matches the IAdd interface with both the function and the school property.

// let objTwo : IAdd = {
//     (age: number, level: number): number {
//             return age * level

//     },
//     school : 'ui'
// }
