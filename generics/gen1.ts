// Indexed Access Types
// We can use an indexed access type to look up a specific property on another type:

type Person = {age: number, name: string, alive: boolean}

type Age = Person['age']
// type AgeA = Person[0] //error code, i cannot access the properties by there index like an array
// type AgeB = Person['age', 'alive'] //error code, only a single property can be accessed


