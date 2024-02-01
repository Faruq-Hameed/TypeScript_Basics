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
    [P in Properties] : P; //assigning values "propA" & "propB" to the prop
}
// let personB : MyMappedTypeB = {propA: 'true', propB: false};// error code expecting "propA" & "propB" as values

let personB : MyMappedTypeB = {propA: 'propA', propB: "propB"};// error code expecting "propA" & "propB" as values
console.log(personB);


type MappedTypeC <Properties extends string | number | symbol> = {
    [P in Properties] : P;
}

type MyNewType = MappedTypeC<'propA' | 'propB'>

let obj : MyNewType = {
    propA :"propA",
    propB: "propB"
}

type MappedT<T> = {
    [P in keyof T] : T[P] | null
}
type MyNewTypeD = MappedT<{a: 'a', b: 'b'}>


//PICK in typescript

//we can be selecting(picking) properties form list of properties in a type list
type Pick1<T, Properties extends keyof T> ={
    [P in Properties] : T[P]
}


type MyNewType2 = Pick1<{a: 'apple', b: 'b'}, 'a'> // Pick only a
//we picked only property a for the type above

let fruit: MyNewType2 = {a: 'apple'};


type MyNewType3 = Pick1<{a: 'apple', b: string}, 'b'> // Pick only b property only

let fruitB: MyNewType3 = {b: 'apple'};
// Accessing and updating 'b' property of 'fruitB' is allowed

fruitB.b = 'mango';

console.log(fruitB);


//we can take (pick) two or more properties using the union

type MyNewType4 = Pick1<{a: 'apple', b: string}, 'a' | 'b'> // Pick two properties 'a' and 'b'

let fruitD : MyNewType4 = {
    a: 'apple', //not changeable
    b: 'banana' //can be changed
}

fruitD.b = 'berry'
// fruitD.a = 'berry'//error code

//key of any result to string | number | symbol in typescript


// When you don’t want to repeat yourself, sometimes a type needs to be based on another type.
// Mapped types build on the syntax for index signatures, 
// which are used to declare the types of properties which have not been declared ahead of time:









