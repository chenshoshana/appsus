
export function NotePreview ({note}) {

        return <div>
            <h1>{note.type}</h1>
            <p>{note.info.txt}</p>
        </div>
    
    // getNotesToDisplay = () => {
    //     const { notes } = this.state
    //     console.log('notes', notes);
    // }
}