const store = `[{
    "id": "pro43vog",
    "fields": {
        "company": "Neoset",
        "colours": ["#15f125", "#444"],
        "featured": true,
        "price": 999,
        "genre": "white-back chair"
    }
},
{
    "id": "pro23vpr",
    "fields": {
        "company": "IKEA",
        "colours": ["#15f125", "#222"],
        "featured": true,
        "price": 889,
        "genre": "black-back chair"
    }
}
]`

function fetchProducts() {
    const products = JSON.parse(store)
    return products
}

function displayProducts(products) {
    products.forEach(product => {
        let {fields} = product
        let { company, price, genre }  = fields
        console.log(company, price, genre)
    })
}

const fetchedProducts = fetchProducts()
displayProducts(fetchedProducts)