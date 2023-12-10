const sym = Symbol('hello');

let imp= null;

let literalTypes: "GET" | "POST" | "PUT" | "DELETE" = 'POST';
// console.log(typeof literalTypes);

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

let check = [9, 'hello', {age: 8}]
// console.log(check)

//turples
let arry: [number, number, number] | [string, string]

arry = ['1', '2']

const func = (x: number, y: number) : string => {
    let result = `${(x + y)}`
    return result
}
