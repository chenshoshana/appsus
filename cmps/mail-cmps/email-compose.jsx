import { mailService } from "../../services/mail-services/mail-service.js";





export class NewMail extends React.Component{

state={
mail:{idx: 4,
    sentTo:'',
    subject: '',
    body: 'what time is it?',
    isRead: false,
    sentAt: 1551133930594}
}




    createNewMail(newM){
        console.log('new mail')
        var mails = mailService.query()
         // .then(books => this.setState({ notes })) when use promise.
         console.log(newM)
         mails.push(newM)
        //  this.setState({mails})
    }
    
    onInputChange = (ev) => {
        const value = ev.target.value
        const mailCopy = { ...this.state.mail };
        mailCopy[ev.target.subject] = value;
        console.log(mailCopy)


        const inputType = ev.target.name
        let type;
        // if(inputType=== 'address'){
        //     // type = 'sentTo'

        // }else if(inputType === 'subject'){
        //     type = 'subject'
        // }else{
        //     type = 'content'
        // }

        this.setState({
           mail: mailCopy


        });




        console.log(value)

        // mailCopy[ev.target.] = value;


        // const reviewCopy = { ...this.state.review };
        // reviewCopy[ev.target.name] = value;

    }





render(){


          return <div>
              <input  onChange={this.onInputChange} type="email" name="address" placeholder="Write to" />
              <input  onChange={this.onInputChange} type="text" name="subject" placeholder="Subject" />
              <input  onChange={this.onInputChange} type="text" name="content" placeholder="content" />

                
                
                <button onClick={this.createNewMail} >send</button> 
            </div>
}





}

