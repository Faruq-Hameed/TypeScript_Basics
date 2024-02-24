class Greeting { 
    greet():void { 
       console.log("Hello World!!!") 
    } 
 } 
 var obj = new Greeting(); 
//  obj.greet();

 let msg = "Hello World"

//  var fName;

var fName: any = 'Faruq'

//  fName=6
console.log("typeof fName : ", typeof fName)
//  var lName:string = "John"; 
// var score1:number = 50;
// var score2:number = 42.50
// var sum = score1 + score2 
// console.log("name"+lName) 
// console.log("first score: "+score1) 
// console.log("second score: "+score2) 
// console.log("sum of the scores: "+sum)

// var num = 2;    // data type inferred as  number 
// console.log("value of num "+num); 
// num = "12";
// console.log(num);

// let obj: any = { x: 0 };
let val = 'hhhhhh';
console.log('typeof !!"world" : ' , typeof !!val, {val})
// !!"world"

var str = '1' 
var str2:number = <number> <any> str   //str is now of type number 
console.log(typeof(str))
const isBoolean2 = Boolean("hello");
console.log('typeof isBoolean2 : ' , typeof isBoolean2, {isBoolean2})

