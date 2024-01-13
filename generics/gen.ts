//Generic Constraints

interface Lengthwise {
    length: number;
  }
   
  function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
  }
//   Because the generic function is now constrained, it will no longer work over any and all types:

// loggingIdentity(3); //error
// Argument of type 'number' is not assignable to parameter of type 'Lengthwise'.

// Instead, we need to pass in values whose type has all the required properties:

loggingIdentity({ length: 10, value: 3 });

//Using Type Parameters in Generic Constraints

You can declare a type parameter that is constrained by another type parameter. 
For example, here we’d like to get a property from an object given its name. 
We’d like to ensure that we’re not accidentally grabbing a property that does not exist on the obj, 
so we’ll place a constraint between the two types:

function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}
 
let x = { a: 1, b: 2, c: 3, d: 4 };
 
getProperty(x, "a");
getProperty(x, "m");
