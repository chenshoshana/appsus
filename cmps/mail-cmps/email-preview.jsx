


    const { Link } = ReactRouterDOM;

    export function EmailPreview({ email }) {
    
     
    
        return (

            <article className="email-preview">
                <h1 className="email-preview-subject">{email.subject}</h1>
                <h1 className="email-preview-body" >{email.body}</h1>
            </article>
    
    )
    }


    
