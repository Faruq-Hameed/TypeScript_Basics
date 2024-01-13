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
