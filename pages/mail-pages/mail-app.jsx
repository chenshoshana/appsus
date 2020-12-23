import { EmailList } from '../../cmps/mail-cmps/email-list.jsx'


export class MailApp extends React.Component{

    
    state={
     mails: [
         {
        idx :0,
        subject : 'Wassap?',
        body: 'Pick up!',
        isRead: true,
        sentAt : 1551133930594
        },
        {
        idx :1,
        subject : 'Are you there?',
        body: 'Pick up the damn phone!',
        isRead: false,
        sentAt : 1551133930594
        },
        {
        idx :2,
        subject : 'hey',
        body: 'what time is it?',
        isRead: false,
        sentAt : 1551133930594
        }
   ] 
   }



    render(){
        return <section>
            <h1>aderajoe</h1>
            <EmailList mails={this.state.mails} />
        </section>
    }
}