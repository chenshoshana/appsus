import { mailService } from "../../services/mail-services/mail-service.js";

const { Link } = ReactRouterDOM;


export class MailDetails extends React.Component {
    state = {
        mail: null
    };

    componentDidMount() {
        this.loadMail();
    }

    loadMail() {
        const { mailId } = this.props.match.params;
        mailService.getById(mailId).then(mail => {
            this.setState({ mail });
        });
    }
    onDelete = () => {
        mailService.deleteMail(this.state.mail.id)
        this.onBack()
    }

    onBack = () => {
        this.props.history.goBack()

    }
    render() {
        if (!this.state.mail) return <div>Loading..</div>;

        return (<div>
            <section className="mail-details">
                <div className="mail-details-sent-to">{this.state.mail.sentTo}</div>
                <div className="mail-details-subject">{this.state.mail.subject}</div>
                <div className="mail-details-body">{this.state.mail.body}</div>
                <div className="bte-details-container">
                    <div className="btn-mail-back-father">
                        <button className="btn-mail-back" onClick={this.onBack}>Go back</button>
                    </div>
                    <div className="btn-delete-mail-father">
                        <button className="btn-delete-mail" onClick={this.onDelete}>Delete and go back</button>
                    </div>
                </div>
            </section>
        </div>)
    }
}
