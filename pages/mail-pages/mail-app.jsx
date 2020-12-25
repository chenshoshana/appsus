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
    }

    componentDidMount() {
        this.loadMails()
    }
    loadMails = () => {

        var mails = mailService.query()
        this.setState({ mails })
    };

    render() {
        return <section className="main-container-mail">
            <h1>aderajoe</h1>
            <NewMail sendMail={this.createNewMail} />
            <EmailList mails={this.state.mails} />
        </section>
    }
}