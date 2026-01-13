import React, { FC } from 'react';
import useFormContext from '../../../context/useFormContext';
import clsx from 'clsx';

const QueryNavigation: FC = () => {
    const {
        forms: { step },
        setFormValues,
    } = useFormContext();

    return (
        <div className="survey-navigation">
            <button
                type="button"
                className={clsx('prev-btn', { hidden: step === 0 })}
                onClick={() => setFormValues('step', step - 1)}
            >
                Previous
            </button>

            <button
                type="button"
                className={clsx('next-btn', { hidden: step === 1 })}
                onClick={() => setFormValues('step', step + 1)}
            >
                Next
            </button>

            <button
                type="submit"
                className={clsx('submit-btn', { hidden: step !== 1 })}
            >
                Submit
            </button>
        </div>
    );
}

export default QueryNavigation;
