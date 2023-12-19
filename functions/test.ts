// Function Type Expressions

import { log } from "console";

function greeter(fn: (a: string) => void): void {
    fn("Hello, World");
  }
   
  function printToConsole(s: string) : string{
    console.log({s});
    return s;
  }
   
//   greeter(printToConsole);
  
//   Of course, we can use a type alias to name a function type:
type GreetFunction = (a: string) => void;
function greeters(fn: GreetFunction): void {
 console.log("fn('hello') : ", fn('hello'));
}
// greeters(printToConsole)


  type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
  };

  function doSomething(fn: DescribableFunction) {
    console.log(fn.description + " returned " + fn(6));
  }

   
  function myFunc(someArg: number) {
    return someArg > 3;
  }
  myFunc.description = "default description";
  myFunc.age = 9
   
//   doSomething(myFunc);
//   console.log({myFunc});


type Func = {
    name: string,
    (funct:{ age: number, male: boolean}): string
}

function secondFunc( fn: Func){
    console.log(`secondFunc called with ${fn.name} and ${fn({ age: 9, male:true})}`);
}

// secondFunc({age: 1, male: true})


// You can also write a construct signature by adding the new keyword in front of a call signature

type SomeConstructor = {
    new (s: string): number;
  };

  function fn(ctor: SomeConstructor) {
    return new ctor("hello");
  }

  interface CallOrConstruct {
    (n?: number): string;
    new (s: string): Date;
  }

//   Generic Functions
function firstElement(arr: any[]) {
    return arr[0];
  }

  //type parameter
function firstElementTwo<Type>(arr: Type[]): Type | undefined{
    return arr[0];
}
  
const s = firstElementTwo(['a', 'b', 'c'])

const n = firstElementTwo([,2,3,4,5])!

console.log('typeof n :', typeof n, 'typeof s :',typeof s);


function testTypeParameter<str>(a: str): str{
    return a;
}
const num : number= testTypeParameter(8)
// console.log(typeof testTypeParameter(6));