var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function () {
        console.log("Hello World!!!");
    };
    Greeting.prototype.languages = function () {
        console.log("english, spanish");
    };
    return Greeting;
}());
var obj = new Greeting();
var lang = new Greeting();
//  obj.greet();
lang.languages();
