// // Template Literal Types;

 /** Template literal types build on string literal types, 
 and have the ability to expand into many strings via unions.
 They have the same syntax as template literal strings in JavaScript, 
 but are used in type positions. When used with concrete literal types, 
 a template literal produces a new string literal type by concatenating the contents. */

type World = 'world';
/**type Greetings = "hello world" */
type Greetings = `hello ${World}`

/*When a union is used in the interpolated position, 
the type is the set of every possible string literal that could be represented by each union member: */

type EmailLocalIDs = 'welcome' | 'heading'
type FooterLocaleIDs = "footer" | "sendoff";

/**type AllLocalIDs = "welcome_id" | "heading_id" | "footer_id" | "sendoff_id" */
type AllLocalIDs = `${EmailLocalIDs | FooterLocaleIDs}_id`; //_id will be concatenated with each one

let localIDs : AllLocalIDs = 'heading_id'
// let localIDs2 : AllLocalIDs = 'heading' //error code

