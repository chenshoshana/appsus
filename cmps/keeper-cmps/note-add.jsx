

export class NoteAdd extends React.Component {

    addNote = () =>{

        
    }

    



    render() {
        return <form onSubmit={this.addNote} >
            <input type="text" className="note-input" placeholder="What's on you'r mind..." ></input>
        </form>
    }

}
