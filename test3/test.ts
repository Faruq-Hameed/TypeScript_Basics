// function padLeft(padding: number | string, input: string): string {
//     throw new Error("Not implemented yet!");
//   }



//   Argument of type 'string | number' is not assignable to parameter of type 'number'.
//   Type 'string' is not assignable to type 'number'.
//   function padLeft(padding: number , input: string) {
//     return "hello.".repeat(padding) + input;
//   }
  console.log(padLeft(5, 'hello world'))

//narrowing to check implicitly
  function padLeft(padding: number | string, input: string) {
    if (typeof padding === "number") {
      const paddingNum = padding
      return " ".repeat(padding) + input;

      // padding.push(input);
    }
    return padding + input;
  }

  var str = '1' 
var str2:number = <number> <any> str   //str is now of type number 
console.log(typeof(str2))


function padLeft_two(padding: number | string, input: string) {
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

const checkNull : null = null;

console.log('typeof checkNull : ' + typeof checkNull)

type checkNullType = null;

// both of these result in 'true'
Boolean("hello"); // type: boolean, value: true
!!"world"; // type: true,    value: true
const isBoolean = Boolean("hello");
let isBooleanTwo = !!"world"
// isBooleanTwo = ''

console.log("isBoolean : " , isBoolean == isBooleanTwo);
console.log("isBooleanTwo : " + isBooleanTwo);
