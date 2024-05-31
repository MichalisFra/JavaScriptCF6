let s1 = "Athens Uni of Econ and Bus"

let subStrWhole = s1.substring(0)
let SubStr = s1.substring(0, 6)
let sliced = s1.slice(0, 6)

let alphaUpper = s1.charAt(0)
let indexOfU = s1.indexOf("U")
let lastIndexOfs = s1.lastIndexOf("s")

let sUpdated = s1.replace("Uni", "University")
let upperS = s1.toUpperCase()
let lowerS = s1.toLowerCase()

let s2 = "Athens Uni of Econ and Bus"

if(s1.toLowerCase() === s2.toUpperCase()) {
    console.log("Strings are Equal")
}else {
    console.log("Strings are NOT Equal")
}

let s3 = "   Coding   "
let trimmed = s3.trim()
//trimStart()
//trimEnd()


//concat
let s4 = s1 + s2
let s5 = s1.concat(s2)

console.log(s1)
console.log(s2)
console.log(s3)
console.log(trimmed)
console.log(s4)
console.log(s5)
console.log(upperS)
console.log(lowerS)