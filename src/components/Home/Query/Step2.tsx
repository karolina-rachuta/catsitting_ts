import React, { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { QueryFormValues } from '../../../types/types'


type FormFields = {
    id: number,
    label: string,
    key: 'name' | 'email' | 'phone' | 'address';
    type: React.HTMLInputTypeAttribute,
    placeholder: string,
    required: boolean
}

const Step2: FC = () => {
    const { register, formState: { errors } } = useFormContext<QueryFormValues>();

    const formFields: FormFields[] = [
        {
            id: 1,
            label: 'Your name (required)',
            key: 'name',
            type: 'text',
            placeholder: 'your name',
            required: true
        },
        {
            id: 2,
            label: 'Your email (required)',
            key: 'email',
            type: 'email',
            placeholder: 'your email',
            required: true
        },
        {
            id: 3,
            label: 'Your phone (required)',
            key: 'phone',
            type: 'phone',
            placeholder: 'your phone',
            required: true
        },
        {
            id: 4,
            label: 'Address (Street, Building Name, Apartment Number, Area)(required)',
            key: 'address',
            type: 'text',
            placeholder: 'your address',
            required: true
        }
    ]
    return (
        <div className="survey-step" data-step="2">
            <h1 className="modal-hdl">Your booking query</h1>
            <h2 className="modal-hdl">Contact Information</h2>
            {formFields.map((input) => (
                <label key={input.id}>
                    {input.label}
                    < input
                        type={input.type}
                        placeholder={input.placeholder}
                        {...register(input.key, input.required ? {
                            required: "Please filled in required field", minLength: {
                                value: 2,
                                message: "Min length is 2"
                            }
                        } : undefined)}
                    />
                    {
                        errors[input.key] && (
                            <span className="">
                                {(errors[input.key]?.message as string) || 'Please filled in all required fields'}
                            </span>
                        )
                    }
                </label>
            ))}
        </div >
    );
}

export default Step2;
