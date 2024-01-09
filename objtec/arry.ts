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
    value.length = 0
    console.log({value})
    value.length= 5;
    value = value
    console.log({value})

}

doSomething(boxA.contents)