const arr = [1000, 345, 678, 5, 15, 55, 345, 2115]
arr.sort(function(a, b) {
    return a - b
})
console.log(arr)


// a - b  explained
//if (a > b) return 1
// else if (a < b) return -1
// else return 0