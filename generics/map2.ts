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

let option2: FeatureOptions = {darkMode: true, newUser: false}; //before the change


