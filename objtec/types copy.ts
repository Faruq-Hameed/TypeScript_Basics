// Types vs. interfaces in TypeScript

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
    name: string;
}

const funcThree : IAdd = (number1: number, number2: number): number => number1
const funcFour : IAdd = function(number1: number, number2: number): number {
    return number1
} 
let objTwo: IAdd = {
name: 'two',

}
