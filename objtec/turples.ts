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