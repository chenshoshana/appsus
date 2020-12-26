


    const { Link } = ReactRouterDOM;

    export function EmailPreview({ email }) {
    
     
    
        return (

            <div className="email-preview">
                <Link className="mail-link" to={`/mail/${email.id}`}>
                <div className="email-preview-head">

                <h1 className="email-preview-sent-to">{email.sentTo}</h1>
                <h5 className="email-preview-subject">{email.subject}</h5>
                </div>
                <h5 className="email-preview-body" >{email.body}</h5>
            {/* <h1>{.name}</h1> */}
            
        </Link>
            </div>
    
    )
    }


    
