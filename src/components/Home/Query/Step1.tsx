import React, { FC, ChangeEvent } from 'react';
import useFormContext from '../../../context/useFormContext';
import { services } from '../../../data/services';

type FieldKey =
    | 'catsName'
    | 'numberOfCats'
    | 'catsittingOption'
    | 'startDate'
    | 'endDate'
    | 'message';

export type Form = {
    id: number;
    key: FieldKey;
    label: string;
    value: string;
    type: 'input' | 'select' | 'textarea';
    inputType?: React.HTMLInputTypeAttribute;
    options?: { value: string; label: string }[];
    placeholder?: string;
    required?: boolean;
};

const Step1: FC = () => {

    const {
        forms: {
            catsName,
            numberOfCats,
            catsittingOption,
            startDate,
            endDate,
            message,
        },
        setFormValues,
    } = useFormContext();

    const serviceOptions = services.map((s) => ({
        value: s.hdl,
        label: s.label,
    }));

    const handleChange =
        (key: Form['key']) => (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLTextAreaElement>) =>
            setFormValues(key, e.target.value);

    const form: Form[] = [
        {
            id: 1,
            key: 'catsName',
            label: 'Name of your cat/s (required)',
            value: catsName,
            type: 'input',
            inputType: 'text',
            placeholder: 'Name of your cat/s',
            required: true,
        },
        {
            id: 2,
            key: 'numberOfCats',
            label: 'How many cats? (required)',
            value: numberOfCats,
            type: 'select',
            required: true,
            options: [
                { value: '1', label: '1' },
                { value: '2', label: '2' },
                { value: '3', label: '3' },
                { value: 'more', label: 'more than 3' },
            ],
        },
        {
            id: 3,
            key: 'catsittingOption',
            label: 'Which cat sitting option do you choose? (required)',
            value: catsittingOption,
            type: 'select',
            required: true,
            options: serviceOptions,
        },
        {
            id: 4,
            key: 'startDate',
            label: 'Start Day',
            value: startDate,
            type: 'input',
            inputType: 'date',
        },
        {
            id: 5,
            key: 'endDate',
            label: 'End Day',
            value: endDate,
            type: 'input',
            inputType: 'date',
        },
        {
            id: 6,
            key: 'message',
            label: 'Additional information about your cat (about health, medication etc.)',
            value: message,
            type: 'textarea',
            placeholder:
                'Please provide extra information about your cat health or ask a general question',
        }
    ]

    return (
        <div className="survey-step" data-step="1">
            <h1 className="modal-hdl">Your booking query</h1>
            <h2 className="modal-hdl">Information about your cat/s</h2>
            {form.map((field) => (
                <label key={field.key}>
                    {field.label}
                    {field.type === 'input' &&
                        <input type={field.inputType} placeholder={field.placeholder} value={field.value} name={field.key} required={field.required} onChange={handleChange(field.key)} />}

                    {field.type === 'select' &&
                        <select value={field.value} onChange={handleChange(field.key)} required={field.required} name={field.key}>
                            <option value="" disabled>
                                Choose one of the options below
                            </option>
                            {field.options?.map((option) => (
                                <option key={option.value} value={option.value}> {option.label} </option>

                            ))}
                            <option value="additional">
                                I will explain in the message what I am looking for
                            </option>
                        </select>}

                    {field.type === 'textarea' && (
                        <textarea
                            value={field.value}
                            placeholder={field.placeholder}
                            onChange={handleChange(field.key)}
                        />
                    )}
                </label>
            ))}
        </div>
    );
}

export default Step1;
