// Index Signatures
//sometimes we don't know the name of some properties 

type Org = {[key: string] : boolean}

const organization: Org = {}

organization.name = !!"Logrocket"

organization.age = !'five'
organization.pg = !'ibadan'

console.log({organization})

// Moreover, note that you could type key with other primitives:

// number 
type OrgOne = {[key: number] : string}

// string 
type OrgTwo = {[key: string] : string}

type objTwo = {[key: number]: number}

const obj : objTwo = {}

obj['0'] = 9
obj['2'] = 88

const variable = "name"

const objThree = {
    variable: "faruq"
}

console.log({objThree}) // { variable: 'faruq' }

const objFour = {
    [variable]: "faruq"
}
console.log({objFour}) // { name: 'faruq' }

// The TypeScript concept  practiced above is called an object index signature.

// Instead of using a type alias, you can also inline the type:
const objTrial : {[key: string] : string} = {}

objTrial.name = "faruq"

objTrial['age'] = 'five'

console.log({objTrial})

const objTrials : {[key: string] : object} = {}

interface readOnly  {
    readonly name: string,
}

const readonlyObjTrial : readOnly = {
    name: 'readonly'
}
console.log()
objTrials.unread = {readonlyObjTrial}
// readonlyObjTrial.name = 'hhhh' //error
objTrials.name = {}
console.log('objTrials.ahr ": ', objTrials.ahhh) //loosed type. I was expecting error

console.log()

const test : {[key: string] : string} = {}
const obj2 = {
    name: 'faruq'
}

// console.log('test.age = ', test.age.toLowerCase()) //error at compile time


// Use the Record Utility Type

// The Record utility type allows you to constrict an object type 
// whose properties are Keys and property values are Type. 
// It has the following signature: Record<Keys, Type>.

type ObjType  = Record<string, string>;

const objA : ObjType = {};
objA.name = 'faruq'

//the record utility type also works like the index signature types.

// Instead of using a type alias, you can also inline the type:

let company : Record<string, string> = {}
company.name = 'faruq'



// Use the Map data type

// A Map object is a fundamentally different data structure from an object, but for completeness, 
// you could eliminate this problem if you were using Map.
// before 
const organizationTwo = {}
// organizationTwo.name = "Logrocket"  //error
const organizationThree = new Map()

organizationThree.set("name","Logrocket")

console.log({organizationThree})
console.log("typeof organizationThree === " + organizationThree)

console.log('organizationThree.get("age") === "' + organizationThree.get("age"))
console.log('organizationThree.get("name") === "' + organizationThree.get("name"))
console.log('typeof organizationThree.get("name") === "' + typeof organizationThree.get("name"))


