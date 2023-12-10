var sym = Symbol('hello');
var imp = '' || 9;
imp.age = 1;
console.log(imp);
imp = 'hello';

let check = [9, 'hello', {age: 8}]

check[2].age = 'hello';
console.log(check)
