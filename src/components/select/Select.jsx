import { useState, useEffect } from 'react'
import styles from './Select.module.css'


const Select = ({ props }) => {
    const [helpText, setHelpText] = useState(props.helpText)

    useEffect(() => {
        if (props.value === "") {
            setHelpText("Debes elegir una opción, es requerido")
        } else {
            setHelpText("")
        }
    }, [props.value])

    return (
        <div className={styles.Select}>
            <label className="form-label">{props.label}</label>
            <select onChange={props.handle}
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