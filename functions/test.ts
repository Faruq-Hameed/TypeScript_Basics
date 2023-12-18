function greeter(fn: (a: string) => void): void {
    fn("Hello, World");
  }
   
  function printToConsole(s: string) : string{
    console.log(s);
    return s;
  }
   
  greeter(printToConsole);
  
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
   console.log(myFunc);
   
//   doSomething(myFunc);