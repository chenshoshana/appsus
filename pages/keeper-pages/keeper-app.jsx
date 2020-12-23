import { NotePreview } from "../../cmps/keeper-cmps/note-preview.jsx";
import { noteService } from "../../services/keeper-services/note-service.js";
export class KeeperApp extends React.Component{
    
    componentDidMount() {
        console.log('Page is ready');
        // this.getBooksToDisplay()
        this.loadNotes()
    }
    
    loadNotes = () => {

       var notes = noteService.query()
        // .then(books => this.setState({ notes })) when use promise.
        this.setState({ notes })
    };
    
    render(){
        return <section>
            <h1>keeper</h1>
            <div className= "txt-notes">
                <h2>Notes</h2>
                <NotePreview />
            </div>
        </section>
    }
}