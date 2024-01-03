interface IAdd {
    (num1: number, num2:number): number;
 }

 function IAdd(fn: IAdd){
    // return num1 +3
 }

 type AddFn =  (num1: number, num2:number) => number;

 type Jobs = 'salary worker' | 'retired';
 type VIPClient = Jobs & { benefits: string[]};
