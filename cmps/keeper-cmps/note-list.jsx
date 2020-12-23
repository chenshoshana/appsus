import { NotePreview } from "./note-preview.jsx";

export function NoteList({notes, onRemove }) {
    console.log('notes', notes);
   
    return (
        notes.map(note => {
            return <NotePreview key={note.id} note={note} 
            onRemove={onRemove} />;
        })
    )
}