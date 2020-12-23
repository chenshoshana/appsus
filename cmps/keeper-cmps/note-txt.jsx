// import { noteService } from "../../services/keeper-services/note-services.js";

export class NoteTxt extends React.Component {

    state = {
        // filterBy: {
        //     name: '',
        //     lowPrice: 0,
        //     highPrice: 400
        // },
        notes: [{
            type: "NoteText",
            isPinned: true,
            info: {
                txt: "Fullstack Me Baby!"
            }
        },
        {
            type: "NoteImg",
            info: {
                url: "http://some-img/me",
                title: "Me playing Mi"
            },
            style: {
                backgroundColor: "#00d"
            }
        },
        {
            type: "NoteTodos",
            info: {
                label: "How was it:",
                todos: [
                    { txt: "Do that", doneAt: null },
                    { txt: "Do this", doneAt: 187111111 }
                ]
            }
        }]
    }

    // componentDidMount() {
    //     console.log('Page is ready');
    //     // this.getBooksToDisplay()
    //     this.loadNotes()
    // }

    // loadNotes = () => {

    //     noteService.query()
    //     // .then(books => this.setState({ notes })) when use promise.
    //     this.setState({ notes })
    // };

    // getNotesToDisplay = () => {
    //     const { notes } = this.state
    //     console.log('notes', notes);
    // }
}