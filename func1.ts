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

  type GreetFunction = (a: string) => void;
function greeter2(fn: GreetFunction) {
  // ...
}

greeter2(()=>{
        console.log('hello world two');
            return "agg"
      })