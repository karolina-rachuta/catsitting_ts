import React, { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [success, setSuccess] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [requiredMessage, setRequiredMessage] = useState<string>('');

    function handleSubmit(e: FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        const serviceID = process.env.REACT_APP_SERVICE_ID;
        const templateID = process.env.REACT_APP_TEMPLATE_ID;
        const publicKey = process.env.REACT_APP_PUBLIC_KEY;

        if (name && email && phoneNumber && message !== '') {
            if (!serviceID || !templateID || !publicKey) {
                console.error('Environment variables are missing!');
                return;
            }

            if (!name || !email || !phoneNumber || !message) {
                setRequiredMessage(
                    'Please fill out all the fields: name, email, phone number and message',
                );
                return;
            }

            const templateParams = {
                from_name: name,
                from_email: email,
                to_name: 'Gary&Larry Catsitting',
                message: message,
                phone: phoneNumber,
            };

            emailjs
                .send(serviceID, templateID, templateParams, {
                    publicKey: publicKey,
                })
                .then((response) => {
                    console.log('Email response:', response);
                    setSuccess('Email was sent successfully');
                    setName('');
                    setEmail('');
                    setPhoneNumber('');
                    setMessage('');
                    setRequiredMessage('');
                })
                .catch((error) => {
                    console.error('Error sending email:', error);
                    setError('Error sending email:');
                });
        } else {
            setRequiredMessage(
                'Please fill out all the fields: name, email, phone number and message',
            );
        }
    }

    return (
        <div className="contact__container">
            <div className="contact__body">
                <div className="contact__left">
                    <h2>Do you have more questions?</h2>
                    <p>Do not hesitate to contact us!</p>
                </div>
                <form onSubmit={handleSubmit} className="contact__right">
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="tel"
                        placeholder="Phone number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <textarea
                        name=""
                        id=""
                        cols={30}
                        rows={10}
                        placeholder="Your questions, dates, how many cats, which catsitting option ect."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <button
                        className={success ? 'active' : 'btn'}
                        type="submit"
                    >
                        Send
                    </button>
                    {error || success || requiredMessage !== '' ? (
                        <>
                            {error && <p className="error">{error}</p>}
                            {success && <p className="success">{success}</p>}
                            {requiredMessage && (
                                <p className="required">{requiredMessage}</p>
                            )}
                        </>
                    ) : (
                        <p></p>
                    )}
                </form>
            </div>
        </div>
    );
}

export default Contact;
