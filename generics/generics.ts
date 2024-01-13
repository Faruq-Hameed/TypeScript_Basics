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

// What if we want to also log the length of the argument arg to the console with each call? 
// We might be tempted to write this:

function loggingIdentity<Type>(arg: Type): Type {
//   console.log(arg.length);//error: / Property 'length' does not exist on type 'Type'.

  return arg;
}

function loggingId<Type extends {length: number}>(arg: Type): Type{
    console.log(arg.length)
    return arg;
}

let logging = loggingId({age: 0, length: 0});
let loggingB = loggingId("hello world");

function loggingIdentityB<Type>(arg: Type[]): Type[] {
    console.log(arg.length);
    return arg;
  }

function loggingIdentityC<Type>(arg: Array<Type>): Array<Type> {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}

// You can read the type of the loggingIdentities as “the generic function loggingIdentity takes a type parameter Type, 
// and an argument arg which is an array of Types, and returns an array of Types.


//Generic Types

// The type of generic functions is just like those of non-generic functions, 
// with the type parameters listed first, similarly to function declarations:

function identityFunc<Type>(arg: Type): Type{
    return arg;

}

let myIdentity: <Type>(arg: Type) => Type = identityFunc;

// We could also have used a different name for the generic type parameter in the type, 
// so long as the number of type variables and how the type variables are used line up.

function identityFuncB<input>(arg: input) : input {
    return arg;
}

let myIdentityB: <input>(arg: input) => input = identityFuncB

//We can also write the generic type as a call signature of an object literal type:

function identityFuncD<Type>(arg: Type): Type {
    return arg;
  }

const myIdentityD: {<Type> (arg: Type) : Type} = identityFuncD

//writing generic interface

interface GenericIdentityFn {
    <Type>(arg: Type): Type;
}

function genericIdentity<Type>(arg: Type) : Type{
    return arg;
}

let myIdentityFn: GenericIdentityFn = genericIdentity

// In a similar example, we may want to move the generic parameter to be a parameter of the whole interface. 
// This lets us see what type(s) we’re generic over (e.g. Dictionary<string> rather than just Dictionary). 
// This makes the type parameter visible to all the other members of the interface.

interface GenericIdentityFnB<Type>{
    (arg: Type) : Type;
}

function genericIdentityB<Type>(arg: Type) : Type{
    return arg;
}
let myIdentityFnB: GenericIdentityFnB<string> = genericIdentityB

// In addition to generic interfaces, we can also create generic classes. 
// Note that it is not possible to create generic enums and namespaces.

// Generic Classes
// A generic class has a similar shape to a generic interface. 
// Generic classes have a generic type parameter list in angle brackets (<>) following the name of the class.

class GenericNumber<NumType>{
    zeroValue: NumType;
    add: (x: NumType, y: NumType) => NumType;
    constructor( zeroValue: NumType, add : (x: NumType, y: NumType) => NumType){
        this.zeroValue = zeroValue
        this.add = add
    }
}

let myGenericNumber = new GenericNumber<number>()

myGenericNumber.zeroValue = 0
myGenericNumber.add = (x: number, y: number) => {
    console.log(`adding ${x} to ${y} = `, x + y)
    return x + y
}
myGenericNumber.add(8, 7)


