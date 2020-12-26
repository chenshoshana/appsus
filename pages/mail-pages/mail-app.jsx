import { EmailList } from '../../cmps/mail-cmps/email-list.jsx'
import { mailService } from "../../services/mail-services/mail-service.js";
import { NewMail } from "../../cmps/mail-cmps/email-compose.jsx";
import { utilService } from "../../services/keeper-services/util-service.js";


export class MailApp extends React.Component {

    state = {
        mails: [],
        mailModal:"new-mail-modal"
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

    onCreateNewMail= ()=>{
        var modalCopy=this.state.mailModal
        if(modalCopy==="new-mail-modal"){
            modalCopy="new-mail-modal-hide"
        }else{
            modalCopy="new-mail-modal"}
        
        this.setState({mailModal:modalCopy})
    }

    render() {
        return <section className="main-container-mail">
            <h1>new Mail</h1>
            <button className="btn-create-new-mail" onClick={this.onCreateNewMail}>new mail</button>
            <div className={this.state.mailModal}>

            <NewMail sendMail={this.createNewMail} />
            </div>
            <EmailList mails={this.state.mails} />

        </section>
    }
}