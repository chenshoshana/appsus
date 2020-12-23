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

    // getPetsForDisplay = () => {
    //     return this.state.notes
    // }
    render() {
        return <section className="note-app">
            <div className="txt-notes">
                <h2>Notes</h2>
                {this.state.notes.length > 0 && <NoteList notes={this.state.notes} />}
            </div>
        </section>
    }
}
