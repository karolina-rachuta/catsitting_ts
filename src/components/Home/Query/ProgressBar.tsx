import React, { FC } from 'react';
import useFormContext from '../../../context/useFormContext';

const ProgressBar: FC = () => {
    const {
        forms: { step },
    } = useFormContext();

    return (
        <div className="survey-header">
            <div className="progress-bar">
                <div
                    className="progress"
                    style={{ width: `${((step + 1) / 2) * 100}%` }}
                ></div>
            </div>
            <div className="step-indicator">
                Step <span className="current-step">{step + 1}</span> of 2
            </div>
        </div>
    );
}

export default ProgressBar;
