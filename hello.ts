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

type id
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