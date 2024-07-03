$(function() {
    sayHelloLorem() 
})

function sayHelloLorem() {
    const $p = $('<p>')
    
    $p.html(`Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Veritatis, ducimus facilis fugiat, aliquid aliquam, officia dolorum sunt vero necessitatibus delectus possimus ex. 
     Maiores minus animi laborum? 
     Atque nesciunt officia iure!`)


     $('body').append($p)

     const $body = $('body')
     $body.html(`<p class = "">Hello </p>`)
}