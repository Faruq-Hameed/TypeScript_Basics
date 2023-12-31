
// generics are all about relating two or more values with the same type!
function longest<Type>(arr: Type): Type | String {
    if(typeof arr === 'string'){ 
       return   `a ${arr.length}`;
    }
return arr;
}

//Constraints
// We constrain the type parameter to that type by writing an extends clause as used below
function longArr<Value, Type extends { length: Value, age: Value}>(a: Type, b: Type) {
    if (a.length >= b.length) {
        return a;
    }
    else {
        return b
    };
}

const longerArray = longArr({school: 'pg', age: [0,1,2,8,78], length: -6}, {age: [0,1,2,8,78], length: -6.0});
   
console.log({longerArray});


function longArry<Type>(a: Type, b: Type) {
   return a;
}

const longerString = longArry({pga: '', length: 6}, {pga: '', age: 8, length: 6},) // longerString is of type 'alice' | 'bob'

// const notOk = longArr(10, 20) //error

// We allowed TypeScript to infer the return type of longest as inferred above

function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
    return arr1.concat(arr2);
  }

//   Type 'string' is not assignable to type 'number'. because it expecting two arrays with similar elements
  // const arr = combine([1, 2, 3], ["hello"]);

// If you intended to do the above, however, you could manually specify Type:
const arryOne = [1, 2];
const arryTwo = ['hello', 'world'];

// var result = arryOne.concat(arryTwo); //error

const arr = combine<number | string>([1, 2, 3], ["hello"]);

// Here’s another pair of similar functions:

function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
  return arr.filter(func);
}
// Rule: When possible, use the type parameter itself rather than constraining it
 
function filter2<Type, Func extends (arg: Type) => boolean>(
  arr: Type[],
  func: Func
): Type[] {
  return arr.filter(func);
}
// Rule: Always use as few type parameters as possible

function greet<Str extends string>(s: Str): Str {
    console.log("Hello, " + s);
    return s;
  }
   
  greet("world");


  function greet2(s: string) {
    console.log("Hello, " + s);
    return s;
  }
//   Rule: If a type parameter only appears in one location, strongly reconsider if you actually need it


// Optional Parameters

function f(n: number) {
    console.log(n.toFixed()); // 0 arguments
    console.log(n.toFixed(3)); // 1 argument
  }

  function f2(x?: number) {
    // ...
  }
  f2(); // OK
  f2(10); // OK

  //default parameter can be added so any undefined argument will be the default value of the parameter

  function f3(x=3){
    // ...
  }
  
  declare function f4(x?: number): number; //
