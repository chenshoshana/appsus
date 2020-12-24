import { utilService } from "./util-service.js"
import { storageService } from "../storage-service.js"

export const noteService = {
    query,
    remove
    // getCurrency
}

function query() {
    // return Promise.resolve(notes)
    return notes
}
const KEY = 'Notes'
var notes = _createNotes()
window.theNotes = notes

function _createNotes() {
    var notesFromStorage = storageService.load(KEY)
    if (!notesFromStorage || !notesFromStorage.length) {
        notesFromStorage = [
        {
            id: "df52e3",
            type: "NoteText",
            isPinned: true,
            info: {
                txt: "Fullstack Me Baby!"
            }
        },
        {
            id: "ef52e3",
            type: "NoteImg",
            info: {
                url: "http://some-img/me",
                title: "Me playing Mi"
            },
            style: {
                backgroundColor: "#00d"
            }
        },
        {
            id: "gf52e3",
            type: "NoteTodos",
            info: {
                label: "How was it:",
                todos: [
                    { txt: "Do that", doneAt: null },
                    { txt: "Do this", doneAt: 187111111 }
                ]
            }
        }]
    }
    return notesFromStorage
}

function remove(noteId) {
    notes = notes.filter(note => note.id !== noteId);
}