
export function NotePreview({ note, onRemove }) {

    return <div className="note-preview">
        <div>
            <h1 className="note-h1">{note.type}</h1>
            <p>{note.info.txt}</p>
        </div>
        <div className="note-btns">
            <a className="edit-note-btn"  >✏️</a>
            <a className="edit-note-btn"  >✏️</a>
            <a className="edit-note-btn"  >✏️</a>
            <a className="edit-note-btn"  >✏️</a>
            <a className="edit-note-btn" >✏️</a>
            <a className="delet-note-btn" onClick={() => onRemove(note.id)}>🗑️</a>
        </div>
    </div>

    // getNotesToDisplay = () => {
    //     const { notes } = this.state
    //     console.log('notes', notes);
    // }
}
