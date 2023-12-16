import { log } from "console";

//function types in TS
function greeter(fn: (a: string) => void) {
    fn("Hello, World");
  }
   
  function printToConsole(s: string) {
    console.log(s);
  }
   
//   greeter(printToConsole);

const passedFunc = () =>{
    console.log('hello world');

}
// printToConsole((7));

//   greeter( ()=>{
//     console.log('hello world');
//         return "agg"
//   })

  greeter( passedFunc); //worked but I was expecting it to throw an error

  //funvtion type can also be declared using type alias
  type GreetFunction = (a: string) => void;
function greeter2(fn: GreetFunction) {
  // ...
}
const rndmFunc = (b: string): string  =>{
        console.log('hello world');
            return "agg"
      }
const func4 = (num: number)=>{
    console.log('hello world two');
  }
// greeter2(rndmFunc(7)); //thrown error

//call signature
type DescribableFunction = {
    description: string;
    (someArg: number): boolean; //use : to specify the return value type( : boolean)) rather than => ()
  };
  function doSomething(fn: DescribableFunction) {
    console.log(fn.description + " returned " + fn(6));
  }
   
  function myFunc(someArg: number) {
    return someArg > 3;
  }
  myFunc.description = "default description";
   
  doSomething(myFunc);


  function fn(x: string | number) {
    if (typeof x === "string") {
      // do something
    } else if (typeof x === "number") {
      // do something else
    } else {
      x; // has type 'never'!
    }
  }
//   fn({ x:4})

type voidFunc = () => void;
 
const f1: voidFunc = () => {
  return '6';
};
 
const f2: voidFunc = () => true;
 
const f3: voidFunc = function () {
  return true;
};

console.log('f1 is ;)', f1);