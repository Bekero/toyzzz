
import { useEffect, useState } from "react"

export const useForm = (initialState, callBack) => {

    const [fields, setFields] = useState(initialState)
    const [labels, setLabels] = useState(initialState.labels)

    useEffect(() => {
        if (callBack) return callBack(fields)
    }, [fields])

    const handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        setFields(prevFields => ({ ...prevFields, [field]: value }))
    }

    const handleCheckbox = ({ target }) => {
        const label = target.name
        if (target.checked) labels.push(label)
        else if (!target.checked) {
            const idx = labels.findIndex( currLabel => currLabel === label)
            labels.splice(idx, 1)
        }
        setFields(initialState => ({ ...initialState, labels }))
    }

    return [fields, handleChange, setFields, handleCheckbox]

}