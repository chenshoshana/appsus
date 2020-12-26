import { mailService } from "../../services/mail-services/mail-service.js";

const { Link } = ReactRouterDOM;


export class MailDetails extends React.Component {
    state = {
        mail: null
    };

    // componentDidUpdate(prevProps) {
    //     if (prevProps.match.params.mailId !== this.props.match.params.mailId) {
    //         console.log('UPDATE', this.props);


    //         this.loadMail()
    //     }
    //     // this.loadMail()

    // }
    componentDidMount() {
        console.log('MOUNT', this.props);
        this.loadMail();
        console.log(this.mail)
    }

    loadMail() {
        // debugger
        const { mailId } = this.props.match.params;
        mailService.getById(mailId).then(mail => {
            this.setState({ mail });
        });
    }
    onDelete = () => {
mailService.deleteMail(this.state.mail.id)
this.onBack()
    }

    onBack=()=>{
        this.props.history.goBack()

    }
    render() {
        if (!this.state.mail) return <div>Loading..</div>;

        return (<div>
            <section className="mail-details">
                {/* <h1>Pet Details {this.state.mail.subject}</h1> */}
                {/* <pre>{JSON.stringify(this.state.mail, null, 2)}</pre>  */}
                <div className="mail-details-sent-to">{this.state.mail.sentTo}</div>
                {/* <hr /> */}

                <div className="mail-details-subject">{this.state.mail.subject}</div>
                {/* <hr /> */}

                <div className="mail-details-body">{this.state.mail.body}</div>

            <div>

            <button className="btn-mail-back" onClick={this.onBack}>Go back</button>
            <button className="btn-delete-mail" onClick={this.onDelete}>Delete and go back</button>
            </div>

            </section>
        </div>)
    }
}
