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
      return " ".repeat(padding) + input;
    }
    return padding + input;
  }