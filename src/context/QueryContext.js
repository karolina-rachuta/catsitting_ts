import React, { useState, createContext } from 'react';

export const FormContext = createContext();
const INITIAL_FORM = {
    catsName: '',
    numberOfCats: '1',
    address: '',
    catsittingOption: '',
    startDate: '',
    endDate: '',
    message: '',
    name: '',
    phone: '',
    email: '',
    contactConsent: false,
    step: 0,
    isValid: false,
};

export function FormContextProvider({ children }) {
    const [forms, setForms] = useState(INITIAL_FORM);

    const setFormValues = (name, value) => {
        setForms((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    return (
        <FormContext.Provider
            value={{
                forms,
                setFormValues,
                setForms,
                INITIAL_FORM,
            }}
        >
            {children}{' '}
        </FormContext.Provider>
    );
}
