// In TypeScript, an enum is a way to define a set of named constant values. 
// Enums allow you to define a collection of related values with meaningful names, 
// making your code more readable and maintainable. 
// Enums in TypeScript can be numeric or string-based.

//Numeric enum example

enum Direction{
    Up,
    Down,
    Left,
    Right
}

// In this example, Direction is a numeric enum where Up is assigned the value 0, Down is assigned 1, and so on. 
// You can also manually assign values to enum members:

enum DirectionA {
    Up = 1,
    Down = 2,
    Left = 3,
    Right = 4
}

let direction : Direction = Direction.Up

console.log(direction) // 0