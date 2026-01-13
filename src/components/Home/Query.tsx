import React, { useState } from 'react';
import { MouseEventHandler, FormEvent } from 'react';

import useFormContext from '../../context/useFormContext';
import Step1 from './Query/Step1';
import Step2 from './Query/Step2';
import ProgressBar from './Query/ProgressBar';
import QueryNavigation from './Query/QueryNavigation';

import emailjs from '@emailjs/browser';

type QueryPropsType = {
    open: boolean;
    onClose: MouseEventHandler<HTMLSpanElement>;
    setIsOpen: (value: boolean) => void;
};
function Query({ open, onClose, setIsOpen }: QueryPropsType) {
    const [message, setMessage] = useState<string>('');
    const [success, setSuccess] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [requiredMessage, setRequiredMessage] = useState<string>('');

    const { forms, setForms, initialForm } = useFormContext();

    if (!open) return null;

    const getStep = (): React.ReactNode | null => {
        switch (forms.step) {
            case 0:
                return <Step1 />;
            case 1:
                return <Step2 />;
            default:
                return null;
        }
    };

    async function handleSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
        // if (!forms.isValid) {
        //     e.preventDefault();
        //     alert('Please fill in all required fields before proceeding.');
        // } else {
        e.preventDefault();
        const serviceID = process.env.REACT_APP_SERVICE_ID;
        const templateID = process.env.REACT_APP_QUERY_TEMPLATE_ID;
        const publicKey = process.env.REACT_APP_PUBLIC_KEY;

        const templateParams = {
            owner_name: forms.name,
            owner_email: forms.email,
            to_name: 'Gary&Larry Catsitting',
            message: forms.message,
            owner_phone: forms.phone,
            cat_name: forms.catsName,
            cat_number: forms.numberOfCats,
            option: forms.catsittingOption,
            owner_address: forms.address,
            start_date: forms.startDate,
            end_date: forms.endDate,
        };

        if (forms.name && forms.email && forms.phone && forms.address !== '') {
            if (!serviceID || !templateID || !publicKey) {
                throw new Error('Environment variables are not set!');
            }

            emailjs
                .send(serviceID, templateID, templateParams, {
                    publicKey: publicKey,
                })
                .then((response) => {
                    console.log('Email was sent successfully', response);
                    setForms(initialForm);
                    setIsOpen(false);
                })
                .catch((error) => console.error('Error sending email:', error));
        } else {
            setRequiredMessage(
                'Please fill out all the fields: name, email, phone number and address',
            );
        }
    }

    return (
        <div id="surveyModal" className="modal">
            <div className="modal-content survey-modal">
                <span className="close" onClick={onClose}>
                    &times;
                </span>
                <ProgressBar />

                <form
                    id="surveyForm"
                    name="rental-survey"
                    method="POST"
                    data-netlify="true"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="hidden"
                        name="form-name"
                        value="rental-survey"
                    />
                    <p className="hidden">
                        <label>
                            Don&apos;t fill this out if you&apos;re human:
                            <input name="bot-field" />
                        </label>
                    </p>

                    {getStep()}
                    <QueryNavigation />
                </form>
            </div>
        </div>
    );
}

export default Query;
