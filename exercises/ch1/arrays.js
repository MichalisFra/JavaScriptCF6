1
function makeUnique(array) {
    let result = []
    let charCount = {}

     for (let i = 0; i < array.length; i++) {
        if (!charCount[array[i]] ) {
            result.push(array[i])
            charCount[array[i]] = true
        }   
     }
     return result
}
//1-alternative
function makeUni(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
       if (result.indexOf(arr[i]) == -1) {
        result.push(arr[i])
       }
    }
        return result
    
    }
    


const exampArray = [1, 1, 1, 'a', 'A', 'b', 'b', '@', 15, "1"]
const exampArray2 = [1, 1, 1, 'a', 88, 'A', 'b', 'b', '@', 15, "1"]

let resultArray = makeUnique(exampArray)

let result2 = makeUni(exampArray)

console.log(resultArray)
console.log(result2)


//2
// function combine(arr1, arr2) {
//     let result = []
//     let temp = {...arr1}
    
//     if (temp[arr2]) {
//         result.push(temp)
//     }
//     return result
// }
// let uniArr = combine(exampArray,exampArray2)

// console.log(uniArr)

//2
function combine(arr1, arr2) {
    let result = []
    let maxLength = Math.max(arr1.length, arr2.length)
    for (let i = 0; i < maxLength; i++) {
        if (arr1.indexOf(arr2[i]) != -1) {
            result.push(arr1[i])
        } 
     }
    return makeUni(result)  

}

console.log("Combined " +combine(exampArray,exampArray2))

