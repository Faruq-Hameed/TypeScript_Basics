//The Array Type

// Whenever we write out types like number[] or string[], 
// that’s really just a shorthand for Array<number> and Array<string>.

interface Box<T>{
    contents: T
}

let box: Box<number[]>= {contents: [1, 2,5, ]}

let boxA: Box<Array<number>>={
    contents: [1, 2, 5]
}

let boxB: Box<Array<string>> = {contents: ['a', 'b']}

function doSomething(value: Array<number>): void {
    console.log({value})

}

doSomething(boxA.contents)

doSomething(new Array(1, 2))

function doSomethingA(value: Array<string>): void {
    console.log({value})

}

doSomethingA(new Array("a", "b", "c", "d"))

//The ReadonlyArray Type