import React, { useContext } from 'react';
import { FormContext } from '../../../context/QueryContext';

function Step2() {
    const context = useContext(FormContext);
    if (!context) {
        throw Error('Context is undefined');
    }
    const {
        forms: { name, address, phone, email },
        setFormValues,
    } = context;
    return (
        <div className="survey-step" data-step="2">
            <h1 className="modal-hdl">Your booking query</h1>
            <h2 className="modal-hdl">Contact Information</h2>

            <label htmlFor="">
                {' '}
                Your name (required)
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setFormValues('name', e.target.value)}
                    name="name"
                    placeholder="your name"
                    required
                />
            </label>

            <label htmlFor="">
                {' '}
                Your email (required)
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setFormValues('email', e.target.value)}
                    name="email"
                    placeholder="your email"
                    required
                />
            </label>

            <label htmlFor="">
                {' '}
                Your phone (required)
                <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setFormValues('phone', e.target.value)}
                    name="phone"
                    placeholder="your phone"
                    required
                />
            </label>

            <label htmlFor="">
                {' '}
                Address (Street, Building Name, Apartment Number, Area)
                (required)
                <input
                    type="text"
                    value={address}
                    onChange={(e) => setFormValues('address', e.target.value)}
                    name="address"
                    placeholder="your address"
                    required
                />
            </label>
        </div>
    );
}

export default Step2;
