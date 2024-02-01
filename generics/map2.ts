// When you don’t want to repeat yourself, sometimes a type needs to be based on another type.
// Mapped types build on the syntax for index signatures, 
// which are used to declare the types of properties which have not been declared ahead of time:

// A mapped type is a generic type which uses a union of PropertyKeys 
// (frequently created via a keyof) to iterate through keys to create a type:

type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

// / In this example, OptionsFlags will take all the properties 
// from the type Type and change their values to be a boolean.

interface OptionsFunc {
    darkMode: ( )=> void;
    newUser: ( )=> void;
}
function dark (){

}
function user (){
    
}

let options: OptionsFunc = {darkMode: dark, newUser: user}; //before the change

type FeatureOptions = OptionsFlags<OptionsFunc>; //using the same type but with updated properties types

// let option2: FeatureOptions = {darkMode: dark, newUser: user}; //error code

let option2: FeatureOptions = {darkMode: true, newUser: false}; //updated properties types


// Mapping Modifiers
// There are two additional modifiers which can be applied during mapping: 
// readonly and ? which affect mutability and optionality respectively.

// You can remove or add these modifiers by prefixing with - or +. If you don’t add a prefix, then + is assumed.

// Removes 'readonly' attributes from a type's properties
type CreateMutable<Type> ={
    -readonly [Property in keyof Type ]: Type[Property] //remove readonly properties from a type
}

type LockedAccount = {
    readonly id: number,
    readonly name: string
}

let lockedAcct: LockedAccount = {
    id: 6,
    name: "Faruq"
}

// lockedAcct.id = 7 //Cannot assign to 'id' because it is a read-only property.ts(2540)

type UnlockedAccount = CreateMutable<LockedAccount> //all the immutable properties now mutable 

let unlockedAcct: UnlockedAccount = { //this is mutable because we have removed the read-only property
    id: 6,
    name: "Faruq"
}
unlockedAcct.id = 7

type LockedAccount2 = {
    readonly id: number,
    name: string
}

type UnlockedAccount2 = CreateMutable<LockedAccount> //all the immutable properties(if any) now mutable 

let unlock2 : UnlockedAccount2 = {
    id: 9,
    name: "unlocked"
}

unlock2.id = 91

//creating immutable types
type CreateImmutableAccount<Type> = {
    +readonly [Prop in keyof Type] : Type[Prop]
}

type NeverUnlocked = CreateImmutableAccount<UnlockedAccount>; // all properties are immutable now in this type

let neverUnlock: NeverUnlocked = { //immutable object
    id: 7,
    name: 'faruq'
}

// neverUnlock.name = 'faruq'// not possible because all properties are immutable

// Removes 'optional' attributes from a type's properties

type Concrete<T> = {
    [P in keyof T]-? : T[P] // all optional properties are made mandatory
}

type Person = {
    age: number,
    level: string,
    id?: string | number // optional property
}

let faruq: Person = {
    age: 1,
    level: 'PG'
}

type MandatoryPerson = Concrete<Person> //all properties now mandatory

// let faruq2: MandatoryPerson = { //error object
//     age: 1,
//     level: 'PG'
// }

let faruq2: MandatoryPerson = { //accepted
    age: 1,
    level: 'PG',
    id: 8
}

type OptionalType<T> = {
    [P in keyof T]? : T[P] //all properties of T will be optional
}

type OptionalPerson = OptionalType<Person>; //all properties are optional

let bola : OptionalPerson = {age: 7} //all properties are optional


// Key Remapping via as

// In TypeScript 4.1 and onwards, you can re-map keys in mapped types with an as clause in a mapped type:

type MappedTypeWithNewProperties<Type> = {
    [Prop in keyof Type as NewKeyType]: Type[Prop]
}
