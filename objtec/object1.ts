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