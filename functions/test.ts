import { log } from "console";

function greeter(fn: (a: string) => void): void {
    fn("Hello, World");
  }
   
  function printToConsole(s: string) : "hello world" {
    console.log(s);
    return 'hello world'
  }
   
  greeter(printToConsole);
  
  type DescribableFunction = {
    description: string;
    // (someArg: number): boolean;
  };
const obj: DescribableFunction ={
    description: 'describe'
}
  console.log(typeof obj);
  