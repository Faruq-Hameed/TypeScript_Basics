// Typescript Type template

var person = {
    name: 'John',
    age: 21,
}

// person.greet= function (){ //not possible in TS for concrete object like Person
//     console.log(person.name);
// }

// If you use the same code above in Typescript the compiler gives an error. 
// This is because in Typescript, concrete objects should have a type template. 
// Objects in Typescript must be an instance of a particular type.

// You can solve this by using a method template in declaration.
var person2 = {
    name: 'John',
    age: 21,
    greet:function(){ } //type literal
}

person2.greet = function(){
    console.log("hello "+person2.name)
}
person2.greet()

var person3 = {
    firstName:"Tom", 
    lastName:"Hanks", 
    sayHello:function(school: "UI" | "OAU") { 
        console.log(`Hello ${this.firstName} from ${school}`)
     }  //Type template 
 } 
//  person3.sayHello = function() {  
//     console.log("hello "+person3.firstName)
//  }  
 person3.sayHello("OAU")

