const DEFAULT = 0
let counter = DEFAULT

window.addEventListener('DOMContentLoaded', function() {

    this.document.querySelector('#btnDecr').addEventListener('click', () => onDecreaseClicked())
    this.document.querySelector('#btnReset').addEventListener('click', () => onResetClicked())
    this.document.querySelector('#btnIncr').addEventListener('click', () => onIncreaseClicked())
})

/**
 * Actions taken after the 'Decrease' button
 * was clicked. Actions include decreasing the counter.
 */
function onDecreaseClicked() {
    decreaseCounter()
}

/**
 * Actions taken after the 'Reset' button
 * was clicked. Actions include resetting the counter.
 */
function onResetClicked() {
    resetCounter()
}

/**
 * Actions taken after the 'Increase' button
 * was clicked. Actions include increasing the counter.
 */
function onIncreaseClicked() {
    increaseCounter()
}

// Model


/**
 * Decrease the counter and render to UI.
 */
function decreaseCounter() {
    counter--
    showCounter()
}


/**
 * Resets the counter and renders to UI.
 */
function resetCounter() {
    counter = DEFAULT
    showCounter()
}

/**
 * Incrases the counter by one and renders to UI.
 */
function increaseCounter() {
    counter++
    showCounter()
}


/**
 * Assigns the counter to the corresponding UI Element.
 * And gives styling.
 */
function showCounter() {
    // Data binding
  const counterDOM = document.querySelector('#counter')
  counterDOM.textContent = counter

     //Styling
  styleCounterElement(counterDOM)
}

function styleCounterElement(counterDOM) {
    counterDOM.classList.toggle('color-green', counter > 0)
    counterDOM.classList.toggle('color-red', counter < 0)
    counterDOM.classList.toggle('color-black', counter == 0)

}