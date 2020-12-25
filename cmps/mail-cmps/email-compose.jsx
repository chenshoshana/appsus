import { mailService } from "../../services/mail-services/mail-service.js";
import { utilService } from "../../services/keeper-services/util-service.js";


export class NewMail extends React.Component {

    state = {
        mail: {
            id: 4,
            sentTo: '',
            subject: '',
            body: 'what time is it?',
            isRead: false,
            sentAt: 1551133930594
        },
        mailModal:"new-mail-input"
    }

    onInputChange = (ev) => {
        const value = ev.target.value
        const mailCopy = { ...this.state.mail };
        // console.log(mailCopy)

        const inputType = ev.target.name
        mailCopy[inputType] = value;
        this.setState({
            mail: mailCopy
        });
    }
    createNewMail = (newMail) => {
        mailService.sendMail(newMail)
        this.loadMails()

        // console.log('new mail')
        // let newMail = { ...this.state.mail };
        // console.log(newMail)
        // mailService.sendMail(newMail)
        // let mails = mailService.query()
        //  this.setState({mails})

    }

    onSendNewMail = () => { 
        
        let mailCopy = { ...this.state.mail }

        mailCopy.id = utilService.makeId
        mailCopy.sentAt = Date.now

        // this.state.id = mak
        this.props.sendMail(this.state.mail)

    }

//     onCreateNewMail= ()=>{
// var modalCopy=this.state.mailModal
// if(modalCopy==="new-mail-input"){
//     modalCopy="new-mail-input-hide"
// }else{
//     modalCopy="new-mail-input"
// }
    
// this.setState({mailModal:modalCopy})
//     }

    render() {
        return( 
        // <div className="new-mail-modal-child">

            <div className="new-mail-input">

            <textarea onChange={this.onInputChange} type="email" name="sentTo" placeholder="Write to" />
            <textarea onChange={this.onInputChange} type="text" name="subject" placeholder="Subject" />
            <textarea onChange={this.onInputChange} type="text" name="body" placeholder="content" />
            {/* </div> */}
            <button className="btn-send-mail" onClick={this.onSendNewMail} >send</button>
            {/* <button className="btn-create-new-mail" onClick={this.onCreateNewMail}>new mail</button> */}
        </div>
            )
    }
}

