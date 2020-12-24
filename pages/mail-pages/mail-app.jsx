import { EmailList } from '../../cmps/mail-cmps/email-list.jsx'
import { mailService } from "../../services/mail-services/mail-service.js";
import { NewMail } from "../../cmps/mail-cmps/email-compose.jsx";


export class MailApp extends React.Component{

    
    state={
     mails: [
         
   ] ,
   newMail:[
    {
        idx: 4,
        subject: 'aderajoe',
        body: 'what time is it?',
        isRead: false,
        sentAt: 1551133930594
    }
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
           <NewMail/>
            <EmailList mails={this.state.mails} />
        </section>
    }
}