const arr = [1, 2, 3, 4, 5]

//Stack - LIFO
arr.push(6)
let popped = arr.pop()
console.log(arr)
console.log(popped)


// Queues - FIFO

const bankQueue = [1, 2, 3, 4, 5]
bankQueue.push(6)
let first = bankQueue.shift()
console.log(bankQueue)

// Insert front
const arr3 = [1,2]
arr3.unshift(0)
console.log(arr3) //opposite of push, inserts at the beginning