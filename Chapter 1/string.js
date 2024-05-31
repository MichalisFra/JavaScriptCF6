let s1 = "AUEB1"
let s2 = new String("AUEB2")
let s3 = String(3)
let s4 = 'AUEB4'
let s5 = `AUEB5`
let s6 = `This is

an example of
a template literal, first introduced in JS
with version ES6.`

console.log(s1)
console.log(s2)
console.log(s3)
console.log(s4)
console.log(s5)
console.log(s6)

const aueb = "AUEB"
//aueb = "AUEB other"   //error, since a const can't be changed

let myAueb = "Athens Uni of Econ and Bus"

let outStr = ""
for (let letter of myAueb) {
    outStr += letter
    
}
console.log(outStr)