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

// For each interpolated position in the template literal, the unions are cross multiplied:
type AllLocaleIDs = `${EmailLocalIDs | FooterLocaleIDs}_id`;
type Lang = "en" | "ja" | "pt";

/**type LocaleMessageIDs = "en_welcome_id" | "en_heading_id" | "en_footer_id" | "en_sendoff_id" 
 * | "ja_welcome_id" | "ja_heading_id" | "ja_footer_id" | "ja_sendoff_id" 
 * | "pt_welcome_id" | "pt_heading_id" | "pt_footer_id" | "pt_sendoff_id" */
type LocaleMessageIDs = `${Lang}_${AllLocaleIDs}`;   //

/**Topics to be studied later */
//String Unions in Types
//Inference with Template Literals


//Intrinsic String Manipulation Types
//This help with string manipulation in TS
// These types come built-in to the compiler for performance and can’t be found 
// in the .d.ts files included with TypeScript.

//Uppercase<StringType> This Converts each character in the string to the uppercase version.

type Person = "faruq"

type UpperPerson = Uppercase<Person>

let person : UpperPerson = 'FARUQ'
// let person : UpperPerson = 'FARUQ'//error code


type ASCIICacheKey<Str extends string> = `ID-${Uppercase<Str>}`

/**
 * type MainID = "ID-MY_APP"
 */
type MainID = ASCIICacheKey<"my_app">


//Lowercase<StringType>: Converts each character in the string to the lowercase equivalent.

type Greeting = "Hello, WORLD!"

/**type QuietGreeting = "hello, world!" */
type QuietGreeting = Lowercase<Greeting>

type ASCIICacheKey2<Str extends string> = `id-${Lowercase<Str>}`;
/**type MainID2 = "id-my_app"
 */
type MainID2 = ASCIICacheKey2<"MY_APP">

// Capitalize<StringType>:Converts the first character in the string to an uppercase equivalent.

type LowercaseGreeting = "hello, world";
/**type Greeting2 = "Hello, world"
 */
type Greeting2 = Capitalize<LowercaseGreeting>;
