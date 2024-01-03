interface IAdd {
    (num1: number, num2:number): number;
 }

 function IAdd(fn: IAdd){
    // return num1 +3
 }

 type AddFn =  (num1: number, num2:number) => number;

//  type Jobs = 'salary worker' | 'retired';
//  type VIPClient = Jobs & { benefits: string[]};
// let job: Jobs = "salary worker"

//  let VIPClients : VIPClient = {job, benefits: ['all', 'hh']}
// // console.log(VIPClient)

interface Client {
    name: string;
}

type VIPClient = Client & { benefits: string[]};
// let client: Client = {
//     name: "string"
// }

// Type VIPClient = Client & { benefits: string[]};
 let VIPClients : VIPClient = {name: "hhh", benefits: ['all', 'hh']}

