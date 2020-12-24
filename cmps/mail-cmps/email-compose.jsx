import { mailService } from "../../services/mail-services/mail-service.js";





export class NewMail extends React.Component {

    state = {
        mail: {
            idx: 4,
            sentTo: '',
            subject: '',
            body: 'what time is it?',
            isRead: false,
            sentAt: 1551133930594
        }
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





    render() {


        return <div>
            <input onChange={this.onInputChange} type="email" name="sentTo" placeholder="Write to" />
            <input onChange={this.onInputChange} type="text" name="subject" placeholder="Subject" />
            <input onChange={this.onInputChange} type="text" name="body" placeholder="content" />



            <button onClick={this.createNewMail} >send</button>
        </div>
    }





}

