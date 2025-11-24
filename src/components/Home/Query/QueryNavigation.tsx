import React, { useContext } from 'react';
import { FormContext } from '../../../context/QueryContext';

function QueryNavigation() {
    const context = useContext(FormContext);

    if (!context) {
        throw Error('Context is undefined');
    }
    const {
        forms: { step, isValid },
        setFormValues,
    } = context;

    return (
        <div className="survey-navigation">
            <button
                type="button"
                className={step !== 0 ? 'prev-btn' : ' hidden'}
                onClick={() => setFormValues('step', step - 1)}
            >
                Previous
            </button>

            <button
                type="button"
                className={step !== 1 ? 'next-btn' : 'hidden'}
                onClick={() => setFormValues('step', step + 1)}
            >
                Next
            </button>

            <button
                type="submit"
                className={step === 1 ? 'submit-btn' : 'no-visible'}
            >
                Submit
            </button>
        </div>
    );
}

export default QueryNavigation;
