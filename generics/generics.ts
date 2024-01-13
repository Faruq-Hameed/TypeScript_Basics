// //Hello World of Generics

// /The identity function
// The identity function is a function that will return back whatever is passed in. 
// You can think of this in a similar way to the echo command.

function identity(arg: number) : number {
    return arg
}
// Without generics, we would either have to give the identity function above a specific type:

