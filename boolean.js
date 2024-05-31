let b1 = true
let b2 = new Boolean(false)
let b3 = Boolean("1")

//Falsy
// 0, 0.0, 0n
//"", '',``
//null, undefined, NaN
//Truthy: everything else

console.log("1 is: ", Boolean(1))                          //true
console.log("0 is: ", Boolean(0))                         //false
console.log("Empty string: ", Boolean(""))               //false
console.log("Null is: ", Boolean(null))                 //false
console.log("Undefined is: ", Boolean(undefined))       //false
console.log("Object is: ", Boolean({}))                 //true
console.log("Array is: ", Boolean([]))                  //true
console.log("Boolean object: ", Boolean(new Boolean(false))) // true

while(1) {   //eternal loop (w/o break)
    break
}

do {
    console.log("Hello CF!")  //runs once
}while(0)

for(;1;) {
    console.log("Hello Again!")  //eternal loop (w/o break)
    break
}