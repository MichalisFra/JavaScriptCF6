const products = [{title: "Milk", price: 10},{title: "Honey", price: 11},{title: "Honey", price: 10}]

const deepCopy = _.cloneDeep(products)
console.log(deepCopy)