// Indexed Access Types
// We can use an indexed access type to look up a specific property on another type:

type Person = {age: number, name: string, alive: boolean}

type Age = Person['age', 'alive']
// type AgeA = Person[0] //error code, i cannot access the properties by there index like an array