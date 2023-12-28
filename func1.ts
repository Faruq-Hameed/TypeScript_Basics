
//function types in TS
function greeterMain(fn: (a: string) => void): void {
    fn("Hello, World"); 
  }
  // greeterMain takes a fn (that has string type as arg and return void) as parameter
  //  but the greeterMain will only be strict on fn arg of string type 
  // not the return type of the function as you below the function below;
   
function printToConsoles(n: string) : string {
  console.log(n);

  return `${n}`;
}
  
greeterMain(printToConsoles)
//function types in TS
function greeter(fn: (a: string) => void) {
    fn("Hello, World");
  }
   
  greeterMain
  function printToConsole(s: string) {
    console.log(s);
  }
   
//   greeter(printToConsole);

const passedFunc = () =>{
    console.log('hello world');

}


//   greeter(printToConsole);
// printToConsole((7));

  greeter( ()=>{
    console.log('hello world');
        return "agg"
  })

  greeter( passedFunc); //worked but I was expecting it to throw an error

  type GreetFunction = (a: string) => void;
function greeter2(fn: GreetFunction) {
  // ...
}

greeter2(()=>{
        console.log('hello world two');
            return "agg"
      })