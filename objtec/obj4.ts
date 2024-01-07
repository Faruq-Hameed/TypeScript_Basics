// Generic Object Types

import { log } from "console";

interface Box {
    contents: unknown;
  }
   
  let x: Box = {
    contents: "hello world",
  };

  // x.contents = 9

  // we could check 'x.contents'
  if(typeof x.contents === "string"){
    console.log(x.contents.toUpperCase());
  }

  // or we could use a type assertion
  console.log((x.contents as string).toUpperCase(), 'ggggg');

  // One type safe approach would be to instead scaffold out different Box types for every type of contents.

interface NumberBox {
  contents: number
}

interface StringBox{
  contents: string
}

interface BooleanBox {
  contents: boolean
}

// But that means we’ll have to create different functions, or overloads of functions, to operate on these types.

function setContents(box: StringBox, newContents: string): void;
function setContents(box: BooleanBox, newContents: boolean): void;
function setContents(box: NumberBox, newContents: number): void;
function setContents(box: any, newContents: any): void{
  box.contents = newContents;
}

// That’s a lot of boilerplate. Moreover, we might later need to introduce new types and overloads. 
// This is frustrating, since our box types and overloads are all effectively the same.

// Instead, we can make a generic Box type which declares a type parameter.
//Generic type

interface BoxType<Type>{
contents: Type
}
// You might read this as “A Box of Type is something whose contents have type Type”. 
// Later on, when we refer to Box, we have to give a type argument in place of Type.

let boxType: BoxType<string>
boxType.contents = 'box'

