// type Jobs = {
//     age: number
// } 
type Jobs = {
    role: string;
    [name: string]: string;

}

type Job = Jobs & {
    age: string;
}

let richardJob: Jobs = {
    name: 'string',
    role: 'senoit',
    age: ''
}