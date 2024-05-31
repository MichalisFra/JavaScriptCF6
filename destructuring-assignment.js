let [a, b] = [1, 2]

console.log("a: ", a)
console.log("b: ", b)


let [c, d] = [10, 20]; //Destructuring assignment
[c, d] = [d, c]       //Destructuring assignment

console.log("c: ", c)

const user = {
    id: 1,
    firstname: "Alice",
    lastname: "W."
}

let {firstname, lastname} = user

// let { firstname: first, lastname: last} = user

console.log("firstname: " + firstname)
console.log("lastname: " + lastname)