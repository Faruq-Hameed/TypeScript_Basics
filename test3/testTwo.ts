const sym = Symbol('hello');

let imp= null;

let literalTypes: "GET" | "POST" | "PUT" | "DELETE" = 'POST';
console.log(typeof literalTypes);

interface Person  {
    name: string,
    age: number
}

const faruq: Person = {
    name: 'faruq',
    age: 36
}
interface Person{
    class?: string
}
faruq.class = 'PG'


// literalTypes = 'DELETE'

// console.log(typeof literalTypes);
