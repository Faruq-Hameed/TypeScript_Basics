// Conditional Type Constraints
// Often, the checks in a conditional type will provide us with some new information. 
// Just like narrowing with type guards can give us a more specific type, 
// the true branch of a conditional type will further constrain generics by the type we check against.

// For example, let’s take the following:

// type MessageOf<T> = T['message'] //error code" Type '"message"' cannot be used to index type 'T'.

// In this example above, TypeScript errors because T isn’t known to have a property called message. 
// We could constrain T, and TypeScript would no longer complain


type OnlyBoolsAndHorses = {
    [key: string]: boolean | "Horse";
  };
   
  const conforms: OnlyBoolsAndHorses = {
    del: true,
    rodney: false,
  };

