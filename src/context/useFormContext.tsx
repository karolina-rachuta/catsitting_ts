import { useContext } from 'react'
import { FormContext } from './QueryContext'

function useFormContext() {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error('Context is undefined, define context')
    }
    return context;
}

export default useFormContext
