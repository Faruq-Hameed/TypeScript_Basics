//Generic Constraints

interface Lengthwise {
    length: number;
  }
   
  function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
  }
//   Because the generic function is now constrained, it will no longer work over any and all types:

// loggingIdentity(3); //error
// Argument of type 'number' is not assignable to parameter of type 'Lengthwise'.

// Instead, we need to pass in values whose type has all the required properties:

loggingIdentity({ length: 10, value: 3 });

//Using Type Parameters in Generic Constraints

// You can declare a type parameter that is constrained by another type parameter. 
// For example, here we’d like to get a property from an object given its name. 
// We’d like to ensure that we’re not accidentally grabbing a property that does not exist on the obj, 
// so we’ll place a constraint between the two types:

function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}
 
let x = { a: 1, b: 2, c: 3, d: 4 };
 
getProperty(x, "a");
// getProperty(x, "m"); //error

//Generic Parameter Defaults

// In TypeScript, you can provide default values for generic type parameters 
// using the = defaultType syntax. This allows you to specify 
// a default type that will be used when the generic type parameter is not explicitly provided.

class GenericNumber<NumType = number> {
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;

  constructor(zeroValue: NumType, add: (x: NumType, y: NumType) => NumType) {
      this.zeroValue = zeroValue;
      this.add = add;
  }
}

// Example usage with default type number
const numberInstance = new GenericNumber(0, (x, y) => x + y);

// Example usage with a different type (string)
const stringInstance = new GenericNumber<string>("zero", (x, y) => x + y);

// In this above example, NumType is the generic type parameter, and its default value is set to number. This means 
// that if you create an instance of GenericNumber without explicitly specifying the generic type, 
// it will default to using number. However, one can still provide a different type explicitly when needed.

//The keyof type operator

type Person = {
  name: string;
  age: number;
  address: string;
};

function getPropertyA<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person: Person = {
  name: "John",
  age: 25,
  address: "123 Main St",
};




const personName: string = getPropertyA(person, "name"); // Type-safe access
const personAge: number = getPropertyA(person, "age"); // Type-safe access
// const invalidProperty = getPropertyA(person, "invalidKey"); // Error: "invalidKey" is not assignable to parameter of type "name" | "age" | "address"

//The keyof operator takes an object type and produces a string 
// or numeric literal union of its keys. 
// The following type P is the same type as type P = "x" | "y":

type Point = { x: number; y: number };

type P = keyof Point;

interface King extends Person {
 kingdom: string;
}

function callKing(k: King, x: number): void {
  interface King {
    age: string;
  }
  let child : King = {age : x >= 0 ? x.toString() : 'hello'};
  child.age = k.kingdom
}

//The typeof type operator

// JavaScript already has a typeof operator you can use in an expression context:
// Prints "string"
console.log(typeof "Hello world");
function func (){
  
}
console.log(typeof func);

// TypeScript adds a typeof operator you can use in a type context to refer to the type of a variable or property:

let s = 'shoe'
let n: typeof s; //let n: string

let age = new Date()
console.log(typeof age); //object
console.log(typeof s); //string

// combined with other type operators, you can use typeof to conveniently express many patterns.

type Predicate = (x: unknown) => boolean
type K = ReturnType<Predicate> //type K = boolean

// If we try to use ReturnType on a function name, we see an instructive error:

function f (){
  return {x: 10, y: 6}
}

// type K2 = ReturnType<f> //error: 'f' refers to a value, but is being used as a type here. Did you mean 'typeof f'?

// Remember that values and types aren’t the same thing as f is seen as value above instead of it return type. 
// To refer to the type that the value f has, we use typeof:

type K2 = ReturnType<typeof f> //error: 'f' refers to a value, but is being used as a type here. Did you mean 'typeof f'?

function f2() {
  return { x: 10, y: 3 };
}
type P2 = ReturnType<typeof f>;
    
//Limitations of typeof

// TypeScript intentionally limits the sorts of expressions you can use typeof on.

// Specifically, it’s only legal to use typeof on identifiers (i.e. variable names) or their properties. 
// This helps avoid the confusing trap of writing code you think is executing, but isn’t:

// // Meant to use = ReturnType<typeof msgbox>
// let shouldContinue: typeof msgbox("Are you sure you want to continue?");







