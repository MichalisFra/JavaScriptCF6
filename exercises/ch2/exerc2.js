//1
const userTable = [{fname: "a", age: 10},{fname: "b", age: 32},{fname: "c", age: 44},]

const earlyAdults = userTable.filter(user => user.age <= 30)

console.log(earlyAdults)


//2
const onlyNames = userTable.map(user => user.fname)
console.log(onlyNames)