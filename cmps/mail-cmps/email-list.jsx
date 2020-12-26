import { EmailPreview } from '../../cmps/mail-cmps/email-preview.jsx'


const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;
export function EmailList({ mails}) {
    // console.log(mails)
    return    (
     <section className="mails-list">

        {mails.map(email => {
            console.log('hello')
            if(!email)return <div>dont work</div>
            return <div key={email.id}>
                <EmailPreview  email={email}/>
            </div>
        })}
        </section>
        )

}