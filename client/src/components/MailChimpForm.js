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
    const [openPopup, setOpenPopup] = useState(false);


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
        //setOpenPopup(false)
    }

    useEffect(() => {
        if(status === "success") clearFields();
        if(modalOpen && status === "success") clearFields();        
    }, [status, modalOpen])

    useEffect(() => {
      const interval = setInterval(() => {
        if (document.cookie.indexOf("popupShown=true") == -1) {
            setOpenPopup(true);
        }
    }, 5000);

      return () => clearInterval(interval);
    }, [])

    const clearFields = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
    }
    const closeModel = () => {
        setOpenPopup(false);
        document.cookie = "popupShown=true; max-age=86400";
    }

    return (
        <>
        <div className={"popup-container "+(openPopup ? "popup-show" : "")}>
        <div className="overlay"></div>
        <div className={"popup "}>
            <div className="popup-wrapper">
                <button className="close" onClick={closeModel}>&times;</button>
                <h3>Join our email list for future updates.</h3>
                {status === "sending" && (
                    <p className="mc__alert mc__alert--sending">Sending...</p>
                )}
                {status === "error" && (
                    <p className="error-message">{message}</p>
                )}
                {status === "success" && (
                    <p className="success-message">{message}</p>
                )}
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="field-row">
                        <input 
                            type="text" 
                            className="popup-control" 
                            name="firstName" 
                            value={firstName} 
                            placeholder="First Name" 
                            onChange={(e) => setFirstName(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="field-row">
                        <input 
                            type="text" 
                            className="popup-control" 
                            name="lastName" 
                            value={lastName} 
                            placeholder="Last Name" 
                            onChange={(e) => setLastName(e.target.value)}
                            required 
                        />
                    </div>
                    <div className="field-row">
                        <input 
                        type="email" 
                        className="popup-control" 
                        name="email" 
                        value={email} 
                        placeholder="Email" 
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                    />
                    </div>
                    <div className="submit-btn">
                        <button type="submit" className="help-button">Subscribe</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
        </>
    );
};

export default MailChimpForm;