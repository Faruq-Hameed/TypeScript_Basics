// Parameter type annotation
function greet(name: string) {
    console.log("Hello, " + name.toUpperCase() + "!!");
  }

  //return type annotation
  function getFavoriteNumber(): number {
    return 26;
  }

  //promise type annotation
  async function getFavoriteNumber2(): Promise<string> {
    return 'favorite';
  }

  const names = ["Alice", "Bob", "Eve"];
  const nums = [1, 2, 3, 4, 5, 6, 7]
 
// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
  console.log(s.toUpperCase());
});
 
// Contextual typing also applies to arrow functions
names.forEach((s) => {
  console.log(s.toUpperCase());
  s + 2
});
