import { EmailList } from '../../cmps/mail-cmps/email-list.jsx'
import { mailService } from "../../services/mail-services/mail-service.js";
import { NewMail } from "../../cmps/mail-cmps/email-compose.jsx";
import { utilService } from "../../services/keeper-services/util-service.js";


export class MailApp extends React.Component {


    state = {
        mails: []
    }
    createNewMail = (newMail) => {
        mailService.sendMail(newMail)
        this.loadMails()
        console.log(newMail)
        // console.log('new mail')
        // let newMail = { ...this.state.mail };
        // console.log(newMail)
        // mailService.sendMail(newMail)
        // let mails = mailService.query()
        //  this.setState({mails})

    }


    componentDidMount() {
        this.loadMails()
    }
    loadMails = () => {

        var mails = mailService.query()
        this.setState({ mails })
    };

    render() {
        return <section>
            <h1>aderajoe</h1>
            <NewMail sendMail={this.createNewMail} />
            <EmailList mails={this.state.mails} />
        </section>
    }
}