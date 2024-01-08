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

// Excess Property Checks
// excess property checking, which validates the object more thoroughly 
// when it is created and assigned to an object type during creation.

interface SquareConfig {
    width?: number;
    color?: string;
}

function createSquare(config: SquareConfig):{color: string, area: number}{
    console.log({config})
    return {
        color: config.color || 'red',
        area: config.width ? config.width * config.width : 20
    }
}

// let mySquare = createSquare({ width: 10, colour: 'green' }); //error
// If an object literal has any properties that the “target type” doesn’t have, you’ll get an error as above.

// Getting around these checks is actually really simple. The easiest method is to just use a type assertion:

let mySquare = createSquare({width: 20, opacity:0.9} as SquareConfig)

let square: SquareConfig = {width: 20, opacity:0.9} as SquareConfig 
//if we logged square, opacity will be part of the property but not accessible through square.opacity.
console.log("square :", square, 'square.width =', square.width, 'square.color =', square.color)

// square.opacity = 9 // error: Property 'opacity' does not exist on type 'SquareConfig'.
console.log({mySquare}) //{ mySquare: { color: 'red', area: 400 } }

// However, a better approach to the above which might be to add a string index signature 
// if you’re sure that the object can have some extra properties that are used in some special way. 
// If SquareConfig can have color and width properties with the above types, 
// but could also have any number of other properties, then we could define it like so:

interface SquareConfig2 {
    color?: string;
    width?: number;
    [propName: string]: any;
}

// Here what we’re saying above is that SquareConfig can have any number of properties, 
// and as long as they aren’t color or width, their types don’t matter.