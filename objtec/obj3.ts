import { log } from "console";

interface StringArray {
    [index: number]: string;
  }
   
  const myArray: StringArray = {
    '0': 'string',
    '1': 'boolean',
    '2': 'number',
    '3': 'null',
    '4': 'undefined'
  }
  const secondItem = myArray[1];
console.log({secondItem});

            
//   const secondItem: string

// An index signature parameter type must be string, number, symbol, or a template literal type

interface Animal {
    name: string;
}

interface Dog extends Animal{
    breed: string;
}

const bingo : Animal = {
    name: 'bingo',
}
console.log("bingo ", bingo)
const bingoA : Dog = {
    name: 'bingo',
    breed: 'Jack'
}