import { useState, useEffect } from 'react'
import styles from './Select.module.css'


const Select = ({ props }) => {
    const [value, setValue] = useState(props.value)
    const handleChangeValue = (event) => setValue(event.target.value)

    const [helpText, setHelpText] = useState(props.helpText)

    useEffect(() => {
        if (value === "") {
            setHelpText("Debes elegir una opción, es obligatorio")
        } else {
            setHelpText("")
        }
    }, [value])

    return (
        <div className={styles.Select}>
            <label className="form-label">{props.label}</label>
            <select onChange={handleChangeValue}
                className="form-select form-control-lg"
            >
                {props.options.map(
                    (n, index) => <option key={index} value={n.value}>{n.text}</option>
                )}
            </select>
            <div className="form-text">
                {helpText}
            </div>
        </div>
    )
}

export default Select