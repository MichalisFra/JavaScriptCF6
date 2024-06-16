const daysGR = ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο'];
const monthsGR = ['Ιανουαρίου', 'Φεβρουαρίου', 'Μαρτίου', 'Απριλίου', 'Μαΐου', 'Ιουνίου', 'Ιουλίου', 'Αυγούστου', 'Σεπτεμβρίου', 'Οκτωβρίου', 'Νοεμβρίου', 'Δεκεμβρίου'];

window.addEventListener('DOMContentLoaded', function() {
    setInterval(printGRDate, 1000)

    document.querySelector('#addNoteBtn').addEventListener('click', function() {
        onInsertController(document.querySelector('#inputNote').value.trim())
    })

    document.querySelector('#inputNote').addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            onInsertController(this.value.trim())
        }
    })
})

function printGRDate() {
    const currentDate = new Date()
    const day = currentDate.getDay()
    const date = currentDate.getDate()
    const month = currentDate.getMonth()
    const year = currentDate.getFullYear()

    const hours = currentDate.getHours()
    const minutes = currentDate.getMinutes()
    const seconds = currentDate.getSeconds()

    const dayStr = daysGR[day]
    const monthStr = monthsGR[month]

    const dateStr = `${dayStr}, ${date} ${monthStr} ${year}`
    const timeStr = `${(hours < 10 ? '0' : '')}${hours}:${(minutes < 10 ? '0' : '')}${minutes}:${(seconds < 10 ? '0' : '')}${seconds}`

    document.querySelector('#dateTxt').innerHTML = dateStr + '<br>' + timeStr
}



function onInsertController(data) {
    if (data) {
        insertNote(data)
        reset()
    }
}

function insertNote(text) {
    const notesWrapper = document.querySelector('.notes-wrapper')
    const noteTemplate = document.querySelector('.note')

    const newNote = noteTemplate.cloneNode(true)
    newNote.classList.remove('hidden')
    newNote.querySelector('.note-text').textContent = text

    

    newNote.querySelector('.note_del-btn').addEventListener('click', function() {
        deleteCheckedNotes()
    })

    notesWrapper.appendChild(newNote)
}

function reset() {
    document.querySelector('#inputNote').value = ''
}

function deleteCheckedNotes() {
    const notesWrapper = document.querySelector('.notes-wrapper');
    const checkboxes = notesWrapper.querySelectorAll('.note-check');

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            checkbox.closest('.note').remove();
        }
    })
}
