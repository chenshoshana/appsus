


const { Link } = ReactRouterDOM;

export function EmailPreview({ email }) {

    return (
        <Link className="email-preview" to={`/mail/${email.id}`}>
            <div className="email-preview-head mail-preview-text">
                <h1 className="email-preview-sent-to mail-preview-text">{email.sentTo}</h1>
                <h5 className="email-preview-subject mail-preview-text">{email.subject}</h5>
            </div>
            <h5 className="email-preview-body" >{email.body}</h5>
        </Link>
    )
}



