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

// You can declare a type parameter that is constrained by another type parameter. 
// For example, here we’d like to get a property from an object given its name. 
// We’d like to ensure that we’re not accidentally grabbing a property that does not exist on the obj, 
// so we’ll place a constraint between the two types:

function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}
 
let x = { a: 1, b: 2, c: 3, d: 4 };
 
getProperty(x, "a");
// getProperty(x, "m"); //error

//Generic Parameter Defaults

// In TypeScript, you can provide default values for generic type parameters 
// using the = defaultType syntax. This allows you to specify 
// a default type that will be used when the generic type parameter is not explicitly provided.

class GenericNumber<NumType = number> {
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;

  constructor(zeroValue: NumType, add: (x: NumType, y: NumType) => NumType) {
      this.zeroValue = zeroValue;
      this.add = add;
  }
}

// Example usage with default type number
const numberInstance = new GenericNumber(0, (x, y) => x + y);

// Example usage with a different type (string)
const stringInstance = new GenericNumber<string>("zero", (x, y) => x + y);

// In this above example, NumType is the generic type parameter, and its default value is set to number. This means 
// that if you create an instance of GenericNumber without explicitly specifying the generic type, 
// it will default to using number. However, one can still provide a different type explicitly when needed.

//The keyof type operator