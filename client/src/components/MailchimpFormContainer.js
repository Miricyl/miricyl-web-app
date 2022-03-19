import React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import MailChimpForm from "../components/MailChimpForm";

const MailchimpFormContainer = props => {

    const url = process.env.REACT_APP_MAILCHIMP_URL;
    const u = process.env.REACT_APP_MAILCHIMP_U;
    const id = process.env.REACT_APP_MAILCHIMP_ID;
    const postUrl = url +'/subscribe/post?u='+ u +'&id='+ id;

    return (
        <div className="mc__form-container">
            <MailchimpSubscribe
                url={postUrl}
                render={({ subscribe, status, message }) => (
                    <MailChimpForm
                        status={status} 
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
            />
        </div>
    );
};

export default MailchimpFormContainer;