import { EmailList } from '../../cmps/mail-cmps/email-list.jsx'
import { mailService } from "../../services/mail-services/mail-service.js";
import { NewMail } from "../../cmps/mail-cmps/email-compose.jsx";
import { utilService } from "../../services/keeper-services/util-service.js";


export class MailApp extends React.Component {

    state = {
        mails: [],
        mailModal: "new-mail-modal-hide",
        newMailBtn: "New mail"
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
    }

    onCreateNewMail = () => {
        var modalCopy = this.state.mailModal
        var newMailBtn = this.state.newMailBtn
        if (modalCopy === "new-mail-modal") {
            modalCopy = "new-mail-modal-hide"
            newMailBtn = "New mail"
        } else {
            modalCopy = "new-mail-modal"
            newMailBtn = "Go back"
        }
        this.setState({ mailModal: modalCopy })
        this.setState({ newMailBtn })
    }

    render() {
        return <section className="main-container-mail">
            <div className="create-new-mail">
                <button className="btn-create-new-mail" onClick={this.onCreateNewMail}>{this.state.newMailBtn}</button>
            </div>
            <div className={this.state.mailModal}>
                <NewMail sendMail={this.createNewMail} />
            </div>
            <EmailList mails={this.state.mails} />
        </section>
    }
}