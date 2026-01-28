import React, { useState, createContext, PropsWithChildren } from 'react';

type Form = {
    step: number;
    isValid: boolean;
};

const initialForm: Form = {
    step: 0,
    isValid: false,
};

type FormContextType = {
    forms: Form;
    setFormValues: (name: keyof Form, value: Form[keyof Form]) => void;
    setForms: React.Dispatch<React.SetStateAction<Form>>;
    initialForm: Form;
};

export const FormContext = createContext<FormContextType | null>(null);
export function FormContextProvider({ children }: PropsWithChildren) {
    const [forms, setForms] = useState<Form>(initialForm);

    const setFormValues = (name: keyof Form, value: Form[keyof Form]) => {
        setForms((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <FormContext.Provider
            value={{ forms, setFormValues, setForms, initialForm }}
        >
            {children}
        </FormContext.Provider>
    );
}
