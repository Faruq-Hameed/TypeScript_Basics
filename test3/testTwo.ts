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

const ids : (number | any)[] = []


ids.push(8)
ids.push('123', {}, null, undefined)

console.log(ids)