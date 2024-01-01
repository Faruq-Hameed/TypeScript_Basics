// Typescript Type template

var person = {
    name: 'John',
    age: 21,
}

// person.greet= function (){ //not possible in TS for concrete object like Person
//     console.log(person.name);
// }

// If you use the same code above in Typescript the compiler gives an error. 
// This is because in Typescript, concrete objects should have a type template. 
// Objects in Typescript must be an instance of a particular type.
// You can solve this by using a method template in declaration.