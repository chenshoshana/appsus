import { EmailList } from '../../cmps/mail-cmps/email-list.jsx'
import { mailService } from "../../services/mail-services/mail-service.js";


export class MailApp extends React.Component{

    
    state={
     mails: [
         
   ] 
   }



   componentDidMount() {
    console.log('Page is ready');
    // this.getBooksToDisplay()
    this.loadMails()
}
   loadMails = () => {

    var mails = mailService.query()
     // .then(books => this.setState({ notes })) when use promise.
     this.setState({ mails })
 };


    render(){
        return <section>
            <h1>aderajoe</h1>
            <EmailList mails={this.state.mails} />
        </section>
    }
}