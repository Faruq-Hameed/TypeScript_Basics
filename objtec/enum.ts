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

let directionA : DirectionA = DirectionA.Up

console.log(typeof directionA) // 0


// String-based enums allow you to use strings as values:

enum Colors {
    RED = 'red',
    BLUE = 'blue',
    YELLOW = 'yellow',
    GREEN = 'green',
}

let colors : Colors = Colors.RED

console.log(colors) //

// Enums in TypeScript offer both forward (enum value to name) and reverse (enum name to value) mappings. 
// You can convert between them using the enum members:

let directionName: string = Direction[0]; // "Up"
let directionNameA: string = DirectionA.Down; // "Up"
// let directionValue: Direction = Direction["back"]; // 1 i.e assigned the value to directionValue

console.log({directionName}, )
