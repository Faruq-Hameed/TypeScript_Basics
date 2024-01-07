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