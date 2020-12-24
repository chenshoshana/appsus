import { noteService } from "../../services/keeper-services/note-service.js"

export class NoteAdd extends React.Component {

    state = {
        noteToAdd: {
            txt: ''
        }
    }
    
    onInputChange = (ev) => {//on input change
        console.log('ev.target.name:', ev.target.name);
        console.log('ev.target.value:', ev.target.value);

        const value = ev.target.type === 'number' ? +ev.target.value
            : ev.target.value;

        const noteCopy = { ...this.state.noteToAdd };
        noteCopy[ev.target.name] = value; // like petCopy.name/power = 

        this.setState({
            noteToAdd: noteCopy
        });
    };

    render() {
        return <form onSubmit={this.onAddNote} >
            <input value={this.state.noteToAdd.txt} type="text" className="note-input"
                placeholder="What's on you'r mind..." name="txt" onChange={this.onInputChange} ></input>
            <button type="submit">Add Note</button>
        </form>
    }

}
