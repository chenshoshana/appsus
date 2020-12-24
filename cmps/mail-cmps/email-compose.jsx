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




    createNewMail = () => {
        console.log('new mail')
        let newMail = { ...this.state.mail };
        console.log(newMail)
        let mails = mailService.query()
        // .then(books => this.setState({ notes })) when use promise.
        // console.log(newM)
        //  mails.push(this.state.mail)
        newMail.sentAt= Date.now()
         this.setState({mails})
         mailService.sendMail(newMail)
         return mails
    }

    onInputChange = (ev) => {
        const value = ev.target.value
        const mailCopy = { ...this.state.mail };
        // console.log(mailCopy)
        
        const inputType = ev.target.name
        if (inputType=== 'subject'){

            mailCopy.subject = value;
        }else if (inputType=== 'content'){
            mailCopy.body = value;

        }else{
            mailCopy.sentTo = value;

        }
        
        
        
  

        this.setState({
            mail: mailCopy
        });

    }





    render() {


        return <div>
            <input onChange={this.onInputChange} type="email" name="address" placeholder="Write to" />
            <input onChange={this.onInputChange} type="text" name="subject" placeholder="Subject" />
            <input onChange={this.onInputChange} type="text" name="content" placeholder="content" />



            <button onClick={this.createNewMail} >send</button>
        </div>
    }





}

