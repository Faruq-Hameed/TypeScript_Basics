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
interface BoxTypeD<Type, TypeB>{
  contents: Type
  readonly content: TypeB
}

let boxTypeD : BoxTypeD<string, number[]> = {
   content: [],
  contents: 'ggg'

}
boxTypeD.content.push(9)
// boxTypeD.content= 8
// You might read this as “A Box of Type is something whose contents have type Type”. 
// Later on, when we refer to Box, we have to give a type argument in place of Type.

let boxType: BoxType<string>;
boxType = {
   contents: null?? "world"
}
// boxType.contents = 'box'

console.log({boxType})
// In other words, Box<string> and our earlier StringBox work identically.

let boxA: BoxType<string> = {contents: 'hello world'}
boxA.contents; //(property) BoxType<string>.contents: string

let boxB :StringBox = {contents: 'hello world'}
boxB.contents; //(property) StringBox.contents: string

let boxC : BoxType<number[]> = {contents: [9]} // the BoxType can be reused at anytime
// Box is reusable in that Type can be substituted with anything. 
// That means that when we need a box for a new type, we don’t need 
// to declare a new Box type at all as we did above with boxC (though we certainly could if we wanted to).

console.log(boxB.contents)


type Boxes<Type> ={ // we can also use it with type alias but interface is mostly used for objects
contents: Type
}

let boxesA : Boxes<string> = {contents: 'hello world'}
let boxesB : Boxes<any[]> = {contents: ['hello world', 9]};

interface BoxChecks <Type> {
  contents: Type;
}

interface Apple{
  contents: string;
}

// Same as '{ contents: Apple }'.
type AppleBox = BoxChecks<Apple>


// This also means that we can avoid setContents overloads entirely by instead using generic functions.
/*
function setContents(box: StringBox, newContents: string): void;
function setContents(box: BooleanBox, newContents: boolean): void;
function setContents(box: NumberBox, newContents: number): void;
function setContents(box: any, newContents: any): void{
  box.contents = newContents;
}

interface BoxType<Type>{
   contents: Type
}
*/ 

function setContentsTwo <Type>(box: BoxType<Type>, newContents: Type): void {
  box.contents = newContents;
}

// It is worth noting that type aliases can also be generic

interface Faruq {
level: string;
}

type BoxTypeTwo <Type> = {
  contents: Type;
}

let boxTypeE : BoxTypeTwo<string> = {  contents: "hello E"}

type BoxTypeF<Type> = Faruq & BoxTypeTwo<Type> //using intersection

let boxTypeF : BoxTypeF<string> = {level: 'five', contents: "hello F"}

type BoxTypeG<Type> = typeof boxTypeF & {pg: Type, age: number}

let boxTypeG : BoxTypeG<string[]> = { level: 'five',pg: ["a"], age: 8, contents:"hello G"}


// Since type aliases, unlike interfaces, can describe more than just object types, 
// we can also use them to write other kinds of generic helper types.

type OrNull<Type> = Type | boolean | null

let nullT: OrNull <string> = !!undefined //type string but string, boolean, or null can be passed

console.log({nullT}) //{ nullT: false }

type OneOrMany<Type> = Type | Type[]

let oneOrManyT: OneOrMany<number> = 9
let oneOrManyB: OneOrMany<number[]> = [9]

type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>> //generic types can be passed as arguments to another