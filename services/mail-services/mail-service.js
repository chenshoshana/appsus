export const mailService = {
    query,
    // saveReview,
    // getCurrency
}

function query() {
    // return Promise.resolve(notes)
    return notes
}

var notes = _createNotes()
window.theNotes = notes

function _createNotes() {
    // var booksFromStorage = storageService.loadFromStorage(KEY)
    // if (!booksFromStorage || !booksFromStorage.length) {
    //     booksFromStorage = [
    return ([{
            idx: 0,
            subject: 'Wassap?',
            body: 'Pick up!',
            isRead: true,
            sentAt: 1551133930594
        },
        {
            idx: 1,
            subject: 'Are you there?',
            body: 'Pick up the damn phone!',
            isRead: false,
            sentAt: 1551133930594
        },
        {
            idx: 2,
            subject: 'hey',
            body: 'what time is it?',
            isRead: false,
            sentAt: 1551133930594
        }
    ])
}