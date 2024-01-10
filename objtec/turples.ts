// Tuple Types
// A tuple type is another sort of Array type that knows exactly how many elements it contains, 
// and exactly which types it contains at specific positions.

type NumberStringPair = [number, string]

let numStr : NumberStringPair = [3,'three']

interface NumObj{
    contents: [number, {}]
}

let numbObj : NumObj = {contents: [8, {age: 9}]}
numbObj.contents[1] = {level : 500, graduate: true}
let ab = numbObj.contents[1] = '9'
console.log(numbObj.contents)
//the type literal {} is acting like any
// Like ReadonlyArray, NumberStringPair has no representation at runtime, but is significant to TypeScript.

// We can also destructure tuples using JavaScript’s array destructuring.

function doStuff (stringHash: NumberStringPair){
    const [num, str] = stringHash 
     
}

function doSomething(stringHash: [string, number]) {
    const [inputString, hash] = stringHash;
   
    console.log(inputString);
                    
   
    console.log(hash);
 }

 interface StringNumberPair {
  // specialized properties
  length: 2;
  0: string;
  1: number;
 
  // Other 'Array<string | number>' members...
  // slice(start?: number, end?: number): Array<string | number>;
}

let StringNumberPair : StringNumberPair = {
  length: 2,
  0: 'oo',
  1: 7
}
let StringNumberPairB : StringNumberPair = ['apple', 4]

// Another thing you may be interested in is that tuples can have 
// optional properties by writing out a question mark (? after an element’s type). 
// Optional tuple elements can only come at the end, and also affect the type of length.
// A required element cannot follow an optional element

type OptionalTuple = [number?, string, boolean, 'hello'?]

let optionalTuple : OptionalTuple = [0, 'hello', true]