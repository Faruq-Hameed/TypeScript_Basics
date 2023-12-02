var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function () {
        console.log("Hello World!!!");
    };
    return Greeting;
}());
var obj = new Greeting();
obj.greet();
var msg = "Hello World";
var fName;
fName = 'Faruq';
fName = 6;
var lName = "John";
var score1 = 50;
var score2 = 42.50;
var sum = score1 + score2;
console.log("name" + lName);
console.log("first score: " + score1);
console.log("second score: " + score2);
console.log("sum of the scores: " + sum);
var num = 2; // data type inferred as  number 
console.log("value of num " + num);
num = "12";
console.log(num);
