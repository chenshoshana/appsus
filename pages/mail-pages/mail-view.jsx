import { mailService } from "../../services/mail-services/mail-service.js";

const { Link } = ReactRouterDOM;


export class MailDetails extends React.Component {
    state = {
        mail:null
    };

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.mailId !== this.props.match.params.mailId) {
            console.log('UPDATE', this.props);
     
            
            this.loadMail()
        }
            // this.loadMail()

    }
    componentDidMount() {
        console.log('MOUNT', this.props);
        this.loadMail();
        console.log(this.mail)
    }

    loadMail() {
        // debugger
        const  {mailId}  = this.props.match.params;
        mailService.getById(mailId).then(mail => {
            console.log('1')

            console.log(mail)
            // debugger
            // newMail= [newMail]
            this.setState({ mail });
        });
    }


    render(){
         if (!this.state.mail) return <div>Loading..</div>;
        
        return( <div>
<section className="mail-details">
                {/* <h1>Pet Details {this.state.mail.subject}</h1> */}
                {/* <pre>{JSON.stringify(this.state.mail, null, 2)}</pre>  */}
<span>{this.state.mail.sentTo}</span>
<hr />

<span>{this.state.mail.subject}</span>
<hr />

<span>{this.state.mail.body}</span>


                <hr />
                <button onClick={this.onBack}>Back</button>
            </section>
        </div>)
    }
}
