import { noteService } from "../../services/keeper-services/note-service.js"

export class NoteAdd extends React.Component {

    state = {
        noteToAdd: {
            type: "NoteText",
            info: {
                txt: ''
            }
        }
    }

    onInputChange = (ev) => {//on input change

        const value = ev.target.value;
        
        const noteInfoCopy = { ...this.state.noteToAdd.info };
        noteInfoCopy[ev.target.name] = value
        
        this.setState({
            noteToAdd: {
                ...this.state.noteToAdd,
                info: noteInfoCopy
            }
        });
    };
    
    onAddNote = (ev) => {
        
        ev.preventDefault()
        if (this.state.noteToAdd.info < 1) {
            alert('must write something!');
            return;
        }
        this.props.addNote(this.state.noteToAdd)
    }

    render() {
        return <form onSubmit={this.onAddNote} >
            <input value={this.state.noteToAdd.txt} type="text" className="note-input"
                placeholder="What's on you'r mind..." name="txt" onChange={this.onInputChange}  ></input>
                
            <button className="add-note-btn" type="submit">Add Note</button>
        </form>
    }

}
