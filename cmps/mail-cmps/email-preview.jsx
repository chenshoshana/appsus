


    const { Link } = ReactRouterDOM;

    export function EmailPreview({ email }) {
    
     
    
        return (

            <div className="email-preview">
                <div className="email-preview-head">

                <h1 className="email-preview-sent-to">{email.sentTo}</h1>
                <h5 className="email-preview-subject">{email.subject}</h5>
                </div>
                <h5 className="email-preview-body" >{email.body}</h5>
                
            </div>
    
    )
    }


    
