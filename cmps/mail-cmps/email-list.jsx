import { EmailPreview } from '../../cmps/mail-cmps/email-preview.jsx'

export function EmailList({ mails}) {
    console.log(mails)
    return    (
     <section className="mails-list">

        {mails.map(email => {
            return <EmailPreview key={email.idx}  email={email}/>
        })}
        </section>
        )

}