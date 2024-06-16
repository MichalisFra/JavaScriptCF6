//1
const ogArray = [-1, 1,2,3,4,5]
const mappedArr = ogArray.map(value => value*2)

console.log('OG: ' + ogArray + ' Mapped: ' + mappedArr)

//2
const evenArr = ogArray.filter(value => value % 2===0)

console.log("Evens: " + evenArr)

//3

const hasOnePos = ogArray.some(value => value >=0)
console.log("Has at least one positive: "+ hasOnePos)

//4
const hasAllPos = ogArray.every(value => value >= 0)
console.log("All numbers are positive: " + hasAllPos)