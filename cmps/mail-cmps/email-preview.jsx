export class EmailPreview extends React.Component{





    state={
         subject : 'Wassap?',
    body: 'Pick up!',
    isRead: false,
    sentAt : 1551133930594

    
    }

    render(){
        return <section>
            <h1>an mail</h1>
            <h1> {this.state.subject}</h1>
        </section>
    }
}