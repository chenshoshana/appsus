import { utilService } from "./util-service.js"
import { storageService } from "../storage-service.js"
// import { NoteAdd } from "../../cmps/keeper-cmps/note-add.jsx"

export const noteService = {
    query,
    remove,
    add
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
        storageService.save(KEY, notesFromStorage)
    }
    return notesFromStorage
}

function remove(noteId) {
    notes = notes.filter(note => note.id !== noteId);
}

function add(note) {

    const noteToAdd = {
        ...note,
        id: utilService.makeId()
    };

    console.log('noteToAdd:', noteToAdd);
    notes = [noteToAdd, ...notes];

    storageService.save(KEY, notes)

    window.thenotes = notes;// for debugging purposes
    return noteToAdd; // For next week
}