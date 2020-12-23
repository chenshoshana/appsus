import { NotePreview } from "./note-preview.jsx";

export function NoteList({notes}) {
    console.log('notes', notes);
    return (
        notes.map(note => {
            return <NotePreview key={note.id} note={note} />;
        })
    )
}