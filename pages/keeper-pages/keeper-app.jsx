import { NoteAdd } from "../../cmps/keeper-cmps/note-add.jsx";
import { NoteList } from "../../cmps/keeper-cmps/note-list.jsx";
import { noteService } from "../../services/keeper-services/note-service.js";

export class KeeperApp extends React.Component {

    state = {
        notes: [],
        noteToAdd: { name: '', sub: 0, body: 'hello' },
        filterBy: {
            type: '',
           
        }
    };

    componentDidMount() {
        this.loadNotes()
    }

    loadNotes = () => {

        var notes = noteService.query()
        // .then(books => this.setState({ notes })) when use promise.

        this.setState({ notes })
    };

    onAddNote = (note) => {//on submit
       
        noteService.add(note);
        this.loadNotes()
    };

    onRemoveNote = (noteId) => {
        noteService.remove(noteId);
        this.loadNotes();
    };

    // getPetsForDisplay = () => {
    //     return this.state.notes
    // }
    render() {
        return <section className="note-app">
            <NoteAdd addNote={this.onAddNote} />
            <div className="txt-notes">
                <h2>Pinned notes</h2>
                {this.state.notes && this.state.notes.length > 0 && <NoteList notes={this.state.notes} onRemove={this.onRemoveNote} />}
            </div>
        </section>
    }
}
