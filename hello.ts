var greeting: string = "Hello world !"
type obj = object
console.log(greeting)

const person : obj = {
    name: "John",
    age: 34
}

interface People  {
    title: string,
    age: number
}

const faruq: People = {
    title: 'Mr',
    age:8
}

type id = number

interface People {
    id?: id
}

// console.log(faruq.id)

const greetingFunc = (obj: People): number => {
    console.log('welcome: ' + obj.title);
    if (obj.id) return obj.id;
    else return obj.age
}

// const result1 = greetingFunc({ title: 'Mr', age: 30 }) 
console.log(greetingFunc({ title: 'Mr', age: 30 }) )
console.log(greetingFunc({ title: 'Mr', age: 30, id: 7 }) )


// const result2 =  greetingFunc({ title: 'Mrs', age: 30, id: 7 })


// Compiler error messages will always use 
// the name of an interface:

interface Mammal {
    name: string
}

function echoMammal(m: Mammal) {
    console.log(m.name)
}

// e.g. The error below will always use the name Mammal 
// to refer to the type which is expected:
echoMammal({ name: 12343 })

// The type of `m` here is the exact same as mammal,
// but as it's not been directly named, TypeScript
// won't mention it in the error messaging

function echoAnimal(m: { name: string }) {
    console.log(m.name)
}

echoAnimal({ name: 12345 })