//1
let cities = ["Athens", "London", "Paris"]

cities.push("Berlin")

console.log(cities)

for (city of cities) {
    console.log(city)
}

//2
const user = {
    fullName: "Mike F.",
    dateOfBirth: "1994-01-01",
    city: "Athens",
    hello: function() {
        console.log("Hello " + this.fullName)
    }

}

console.log(user)

user.hello();

//3
function getArea(radius) {
    return radius*radius*3.14
}

console.log(getArea(5))

