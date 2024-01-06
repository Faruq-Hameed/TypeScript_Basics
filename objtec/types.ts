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
const funcFive : IAdd = (number1: number, number2: number): number => number1
funcFive.school = 'ui'
const funcFive : IAdd = (number1: number, number2: number): number => number1
funcFive.school = 'ui'


const objTwo: IAdd = (age: number, level: number): number =>{ //the object parameter can be named anything but same type
    return age * level
}
objTwo.school = 'UI'
// You cannot directly assign properties to arrow functions. To resolve this error, 
// you need to create an object that matches the IAdd interface with both the function and the school property.

// let objTwo : IAdd = {
//     (age: number, level: number): number {
//             return age * level

//     },
//     school : 'ui'
// }
// Declaration merging
// With declaration merging, we can define an interface multiple times

interface Person {
    name: string;
}

interface Person{
    age: number;
}

const person: Person ={
    name: "Faruq",
    age: 24

}
// Type aliases can’t be merged in the same way. 



// Extends vs. intersection

// An interface can extend one or multiple interfaces. 
// Using the extendskeyword, a new interface can inherit all the properties 
// and methods of an existing interface while also adding new properties.

interface Faruq extends Person {
    school: string;
    level: number;
}

const faruq : Faruq ={
    school: 'UI', level: 6, name: 'faruq', age: 36,
}

// To achieve a similar result for types, we need to use an intersection operator:

type Ajibola = Faruq & {graduate: boolean}

const aji: Ajibola = {
    school: 'UI', level: 6, name: 'faruq', age: 36, graduate: true
}

// The exception is union types. If you try to extend an interface from a union type

type Job = "Engr" | "Doc"

// An interface can only extend an object type or intersection of object types with statically known members
// interface IJob extends Job{
//     password: string
// }

type AK = Ajibola & Faruq & {
    friendship: string
}

const ak : AK = {
    school: 'UI', level: 6, name: 'faruq', age: 36, graduate: true,
    friendship: 'kenny'
}

// Working with tuple types
//tuple type allows us to express an array with a fixed number of elements, where each element has its data type

type TeamMember = [names: string, role: string, age: number];
type TeamMemberD = [names: 'string', role: 'string', age: number];
const team : TeamMember = ['far','doc',7]
const teamD : TeamMemberD = ['string','string',7]

// it is not as concise or readable as using the tuple type as type alias has direct support for tuple types

interface ITeamMember extends Array<string | number> 
{
 0: string; 1: string; 2: number 
}

const peter: ITeamMember = ['Harry', 'Dev', 24];
// const Tom: ITeamMember = ['Tom', 30, 'Manager']; //Error: Type 'number' is not assignable to type 'string'.