import React, { FC } from 'react';
import { services } from '../../../data/services';
import { useFormContext } from 'react-hook-form';
import { QueryFormValues } from './../../../types/types';

type FieldKey =
    | 'catsName'
    | 'numberOfCats'
    | 'catsittingOption'
    | 'startDate'
    | 'endDate'
    | 'message';

export type FormFields = {
    id: number;
    key: FieldKey;
    label: string;
    type: 'input' | 'select' | 'textarea';
    inputType?: React.HTMLInputTypeAttribute;
    options?: { value: string; label: string }[];
    placeholder?: string;
    required?: boolean;
};

const Step1: FC = () => {
    const { register, formState: { errors }, } = useFormContext<QueryFormValues>();

    const serviceOptions = services.map((s) => ({
        value: s.hdl,
        label: s.label,
    }));

    const formFields: FormFields[] = [
        {
            id: 1,
            key: 'catsName',
            label: 'Name of your cat/s (required)',
            type: 'input',
            inputType: 'text',
            placeholder: 'Name of your cat/s',
            required: true,
        },
        {
            id: 2,
            key: 'numberOfCats',
            label: 'How many cats? (required)',
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
            type: 'select',
            required: true,
            options: serviceOptions,
        },
        {
            id: 4,
            key: 'startDate',
            label: 'Start Day',
            type: 'input',
            inputType: 'date',
        },
        {
            id: 5,
            key: 'endDate',
            label: 'End Day',
            type: 'input',
            inputType: 'date',
        },
        {
            id: 6,
            key: 'message',
            label: 'Additional information about your cat (about health, medication etc.)',
            type: 'textarea',
            placeholder:
                'Please provide extra information about your cat health or ask a general question',
        }
    ]

    return (
        <div className="survey-step" data-step="1">
            <h1 className="modal-hdl">Your booking query</h1>
            <h2 className="modal-hdl">Information about your cat/s</h2>
            {formFields.map((field) => (
                <label key={field.id}>
                    {field.label}
                    {field.type === 'input' &&
                        <input type={field.inputType} placeholder={field.placeholder} {...register(field.key, field.required ? { required: 'Required' } : undefined)} />}

                    {field.type === 'select' &&
                        <select {...register(field.key, field.required ? { required: 'Required' } : undefined)}>
                            <option value="" disabled>
                                Choose one of the options below
                            </option>
                            {field.options?.map((option) => (
                                <option key={option.value}> {option.label} </option>

                            ))}
                            <option value="additional">
                                I will explain in the message what I am looking for
                            </option>
                        </select>}

                    {field.type === 'textarea' && (
                        <textarea
                            placeholder={field.placeholder}
                            {...register(field.key, field.required ? { required: 'Required' } : undefined)}
                        />
                    )}
                    {errors[field.key] && (
                        <span className="error">
                            {(errors[field.key]?.message as string) || 'Required'}
                        </span>
                    )}
                </label>
            ))}
        </div>
    );
}

export default Step1;
