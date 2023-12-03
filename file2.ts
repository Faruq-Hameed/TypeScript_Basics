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
//   printName({ first: "Alice", last: "Alisson", third: 7 });  //third wasn't optional property so an error will be thrown

  function printName2(obj: { first: string; last?: string }) {
      // Error - might crash if 'obj.last' wasn't provided!
    //   console.log(obj.last.toUpperCase());
    // 'obj.last' is possibly 'undefined'.
      if (obj.last !== undefined) {
        // OK
        console.log(obj.last.toUpperCase());
      }
     
      // A safe alternative using modern JavaScript syntax:
      console.log(obj.first?.toUpperCase());
    }


//UNION TYPES
    function printId(id: string | number | boolean ) {
        console.log("Your ID is: " + id);
        // id.toUpperCase(); //TypeScript will only allow an operation if it is valid for every member of the union
      }
      // OK 
      printId(101);
      // OK
      printId("202");
      // Errors
      printId({ myID: 22342 });
      printId([1, 2, 3, 4, 5, 6, 7, 8])


    //Narrowing
      function printId2(id: number | string) {
        if (typeof id === "string") {
          // In this branch, id is of type 'string'
          console.log(id.toUpperCase());
        } else {
          // Here, id is of type 'number'
          console.log(id);
        }
      }

      function welcomePeople(x: string[] | string) {
        if (Array.isArray(x)) {
          // Here: 'x' is 'string[]'
          console.log("Hello, " + x.join(" and "));
        } else {
          // Here: 'x' is 'string'
          console.log("Welcome lone traveler " + x);
        }
      }