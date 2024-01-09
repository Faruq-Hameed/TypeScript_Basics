//The Array Type

// Whenever we write out types like number[] or string[], 
// that’s really just a shorthand for Array<number> and Array<string>.

interface Box<T>{
    contents: T
}

let box: Box<number[]>= {contents: [1, 2,5, ]}

let boxA: Box<Array<number>>={
    contents: [1, 2, 5]
}

let boxB: Box<Array<string>> = {contents: ['a', 'b']}

function doSomething(value: Array<number>): void {
    console.log({value})

}

doSomething(boxA.contents)

doSomething(new Array(1, 2))

function doSomethingA(value: Array<string>): void {
    console.log({value})

}

doSomethingA(new Array("a", "b", "c", "d"))

//The ReadonlyArray Type
// The ReadonlyArray is a special type that describes arrays that shouldn’t be changed.

function readonlyArray(value: ReadonlyArray<string>): void{
    const array = value.slice(0, value.length); //it is readable not writeable
    // value.push(array); //Property 'push' does not exist on type 'readonly string[]'
}

/* Much like the readonly modifier for properties, 
it’s mainly a tool we can use for intent. When we see a function that returns ReadonlyArrays, 
it tells us we’re not meant to change the contents at all, and when we see a function 
that consumes ReadonlyArrays, it tells us that we can pass any array into that function 
without worrying that it will change its contents. */

// Unlike Array, there isn’t a ReadonlyArray constructor that we can use.
// new ReadonlyArray("red", "green", "blue"); //error

// Instead, we can assign regular Arrays to ReadonlyArrays.
let readOnly : ReadonlyArray<string> = ['a', 'b', 'c'] //not mutable array
let readOnlyArray = readOnly; //not mutable array


// Just as TypeScript provides a shorthand syntax for Array<Type> with Type[], 
// it also provides a shorthand syntax for ReadonlyArray<Type> with readonly Type[].

let readOnlyB : readonly string[] = ['a', 'b', 'c'] 

function readOnlyAB(value: readonly string[]): readonly string[]{ //returning readonly string array
    return value;
}

let result = readOnlyAB(readOnlyB)
// result.push('a') //result too is not mutable
// result[0] = '' //result too is not mutable


function readOnlyABC(value: readonly number[]): readonly number[]{ //returning readonly string array
    return value;
}
let resultB = readOnlyABC([9,6,6])
// result.push('a') //result too is not mutable
// resultB[0]++ //resultB too is not mutable

function doStuff(values: readonly string[]) {
    // We can read from 'values'...
    const copy = values.slice();
    console.log(`The first value is ${values[0]}`);
   
    // ...but we can't mutate 'values'.
    // values.push("hello!"); //error
//   Property 'push' does not exist on type 'readonly string[]'.
  }

  let x: readonly string[] = [];
let y: string[] = [];
 
x = y;
// y = x; //error
// The type 'readonly string[]' is 'readonly' and cannot be assigned to the mutable type 'string[]'.