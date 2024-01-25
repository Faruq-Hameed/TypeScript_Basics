// Indexed Access Types
// We can use an indexed access type to look up a specific property on another type:

type Person = {age: number, name: string, alive: boolean}

type Age = Person['age']
// type AgeA = Person[0] //error code, i cannot access the properties by there index like an array
// type AgeB = Person['age', 'alive'] //error code, only a single property can be accessed

const faruq: Person = {
    age: 9, name: 'faruq', alive: true
}

const faruqAge : Age = faruq.age

// The indexing type is itself a type, so we can use unions, keyof, or other types entirely:

type ID = Person[ 'age' | 'name'] //using union type

let faruqId : ID = faruq.age < 20 ? 'twenty plus' : faruq.age
console.log(typeof faruqId)

type AgeC = typeof faruq.age //type AgeC = number; using typeof
type AgeD = 7
// let num : AgeD = 9 //error code; type '9' is not assignable to type '7'.t

type IDB = Person[keyof Person]; //using keyof ; type IDB = string | number | boolean

// let idB : IDB = {} //error code; Type '{}' is not assignable to type 'IDB'

let idB : IDB =  "hello"  //can be a string
let idC : IDB =  9  //can be a number
let idD : IDB =  false  //can be a boolean

type AliveOrName = "alive" | "name"

type Copy = Person[AliveOrName] // this is so because property alive or name are available in Person
// type Copy = string | boolean

// You’ll even see an error if you try to index a property that doesn’t exist:
// type I1 = Person["alve"];
// Property 'alve' does not exist on type 'Person'.

// Another example of indexing with an arbitrary type is using number to get the type of an array’s elements. 
// We can combine this with typeof to conveniently capture the element type of an array literal:

const MyArray = [
    { name: "faruq", age: 28 },
    { name: "abike", age: 27 },
]

type PersonA = typeof MyArray[number]

let personB: PersonA = { name: 'hello', age: 28,}
type PersonA = {
    name: string;
    age: number;
}