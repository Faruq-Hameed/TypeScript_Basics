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

type OptionalTuple = [number, string, boolean, 'hello'?]

let optionalTuple : OptionalTuple = [0, 'hello', true]

function getOptionalTuple(array: OptionalTuple): void{
 let [numA, str, boo, strA] = array 
 let d = strA
d?.split(':')
}

// Tuples can also have rest elements, which have to be an array/tuple type.

type StringNumberBooleans = [string, number, ...boolean[]];
type StringBooleansNumber = [string, ...boolean[], number];
type BooleansStringNumber = [...boolean[], string, number];

// StringNumberBooleans describes a tuple whose first two elements are string and number respectively, 
// but which may have any number of booleans following.
// StringBooleansNumber describes a tuple whose first element is string and then any number of booleans 
// and ending with a number.
// BooleansStringNumber describes a tuple whose starting elements are any number of booleans 
// and ending with a string then a number.

// A tuple with a rest element has no set “length” 
// - it only has a set of well-known elements in different positions.

const a: StringNumberBooleans = ["hello", 1];
const b: StringNumberBooleans = ["beautiful", 2, true];
const c: StringNumberBooleans = ["world", 3, true, false, true, false, true]