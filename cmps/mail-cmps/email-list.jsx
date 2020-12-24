import { EmailPreview } from '../../cmps/mail-cmps/email-preview.jsx'

export function EmailList({ mails}) {
    console.log(mails)
    return    (
     <section className="mails-list">

        {mails.map(email => {
            console.log('hello')
            if(!email)return <div>dont work</div>
            return <EmailPreview key={email.idx}  email={email}/>
        })}
        </section>
        )

}