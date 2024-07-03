$(function() {
    sayHelloLorem() 
})

function sayHelloLorem() {
 $(`<div> Lorem ipsum dolor sit amet consectetur adipisicing elit.
 Veritatis, ducimus facilis fugiat, aliquid aliquam, officia dolorum sunt vero necessitatibus delectus possimus ex. 
 Maiores minus animi laborum? 
 Atque nesciunt officia iure! </div>`).appendTo($('body'))
}