$(function() {
    $('#images').on('mouseenter','.img', function() {
        $(this).next().clone().removeClass('hidden').appendTo('#scene')
        console.log('1')
    })

    $('#images').on('mouseleave','.img', function() {
        $('#scene').find('div').remove();
        console.log('2')
    })
  
})