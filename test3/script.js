var greetings = 'Hello';
// function padLeft(padding: number | string, input: string): string {
//     throw new Error("Not implemented yet!");
//   }
//   Argument of type 'string | number' is not assignable to parameter of type 'number'.
//   Type 'string' is not assignable to type 'number'.
//   function padLeft(padding: number , input: string) {
//     return "hello.".repeat(padding) + input;
//   }
console.log(padLeft(5, 'hello world'));
//narrowing to check implicitly
function padLeft(padding, input) {
    if (typeof padding === "number") {
        var paddingNum = padding;
        return " ".repeat(padding) + input;
        // padding.push(input);
    }
    return padding + input;
}
var str = '1';
var str2 = str; //str is now of type number 
console.log(typeof (str2));
function padLeft_two(padding, input) {
    if (typeof padding === "number") {
        return " ".repeat(padding) + input;
        // (parameter) padding: number
    }
    return padding + input;
    // (parameter) padding: string
}
// function printAll(strs: string | string[] | null) {
//   if (typeof strs === "object") {
//     for (const s of strs) {
// // 'strs' is possibly 'null'.
//       console.log(s);
//     }
//   } else if (typeof strs === "string") {
//     console.log(strs);
//   } else {
//     // do nothing
//   }
// }
var checkNull = null;
console.log('typeof checkNull : ' + typeof checkNull);
// both of these result in 'true'
Boolean("hello"); // type: boolean, value: true
!!"world"; // type: true,    value: true
var isBoolean = Boolean("hello");
var isBooleanTwo = !!"world";
// isBooleanTwo = ''
console.log("isBoolean : ", isBoolean == isBooleanTwo);
console.log("isBooleanTwo : " + isBooleanTwo);
function example(x, y) {
    if (x === y) {
        // We can now call any 'string' method on 'x' or 'y'.
        x.toUpperCase();
        // (method) String.toUpperCase(): string
        y.toLowerCase();
        // (method) String.toLowerCase(): string
    }
    else {
        console.log(x);
        // (parameter) x: string | number
        console.log(y);
        // (parameter) y: string | boolean
    }
}
function multiplyValue(container, factor) {
    // Remove both 'null' and 'undefined' from the type.
    if (container.value != null) {
        console.log(container.value);
        // (property) Container.value: number
        // Now we can safely multiply 'container.value'.
        container.value *= factor;
    }
}
