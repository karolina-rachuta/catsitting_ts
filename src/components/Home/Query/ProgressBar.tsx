import React, { useContext } from 'react';
import { FormContext } from '../../../context/QueryContext';

function ProgressBar() {
    const context = useContext(FormContext);
    if (!context) {
        throw Error('Context is undefined');
    }

    const {
        forms: { step },
    } = context;

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
