
export function NotePreview ({note, onRemove }) {

        return <div className = "note-preview">
            <button className="delet-note-btn" onClick={() => onRemove(note.id)}>X</button>
            <h1 className="note-h1">{note.type}</h1>
            <p>{note.info.txt}</p>
        </div>
    
    // getNotesToDisplay = () => {
    //     const { notes } = this.state
    //     console.log('notes', notes);
    // }
}
