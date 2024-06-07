const user  = {
    id: 1,
    firstname: "Alice",
    lastname: "W."
}

const userJSONString = JSON.stringify(user) // turning an Object into a JSON

const userJSobj = JSON.parse(userJSONString) // turning a JSON into an Object