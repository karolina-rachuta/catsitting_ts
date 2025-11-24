import React, { useState, createContext, ReactNode } from 'react';

type Form = {
    catsName: string;
    numberOfCats: string;
    address: string;
    catsittingOption: string;
    startDate: string;
    endDate: string;
    message: string;
    name: string;
    phone: string;
    email: string;
    contactConsent: boolean;
    step: number;
    isValid: boolean;
};

const INITIAL_FORM: Form = {
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

type FormContextType = {
    forms: Form;
    setFormValues: (name: keyof Form, value: Form[keyof Form]) => void;
    setForms: React.Dispatch<React.SetStateAction<Form>>;
    INITIAL_FORM: Form;
};
type FormContextProviderProps = {
    children: ReactNode;
};

export const FormContext = createContext<FormContextType | null>(null);
export function FormContextProvider({ children }: FormContextProviderProps) {
    const [forms, setForms] = useState<Form>(INITIAL_FORM);

    const setFormValues = (name: keyof Form, value: Form[keyof Form]) => {
        setForms((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <FormContext.Provider
            value={{ forms, setFormValues, setForms, INITIAL_FORM }}
        >
            {children}
        </FormContext.Provider>
    );
}
