//1
function findMatch(object, keys) {
    let matches = {}
    for (let key of keys) {
        if (object[key] !== undefined) {
            matches[key] = object[key]
         }
    }
    return matches
}

let obj1 = {
    name: 'Alice',
    age: 25,
    country: 'Wonderland',
    occupation: 'Adventurer'
}
let keys1 = ['name', 'country', 'sex']

console.log(findMatch(obj1, keys1))
    

//2
function toMap(object, mapping) {
    let result = {}
    for (let obj in object) {
        if (object[obj] !== undefined) {
            result[obj] = mapping(object[obj])
        }
    }
    return result
}

const originalObject = { a: 1, b: 2, c: 3, d: "Mixalis"}
const mappedObj = toMap(originalObject, value => value * 2)

console.log(mappedObj)

//3

function transform(object, func) {
    for(let obj in object) {
        if (object[obj] !== undefined) {
          object[obj] = func(object[obj])
        }
    }
}

const ogObject = { name: "Alice", city: "Wonderland", job: "Developer" }

transform(ogObject, value => value.toUpperCase())
console.log(ogObject)