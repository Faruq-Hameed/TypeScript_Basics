// //Hello World of Generics

// /The identity function
// The identity function is a function that will return back whatever is passed in. 
// You can think of this in a similar way to the echo command.

function identity(arg: number) : number {
    return arg
}
// Without generics, we would either have to give the identity function above a specific type:
// Or, we could describe the identity function using the any type:
function identityA(arg: any) :any{
    return arg
}

// While using any is certainly generic in that it will cause the function 
// to accept any and all types for the type of arg, we actually are losing the information 
// about what that type was when the function returns. 
// If we passed in a number, the only information we have is that any type could be returned.

// Instead, we need a way of capturing the type of the argument in s
// uch a way that we can also use it to denote what is being returned. Here, we will use a type variable,
//  a special kind of variable that works on types rather than values.

//generic type

function identityB <Type>(arg: Type): Type{
    return arg 
}
// We say that this version (identityB) of the identity function is generic, as it works over a range of types. 
// Unlike using any, it’s also just as precise (i.e., it doesn’t lose any information) 
// as the first identity function that used numbers for the argument and return type.
//calling the identity function. we can call it in one of two ways;

//1) pass all of the arguments, including the type argument, to the function:
let output = identityB<string>('hello world'); //

// The second way is also perhaps the most common. Here we use type argument inference — that is, 
// we want the compiler to set the value of Type for us automatically based on the type of the argument we pass in:
let outputB = identityB("myString");

// While type argument inference as used in outputB can be a helpful tool to keep code shorter and more readable, 
// you may need to explicitly pass in the type arguments as we did in the previous example 
// when the compiler fails to infer the type, as may happen in more complex examples.


// Working with Generic Type Variables

What if we want to also log the length of the argument arg to the console with each call? We might be tempted to write this:

function loggingIdentity<Type>(arg: Type): Type {
  console.log(arg.length);
/
  return arg;
}
