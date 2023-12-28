// In JavaScript, the fundamental way that we group and pass around data 
// is through objects. In TypeScript, we represent those through object types.


//they can be anonymous as used in the function below:
function greetOne(person: { name: string; age: number }) {
    return "Hello " + person.name;
  }

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