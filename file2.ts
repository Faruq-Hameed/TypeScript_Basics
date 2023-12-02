// Parameter type annotation
function greet(name: string) {
    console.log("Hello, " + name.toUpperCase() + "!!");
  }

  //return type annotation
  function getFavoriteNumber(): number {
    return 26;
  }

  //promise type annotation
  async function getFavoriteNumber2(): Promise<string> {
    return 'favorite';
  }

  const names = ["Alice", "Bob", "Eve"];
  const nums =  [1, 'hhh', 'lflf', 3, 4,{}, 5, 6, 7]
 
// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
  console.log(s.toUpperCase());
});
 
// Contextual typing also applies to arrow functions
names.forEach((s) => {
  console.log(s.toUpperCase());
  s + 2
});

// Contextual typing for function - parameter s inferred to have type string
nums.forEach(function (n) {
    console.log(n);
    n= 'ggg'
  });
   
  // Contextual typing also applies to arrow functions
  nums.forEach((n) => {
    console.log(n);
    n =+ 2
  });

  // The parameter's type annotation is an object type
function printCoord(pt: { x, y: number }) {
    
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
  printCoord({ x: 3, y: 7 });


  function printName(obj: { first: string; last?: string }) {
    // ...
  }
  // Both OK
  printName({ first: "Bob" }); //last is optional property
  printName({ first: "Alice", last: "Alisson" });


