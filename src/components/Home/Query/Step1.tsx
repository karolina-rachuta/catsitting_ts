import React, { useContext } from 'react';
import { FormContext } from '../../../context/QueryContext';

function Step1() {
    const context = useContext(FormContext);
    if (!context) {
        throw Error('Context is undefined');
    }

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
    } = context;

    return (
        <div className="survey-step" data-step="1">
            <h1 className="modal-hdl">Your booking query</h1>
            <h2 className="modal-hdl">Information about your cat/s</h2>

            <label htmlFor="">
                Name of your cat/s (required)
                <input
                    type="text"
                    placeholder="Name of your cat/s"
                    value={catsName}
                    name="catsName"
                    required
                    onChange={(e) => setFormValues('catsName', e.target.value)}
                />
            </label>

            <label htmlFor="">
                How many cats? (required)
                <select
                    value={numberOfCats}
                    onChange={(e) =>
                        setFormValues('numberOfCats', e.target.value)
                    }
                    required
                    name="numberOfCats"
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="more">more than 3</option>
                </select>
            </label>

            <label htmlFor="">
                {' '}
                Which cat sitting option do you choose? (required)
                <select
                    value={catsittingOption}
                    onChange={(e) =>
                        setFormValues('catsittingOption', e.target.value)
                    }
                    name="catsittingOption"
                    required
                >
                    {' '}
                    <option value="choose">choose your option</option>
                    <option value="30min">30 min - 80 AED</option>
                    <option value="30minx2">
                        30 min x twice per day - 120 AED
                    </option>
                    <option value="1h">1h - 120 AED</option>
                    <option value="2h">2h - 200 AED</option>
                    <option value="4h"> Half Day Care (4h) - 250 AED</option>
                    <option value="8h"> Day Care (8h) - 300 AED</option>
                    <option value="Additional">
                        {' '}
                        I will explain in the message what I am looking for
                    </option>
                </select>
            </label>
            <label htmlFor="">
                {' '}
                Start Day
                <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setFormValues('startDate', e.target.value)}
                    name="startDate"
                />
            </label>
            <label htmlFor="">
                {' '}
                End Day
                <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setFormValues('endDate', e.target.value)}
                    name="endDate"
                />
            </label>
            <label htmlFor="">
                {' '}
                Additional information about your cat (about health, medication
                ect.)
                <textarea
                    value={message}
                    onChange={(e) => setFormValues('message', e.target.value)}
                    name="message"
                    cols={10}
                    rows={4}
                    placeholder="Please provide extra information about your cat health or you can ask general question"
                />
            </label>
        </div>
    );
}

export default Step1;
