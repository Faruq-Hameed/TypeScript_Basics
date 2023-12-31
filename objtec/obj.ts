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
