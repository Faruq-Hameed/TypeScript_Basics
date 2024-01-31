// Map type
// Mapped types are a powerful feature of TypeScript 
// that allows you to create new types by transforming the properties of an existing type. 
// It is a way of mapping the keys of one object to another object. 
// It can be used to create new types that are more specific or to modify an existing type 
// by adding, updating, or deleting properties.
// Mapped types can be used with any object type. 
// They work by iterating over the keys of the object and creating 
// a new object with the same keys but with new types.

type Properties = 'propA' | 'propB';
type MyMappedType = {
    [P in Properties] : boolean; //i can assign the value type of boolean or any other type
}
let person : MyMappedType = {propA: true, propB: false};

console.log(person);

type MyMappedTypeB = {
    [P in Properties] : P; //assigning values "propA" & "propB"
}
// let personB : MyMappedTypeB = {propA: 'true', propB: false};// error code expecting "propA" & "propB" as values

let personB : MyMappedTypeB = {propA: 'propA', propB: "propB"};// error code expecting "propA" & "propB" as values
console.log(personB);

// type M







