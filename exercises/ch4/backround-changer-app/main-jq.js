let color = undefined;

$(function() {
    $('#btn').on('click', function() {
        onClickedMeClicked()
    })
})

/**
 * Handler. Actions taken after 'Clicked Me' clicked.
 */
function onClickedMeClicked() {
    updateBg()
}

/**
 * Updates the state and updates the UI
 */
function updateBg() {
    color = getColor()
    showBgColor()
}

/**
 * Selects a random color from a standard array
 * @returns 
 */
function getColor() {
    const colors = ['Black', 'Red', 'Green', 'Blue', 'White']
    return colors[Math.floor(Math.random() * colors.length)]
}

function showBgColor() {
    $('#color').html(color)
    $('body').css('background-color', color)
    console.log(color)
}