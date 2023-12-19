// Function Type Expressions

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
greeters(printToConsole)


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
   
  doSomething(myFunc);
  console.log({myFunc});


type Func = {
    name: string,
    (funct:{ age: number, male: boolean}): string
}

function secondFunc( fn: Func){
    console.log(`secondFunc called with ${fn.name} and ${fn({ age: 9, male:true})}`);
}

// secondFunc({age: 1, male: true})