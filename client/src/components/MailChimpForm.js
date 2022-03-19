import React, {useState, useEffect} from 'react';
import "../styles/mailchimp.css";
import MailchimpSubscribe from "react-mailchimp-subscribe";
// import PrimaryCTAButton from "../ui/PrimaryCTAButton/PrimaryCTAButton";
// import { useGHStContext } from '../../utils/ContextProvider';
// import InputField from "../ui/InputField/InputField";

const MailChimpForm = ({ status, message, onValidated }) => {


    // const {modalOpen, setModalOpen} = useGHStContext();

    const [modalOpen, setModalOpen] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        firstName &&
        lastName &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email,
            MERGE1: firstName,
            MERGE2: lastName,
        });

    }

    useEffect(() => {
        if(status === "success") clearFields();
        if(modalOpen && status === "success") clearFields();
    }, [status, modalOpen])

    const clearFields = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
    }


    return (
        <form
            className="mc__form"
            onSubmit={(e) => handleSubmit(e)}
        >
            <h3 className="mc__title">
                {status === "success" ? "Success!" :
                    "Join our email list for future updates."}
            </h3>

            {status === "sending" && (
                <div
                    className="mc__alert mc__alert--sending"
                >sending...</div>
            )}
            {status === "error" && (
                <div
                    className="mc__alert mc__alert--error"
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            {status === "success" && (
                <div
                    className="mc__alert mc__alert--success"
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}

            {status !== "success" ? (
                <div className="mc__field-container">
                    <input type="text" value={firstName} placeholder="First Name" onChangeHandler={setFirstName} required />
                    
                    {/*<InputField
                        label="First Name"
                        onChangeHandler={setFirstName}
                        type="text"
                        value={firstName}
                        placeholder="Jane"
                        isRequired
                    /> */}

                    {/*<InputField
                        label="Last Name"
                        onChangeHandler={setLastName}
                        type="text"
                        value={lastName}
                        placeholder="Doe"
                        isRequired
                    />*/}
                    <input type="text" value={lastName} placeholder="Last Name" onChangeHandler={setLastName} required />

                    {/*<InputField
                        label="Email"
                        onChangeHandler={setEmail}
                        type="email"
                        value={email}
                        placeholder="your@email.com"
                        isRequired
                    />*/}
                        <input type="email" value={email} placeholder="Email" onChangeHandler={setEmail} required />

                </div>
            ) : null}

            {/*Close button appears if form was successfully sent*/}
            { /*
                status === 'success' ? <PrimaryCTAButton
                    handleClick={() => setModalOpen(false)}
                    label="close"
                    size="big"
                    customClass="g__justify-self-center"
                /> : <InputField
                    label="subscribe"
                    type="submit"
                    formValues={[email, firstName, lastName]}
                />
            */}
           
            {
                status === "success" ? 
                <a href="#" onclick="{() => setModalOpen(false)}" className="g__justify-self-center">Close</a> :
                <input type="submit" formValues={[email, firstName, lastName]} value="Subscribe" />
            }
        </form>
    );
};

export default MailChimpForm;