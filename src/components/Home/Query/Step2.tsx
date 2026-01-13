import React, { ChangeEvent, FC } from 'react';
import useFormContext from '../../../context/useFormContext';

type Form = {
    id: number,
    label: string,
    key: 'name' | 'email' | 'phone' | 'address';
    value: string,
    type: React.HTMLInputTypeAttribute,
    placeholder: string,
    required: boolean
}

const Step2: FC = () => {
    const {
        forms: { name, address, phone, email },
        setFormValues,
    } = useFormContext();


    const handleChange = (key: Form['key']) => (
        (e: ChangeEvent<HTMLInputElement>) => setFormValues(key, e.target.value)
    )


    const form: Form[] = [
        {
            id: 1,
            label: 'Your name (required)',
            key: 'name',
            value: name,
            type: 'text',
            placeholder: 'your name',
            required: true
        },
        {
            id: 2,
            label: 'Your email (required)',
            key: 'email',
            value: email,
            type: 'email',
            placeholder: 'your email',
            required: true
        },
        {
            id: 3,
            label: 'Your phone (required)',
            key: 'phone',
            value: phone,
            type: 'phone',
            placeholder: 'your phone',
            required: true
        },
        {
            id: 4,
            label: 'Address (Street, Building Name, Apartment Number, Area)(required)',
            key: 'address',
            value: address,
            type: 'text',
            placeholder: 'your address',
            required: true
        }
    ]
    return (
        <div className="survey-step" data-step="2">
            <h1 className="modal-hdl">Your booking query</h1>
            <h2 className="modal-hdl">Contact Information</h2>
            {form.map((input) => (
                <label key={input.id}>
                    {input.label}
                    < input
                        type={input.type}
                        value={input.value}
                        onChange={handleChange(input.key)}
                        name={input.key}
                        placeholder={input.placeholder}
                        required={input.required}
                    />
                </label>
            ))}
        </div >
    );
}

export default Step2;
