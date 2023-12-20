
// generics are all about relating two or more values with the same type!
function longest<Type>(arr: Type): Type | String {
    if(typeof arr === 'string'){ 
       return   `a ${arr.length}`;
    }
return arr;
}

//Constraints
// We constrain the type parameter to that type by writing an extends clause as used below
function longArr<Value, Type extends { length: Value, age: Value}>(a: Type, b: Type) {
    if (a.length >= b.length) {
        return a;
    }
    else {
        return b
    };
}

const longerArray = longArr({age: [0,1,2,8,78], length: -6}, {age: [0,1,2,8,78], length: -6.0});
   
// console.log({longerArray});

// const badArray = longArr(8, 9) //error

function longArry<Value, Type extends { length: number}>(a: Type, b: Type) {
    if (a.length >= b.length) {
        return a;
    }
    else {
        return b
    };
}

const longerString = longArry('alice', 'bob') // longerString is of type 'alice' | 'bob'

// const notOk = longArr(10, 20) //error

// We allowed TypeScript to infer the return type of longest as inferred above

