import { NoteAdd } from "../../cmps/keeper-cmps/note-add.jsx";
import { NoteList } from "../../cmps/keeper-cmps/note-list.jsx";
// import { NotePreview } from "../../cmps/keeper-cmps/note-preview.jsx";
import { noteService } from "../../services/keeper-services/note-service.js";

export class KeeperApp extends React.Component {

    state = {
        notes: [],
        noteToAdd: { name: '', sub: 0, body: 'hello' },
        filterBy: {
            name: '',
            power: null
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

    onAddNote = (ev) => {//on submit
        ev.preventDefault();

        if (this.state.noteToAdd.length < 1) {
            alert('mast write somethig!');
            return;
        }

        noteService.add(this.state.noteToAdd);
        this.loadNotes();
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
            <NoteAdd />
            <div className="txt-notes">
                <h2>Pinned notes</h2>
                {this.state.notes && this.state.notes.length > 0 && <NoteList notes={this.state.notes} onRemove={this.onRemoveNote} />}
            </div>
        </section>
    }
}
