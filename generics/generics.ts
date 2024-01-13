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
We say that this version of the identity function is generic, as it works over a range of types. 
Unlike using any, it’s also just as precise (i.e., it doesn’t lose any information) 
as the first identity function that used numbers for the argument and return type.