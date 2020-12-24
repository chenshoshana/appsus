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
        console.log('ev.target.name:', ev.target.name);
        console.log('ev.target.value:', ev.target.value);

        const value = ev.target.value;

        const noteCopy = { ...this.state.noteToAdd };
        noteCopy.info[ev.target.name] = value

        this.setState({
            noteToAdd: noteCopy
        });
    };

    onAddNote = (ev) => {
        ev.preventDefault()
        this.props.addNote(this.state.noteToAdd)
    }

    render() {
        return <form onSubmit={this.onAddNote} >
            <input value={this.state.noteToAdd.txt} type="text" className="note-input"
                placeholder="What's on you'r mind..." name="txt" onChange={this.onInputChange} ></input>
            <button type="submit">Add Note</button>
        </form>
    }

}
