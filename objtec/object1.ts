// In JavaScript, the fundamental way that we group and pass around data 
// is through objects. In TypeScript, we represent those through object types.


//they can be anonymous as used in the function below:
function greetOne(person: { name: string; age: number }) {
    console.log({person})
    return "Hello " + person.name;
  }

  let person = {
    name: "John",
    age: 42
  }
  greetOne(person )

//   or they can be named by using either an interface:

interface Person {
  name: string;
  age: number;
}
 
function greetTwo(person: Person) {
  return "Hello " + person.name;
}

// or using type alias

type PersonType= {
    name: string;
    age: number;
}

function greetThree(person: Person){
    return 'hello ' + person.name
}

// Property Modifiers
// Each property in an object type can specify a couple of things: 
// the type, whether the property is optional, and whether the property can be written to.

//Optional properties  by adding a question mark (?) to the end of their names.

interface OptionalProperty{
    shape: string;
    xPos?: number;
    yPos?: number;
}

function optionalProperty(obj: OptionalProperty){
    console.log(obj.shape)
    console.log(obj.xPos)!
    if(obj.xPos === 3){

    }
    console.log(obj.yPos)
}
optionalProperty({shape:'square'})

// We can also read from those properties - but when we do under strictNullChecks (adding ! at the end), 
// TypeScript will tell us they’re potentially undefined.

function optionalPropertyTwo(obj: OptionalProperty){
   let x = obj.xPos;
   x.toString()
    console.log(obj.yPos)
}

// We can just handle undefined specially by checking for it.
function optionalPropertyThree(obj: OptionalProperty){
    let x = obj.xPos === undefined? 0: obj.xPos; // x will be number
    x.toString()
     console.log(obj.yPos)
 }

//  Note that this pattern of setting defaults for unspecified values is so common 
//  that JavaScript has syntax to support it.

function optionalPropertyFour({shape, xPos = 0, yPos = 0}: OptionalProperty){ //setting defaults for optional properties
    xPos.toString() //
    console.log(xPos)// type of x is a number not number | undefined
}

// Note that there is currently no way to place type annotations within destructuring patterns. 
// This is because the following syntax already means something different in JavaScript.

// function optionalPropertyFive({shape: Shape, xPos: number, yPos: number}){
//     // render(shape);

// }

// In an object destructuring pattern, shape: Shape means 
// “grab the property shape and redefine it locally as a variable named Shape. 
// Likewise xPos: number creates a variable named number whose value is based on the parameter’s xPos.
//variable named number is redeclare twice according to the interpretation above.


// readonly Properties
// readonly can’t be written to during type-checking.

interface readonlyProp{
    readonly prop: string;
    age: number;
}

function readonlyFunction( obj: readonlyProp) {
    let person = obj;
    person.age = obj.age + 2;
    console.log(person.prop); // we can read but cannot  write

    person.prop = obj.prop + 'hello'; //Cannot assign to 'prop' because it is a read-only property
  
}


// Using the readonly modifier doesn’t necessarily imply that a value is totally immutable. 
// It just means the property itself can’t be re-written to.

interface homeResident{
    readonly resident: {name: string, age: number}
}

function updatingResident(home: homeResident){
    // We can read and update properties from 'home.resident'.
    console.log(`reading the resident ${home.resident.name}`) 
    console.log(`reading the resident ${home.resident.age}`) 
    home.resident.name = `resident ${home.resident.name}`

 // But we can't write to the 'resident' property itself on a 'Home'.  
    home.resident = { //Cannot assign to 'resident' because it is a read-only property.
        name: 'resident',
        age: 9
    }
}