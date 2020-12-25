


    const { Link } = ReactRouterDOM;

    export function EmailPreview({ email }) {
    
     
    
        return (

            <div className="email-preview">
                <h1 className="email-preview-sent-to">{email.sentTo}</h1>
                <h1 className="email-preview-subject">{email.subject}</h1>
                <h1 className="email-preview-body" >{email.body}</h1>
                
            </div>
    
    )
    }


    
