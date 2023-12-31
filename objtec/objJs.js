
//Javascript object refresh. Accessing objects properties in javascript
const objJs = {
    name: 'faruq',
    age: 18
}

objJs.name = 'Ajibola'
console.log(objJs.name)
const objJsTwo = {
    'name-1': 'faruq',
    '9': 18,
    age: 20,
    $wealth: true
}
const weirdObject = {
    'prop-3': 'three',
    '3': 'three'
  };
  
  weirdObject.prop-3; // => NaN

console.log(weirdObject.prop-3) 
console.log('objJsTwo["age"] : ', objJsTwo["age"] ) 
console.log('objJsTwo.$wealth : ', objJsTwo.$wealth ) 

console.log(objJsTwo['9']) 
