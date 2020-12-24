import { NotePreview } from "./note-preview.jsx";

export function NoteList({notes, onRemove }) {
   
    return (
        notes.map(note => {
            return <NotePreview key={note.id} note={note} 
            onRemove={onRemove} />;
        })
    )
}