import { NoteTxt } from "../../cmps/keeper-cmps/note-txt.jsx";

export class KeeperApp extends React.Component{
    render(){
        return <section>
            <h1>keeper</h1>
            <div className= "txt-notes">
                <h2>Notes</h2>
                <NoteTxt />
            </div>
        </section>
    }
}