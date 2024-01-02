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


interface Animal {
    name: string;
  }
   
  interface Dog extends Animal {
    breed: string;
  }
   
  // Error: indexing with a numeric string might get you a completely separate type of Animal!
  interface NotOkay {
    // [x: number]: Animal; // error
//   'number' index type 'Animal' is not assignable to 'string' index type 'Dog'.
    [x: string]: Dog;
  }

  const objA: NotOkay ={
    dog: { breed: 'bingo', name: 'luna'}
  }

  interface NumberDictionary {
    [index: number]: string;
   
    length: number; // ok
    name: string;// 
    9: 'abc'
    // name: number
//   Property 'name' of type 'string' is not assignable to 'string' index type 'number'.
  }
//   In the above example, name’s type does not match the string index’s type, 
// and the type checker gives an error.
// However, properties of different types are acceptable 
// if the index signature is a union of the property types:
interface NumberDictionaryA {
    [index: string]: number | string;
    length: number,
    name: string // no error
}

// you can make index signatures readonly in order to prevent assignment to their indices:

interface NumberDictionaryB {
    readonly[index: number]: string,
    name: string
}

var objB : NumberDictionaryB = {
 9: "9",
name: 'faruq'
}

//ou can make index signatures readonly in order to prevent assignment to their indices:
// objB[9] = '10' //error